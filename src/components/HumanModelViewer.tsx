'use client';

import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useFitnessStore } from '@/store/useFitnessStore';

interface SculptedPartProps {
  muscleId?: string;
  subzoneId?: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  geometryType:
    | 'chest'
    | 'abs'
    | 'deltoid'
    | 'biceps'
    | 'triceps'
    | 'forearm'
    | 'hand'
    | 'traps'
    | 'lats'
    | 'lower_back'
    | 'glute'
    | 'quad'
    | 'hamstring'
    | 'calf'
    | 'foot'
    | 'head';
  isHighlighted?: boolean;
  isSubzoneHighlighted?: boolean;
  hoveredMuscleId?: string | null;
  setHoveredMuscleId?: (id: string | null) => void;
  onClickMuscle?: (muscleId: string, subzoneId?: string) => void;
  isNeutral?: boolean;
}

function useAnatomicalGeometries() {
  return useMemo(() => {
    // 1. Pectoral individual (se renderizan 2: Izquierdo y Derecho)
    const chestGeo = new THREE.CylinderGeometry(0.12, 0.08, 0.22, 24, 1, false, 0, Math.PI);
    chestGeo.rotateX(Math.PI / 2);
    chestGeo.scale(1, 0.5, 1.1);

    // 2. Abdomen limpio con cuadritos (6-Pack)
    const absGeo = new THREE.BoxGeometry(0.28, 0.44, 0.12, 2, 6, 1);
    const absPos = absGeo.attributes.position;
    for (let i = 0; i < absPos.count; i++) {
      let y = absPos.getY(i);
      let z = absPos.getZ(i);
      if (z > 0) absPos.setZ(i, z + Math.sin(y * 18) * 0.016);
    }
    absGeo.computeVertexNormals();

    // 3. Deltoides (Hombros redondos y proporcionados)
    const deltoidGeo = new THREE.SphereGeometry(0.125, 24, 24);
    deltoidGeo.scale(1, 1.15, 0.95);

    // 4. Bíceps
    const bicepsGeo = new THREE.CylinderGeometry(0.06, 0.045, 0.32, 24);
    const bPos = bicepsGeo.attributes.position;
    for (let i = 0; i < bPos.count; i++) {
      let y = bPos.getY(i);
      let r = 1 + Math.cos(y * 6) * 0.2;
      bPos.setX(i, bPos.getX(i) * r);
      bPos.setZ(i, bPos.getZ(i) * r);
    }
    bicepsGeo.computeVertexNormals();

    // 5. Tríceps
    const tricepsGeo = new THREE.CylinderGeometry(0.07, 0.05, 0.34, 24);

    // 6. Antebrazo
    const forearmGeo = new THREE.CylinderGeometry(0.06, 0.038, 0.36, 24);

    // 7. Mano
    const handGeo = new THREE.BoxGeometry(0.06, 0.12, 0.03);

    // 8. Trapecio Superior
    const trapsGeo = new THREE.ConeGeometry(0.24, 0.28, 4);
    trapsGeo.rotateY(Math.PI / 4);
    trapsGeo.scale(1.2, 1, 0.5);

    // 9. Dorsales
    const latsGeo = new THREE.CylinderGeometry(0.22, 0.13, 0.38, 24, 1, false, 0, Math.PI);
    latsGeo.rotateY(-Math.PI / 2);
    latsGeo.scale(1, 1, 0.58);

    // 10. Espalda Baja (Lumbar / Erectores Espinales)
    const lowerBackGeo = new THREE.BoxGeometry(0.26, 0.24, 0.11);

    // 11. Glúteo (Redondo y ajustado en tamaño)
    const gluteGeo = new THREE.SphereGeometry(0.13, 24, 24);
    gluteGeo.scale(0.95, 1.05, 1.1);

    // 12. Cuádriceps
    const quadGeo = new THREE.CylinderGeometry(0.115, 0.08, 0.52, 24);

    // 13. Isquiotibiales
    const hamGeo = new THREE.CylinderGeometry(0.09, 0.07, 0.52, 24);

    // 14. Pantorrilla
    const calfGeo = new THREE.CylinderGeometry(0.08, 0.042, 0.46, 24);

    // 15. Pie
    const footGeo = new THREE.BoxGeometry(0.085, 0.06, 0.2);

    // 16. Cabeza
    const headGeo = new THREE.SphereGeometry(0.17, 24, 24);
    headGeo.scale(0.9, 1.12, 1);

    return {
      chest: chestGeo,
      abs: absGeo,
      deltoid: deltoidGeo,
      biceps: bicepsGeo,
      triceps: tricepsGeo,
      forearm: forearmGeo,
      hand: handGeo,
      traps: trapsGeo,
      lats: latsGeo,
      lower_back: lowerBackGeo,
      glute: gluteGeo,
      quad: quadGeo,
      hamstring: hamGeo,
      calf: calfGeo,
      foot: footGeo,
      head: headGeo,
    };
  }, []);
}

function SculptedPart({
  muscleId,
  subzoneId,
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  geometryType,
  isHighlighted = false,
  isSubzoneHighlighted = false,
  hoveredMuscleId,
  setHoveredMuscleId,
  onClickMuscle,
  isNeutral = false,
}: SculptedPartProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometries = useAnatomicalGeometries();
  const isHovered = muscleId ? hoveredMuscleId === muscleId : false;

  const material = useMemo(() => {
    if (isNeutral) {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color('#94a3b8'),
        roughness: 0.4,
        metalness: 0.1,
      });
    }
    if (isSubzoneHighlighted || isHighlighted) {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color('#10b981'),
        emissive: new THREE.Color('#047857'),
        emissiveIntensity: isHovered ? 0.9 : 0.6,
        roughness: 0.2,
      });
    }
    if (isHovered) {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color('#34d399'),
        emissive: new THREE.Color('#059669'),
        emissiveIntensity: 0.5,
        roughness: 0.25,
      });
    }
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#3b4758'),
      roughness: 0.4,
      metalness: 0.15,
    });
  }, [isHighlighted, isSubzoneHighlighted, isHovered, isNeutral]);

  const geometry = geometries[geometryType];

  if (isNeutral || !muscleId) {
    return (
      <mesh
        ref={meshRef}
        geometry={geometry}
        position={position}
        rotation={rotation}
        scale={scale}
        material={material}
      />
    );
  }

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
      material={material}
      onPointerOver={(e) => {
        e.stopPropagation();
        if (setHoveredMuscleId) setHoveredMuscleId(muscleId);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        if (setHoveredMuscleId) setHoveredMuscleId(null);
        document.body.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClickMuscle) onClickMuscle(muscleId, subzoneId);
      }}
    />
  );
}

function SculptedHumanoid({ setFacingView }: { setFacingView: (view: string) => void }) {
  const { selectedMuscleId, selectedSubzoneId, setSelectedMuscleId, setSelectedSubzoneId } =
    useFitnessStore();
  const [hoveredMuscleId, setHoveredMuscleId] = useState<string | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ camera }, delta) => {
    if (groupRef.current) {
      if (!hoveredMuscleId) {
        groupRef.current.rotation.y += delta * 0.2;
      }

      const worldVector = new THREE.Vector3(0, 0, 1).applyQuaternion(groupRef.current.quaternion);
      const cameraDirection = camera.position.clone().sub(groupRef.current.position).normalize();
      const dot = worldVector.dot(cameraDirection);

      if (dot > 0) {
        setFacingView('Vista Frontal');
      } else {
        setFacingView('Vista Trasera');
      }
    }
  });

  const handleMuscleClick = (muscleId: string, subzoneId?: string) => {
    setSelectedMuscleId(muscleId);
    setSelectedSubzoneId(subzoneId || null);
  };

  const commonProps = {
    hoveredMuscleId,
    setHoveredMuscleId,
    onClickMuscle: handleMuscleClick,
  };

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Cabeza */}
      <SculptedPart geometryType="head" position={[0, 1.52, 0]} isNeutral={true} />

      {/* DOS PECTORALES (Izquierdo y Derecho) */}
      <SculptedPart
        muscleId="chest"
        subzoneId="chest-left"
        geometryType="chest"
        position={[-0.12, 1.08, 0.08]}
        isHighlighted={selectedMuscleId === 'chest'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('chest') || false}
        {...commonProps}
      />
      <SculptedPart
        muscleId="chest"
        subzoneId="chest-right"
        geometryType="chest"
        position={[0.12, 1.08, 0.08]}
        isHighlighted={selectedMuscleId === 'chest'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('chest') || false}
        {...commonProps}
      />

      {/* ABDOMEN LIMPIO CON CUADRITOS */}
      <SculptedPart
        muscleId="abs"
        subzoneId="abs-upper"
        geometryType="abs"
        position={[0, 0.68, 0.06]}
        isHighlighted={selectedMuscleId === 'abs'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('abs') ||
          selectedSubzoneId === 'obliques' ||
          selectedSubzoneId === 'transverse-abdominis' ||
          false
        }
        {...commonProps}
      />

      {/* ESPALDA COMPLETA (Trapecio, Dorsales y Espalda Baja) */}
      <SculptedPart
        muscleId="back"
        subzoneId="rhomboids-traps"
        geometryType="traps"
        position={[0, 1.22, -0.06]}
        isHighlighted={selectedMuscleId === 'back'}
        isSubzoneHighlighted={selectedSubzoneId === 'rhomboids-traps'}
        {...commonProps}
      />
      <SculptedPart
        muscleId="back"
        subzoneId="lats"
        geometryType="lats"
        position={[0, 0.88, -0.06]}
        isHighlighted={selectedMuscleId === 'back'}
        isSubzoneHighlighted={selectedSubzoneId === 'lats'}
        {...commonProps}
      />
      <SculptedPart
        muscleId="back"
        subzoneId="lower-back"
        geometryType="lower_back"
        position={[0, 0.58, -0.05]}
        isHighlighted={selectedMuscleId === 'back'}
        isSubzoneHighlighted={selectedSubzoneId === 'lower-back'}
        {...commonProps}
      />

      {/* HOMBROS REDONDOS Y PROPORCIONADOS */}
      <SculptedPart
        muscleId="shoulders"
        geometryType="deltoid"
        position={[-0.3, 1.18, 0]}
        isHighlighted={selectedMuscleId === 'shoulders'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('deltoid') || false}
        {...commonProps}
      />
      <SculptedPart
        muscleId="shoulders"
        geometryType="deltoid"
        position={[0.3, 1.18, 0]}
        isHighlighted={selectedMuscleId === 'shoulders'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('deltoid') || false}
        {...commonProps}
      />

      {/* BÍCEPS */}
      <SculptedPart
        muscleId="biceps"
        geometryType="biceps"
        position={[-0.32, 0.88, 0.05]}
        isHighlighted={selectedMuscleId === 'biceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('biceps') || selectedSubzoneId === 'brachialis' || false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="biceps"
        geometryType="biceps"
        position={[0.32, 0.88, 0.05]}
        isHighlighted={selectedMuscleId === 'biceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('biceps') || selectedSubzoneId === 'brachialis' || false
        }
        {...commonProps}
      />

      {/* TRÍCEPS */}
      <SculptedPart
        muscleId="triceps"
        geometryType="triceps"
        position={[-0.32, 0.88, -0.06]}
        isHighlighted={selectedMuscleId === 'triceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('triceps') || selectedSubzoneId === 'anconeus' || false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="triceps"
        geometryType="triceps"
        position={[0.32, 0.88, -0.06]}
        isHighlighted={selectedMuscleId === 'triceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('triceps') || selectedSubzoneId === 'anconeus' || false
        }
        {...commonProps}
      />

      {/* ANTEBRAZOS */}
      <SculptedPart
        muscleId="forearm"
        geometryType="forearm"
        position={[-0.35, 0.48, 0]}
        isHighlighted={selectedMuscleId === 'forearm'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('forearm') || selectedSubzoneId === 'brachioradialis' || false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="forearm"
        geometryType="forearm"
        position={[0.35, 0.48, 0]}
        isHighlighted={selectedMuscleId === 'forearm'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('forearm') || selectedSubzoneId === 'brachioradialis' || false
        }
        {...commonProps}
      />

      {/* MANOS */}
      <SculptedPart geometryType="hand" position={[-0.36, 0.22, 0]} isNeutral={true} />
      <SculptedPart geometryType="hand" position={[0.36, 0.22, 0]} isNeutral={true} />

      {/* GLÚTEOS REDONDOS Y ANATÓMICOS */}
      <SculptedPart
        muscleId="glutes"
        geometryType="glute"
        position={[-0.11, 0.32, -0.08]}
        isHighlighted={selectedMuscleId === 'glutes'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('gluteus') || false}
        {...commonProps}
      />
      <SculptedPart
        muscleId="glutes"
        geometryType="glute"
        position={[0.11, 0.32, -0.08]}
        isHighlighted={selectedMuscleId === 'glutes'}
        isSubzoneHighlighted={selectedSubzoneId?.startsWith('gluteus') || false}
        {...commonProps}
      />

      {/* CUÁDRICEPS */}
      <SculptedPart
        muscleId="quadriceps"
        geometryType="quad"
        position={[-0.14, -0.05, 0.07]}
        isHighlighted={selectedMuscleId === 'quadriceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('vastus') || selectedSubzoneId === 'rectus-femoris' || false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="quadriceps"
        geometryType="quad"
        position={[0.14, -0.05, 0.07]}
        isHighlighted={selectedMuscleId === 'quadriceps'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('vastus') || selectedSubzoneId === 'rectus-femoris' || false
        }
        {...commonProps}
      />

      {/* ISQUIOTIBIALES */}
      <SculptedPart
        muscleId="hamstrings"
        geometryType="hamstring"
        position={[-0.14, -0.05, -0.07]}
        isHighlighted={selectedMuscleId === 'hamstrings'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('biceps-femoris') ||
          selectedSubzoneId === 'semitendinosus' ||
          selectedSubzoneId === 'semimembranosus' ||
          false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="hamstrings"
        geometryType="hamstring"
        position={[0.14, -0.05, -0.07]}
        isHighlighted={selectedMuscleId === 'hamstrings'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('biceps-femoris') ||
          selectedSubzoneId === 'semitendinosus' ||
          selectedSubzoneId === 'semimembranosus' ||
          false
        }
        {...commonProps}
      />

      {/* PANTORRILLAS */}
      <SculptedPart
        muscleId="calves"
        geometryType="calf"
        position={[-0.14, -0.58, -0.03]}
        isHighlighted={selectedMuscleId === 'calves'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('gastrocnemius') || selectedSubzoneId === 'soleus' || false
        }
        {...commonProps}
      />
      <SculptedPart
        muscleId="calves"
        geometryType="calf"
        position={[0.14, -0.58, -0.03]}
        isHighlighted={selectedMuscleId === 'calves'}
        isSubzoneHighlighted={
          selectedSubzoneId?.startsWith('gastrocnemius') || selectedSubzoneId === 'soleus' || false
        }
        {...commonProps}
      />

      {/* PIES */}
      <SculptedPart geometryType="foot" position={[-0.14, -0.86, 0.05]} isNeutral={true} />
      <SculptedPart geometryType="foot" position={[0.14, -0.86, 0.05]} isNeutral={true} />
    </group>
  );
}

export const HumanModelViewer: React.FC<{ isDarkMode?: boolean }> = () => {
  const { setSelectedMuscleId, setSelectedSubzoneId } = useFitnessStore();
  const [facingView, setFacingView] = useState<string>('Vista Frontal');

  return (
    <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
      {/* Botón Reset */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={() => {
            setSelectedMuscleId('chest');
            setSelectedSubzoneId(null);
          }}
          className="px-3 py-1.5 text-xs font-bold bg-white/90 hover:bg-slate-100 text-slate-800 rounded-lg backdrop-blur-md border border-slate-200 transition shadow-sm"
        >
          Resetear Selección
        </button>
      </div>

      {/* Indicador de Vista Dinámica */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1.5 text-xs font-extrabold rounded-full backdrop-blur-md border shadow-sm transition-all ${
            facingView === 'Vista Frontal'
              ? 'bg-sky-50 text-sky-600 border-sky-200'
              : 'bg-emerald-50 text-emerald-600 border-emerald-200'
          }`}
        >
          {facingView}
        </span>
      </div>

      <Canvas camera={{ position: [0, 0.3, 3.4], fov: 45 }}>
        {/* Iluminación de estudio */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} />
        <directionalLight position={[-5, 5, -5]} intensity={1.1} />
        <pointLight position={[0, 2, 2]} intensity={0.8} />

        <Suspense
          fallback={
            <Html center>
              <div className="flex flex-col items-center gap-2 text-slate-800">
                <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold">Cargando Modelo Esculpido...</span>
              </div>
            </Html>
          }
        >
          <SculptedHumanoid setFacingView={setFacingView} />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={1.8}
          maxDistance={5.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};