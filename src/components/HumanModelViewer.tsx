'use client';

import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFitnessStore } from '@/store/useFitnessStore';
import { MUSCLE_GROUPS } from '@/data/mockData';
import { Activity, RotateCcw } from 'lucide-react';
import * as THREE from 'three';

interface Props {
  isDarkMode?: boolean;
}

interface StylizedMuscleProps {
  id: string;
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  isDarkMode?: boolean;
}

const StylizedMuscleMesh: React.FC<StylizedMuscleProps> = ({
  id,
  geometry,
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  isDarkMode = false,
}) => {
  const { selectedMuscleId, setSelectedMuscle } = useFitnessStore();
  const [hovered, setHovered] = useState(false);

  const isSelected = selectedMuscleId === id;

  return (
    <mesh
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedMuscle(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      <meshStandardMaterial
        color={
          isSelected
            ? '#38bdf8'
            : hovered
            ? '#06b6d4'
            : isDarkMode
            ? '#1e293b'
            : '#cbd5e1'
        }
        emissive={
          isSelected
            ? '#0284c7'
            : hovered
            ? '#0891b2'
            : isDarkMode
            ? '#0f172a'
            : '#64748b'
        }
        emissiveIntensity={isSelected ? 0.9 : hovered ? 0.7 : 0.15}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
};

const StylizedAthleteBody: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode }) => {
  const headGeo = React.useMemo(() => new THREE.SphereGeometry(0.24, 32, 32), []);
  const neckGeo = React.useMemo(() => new THREE.CylinderGeometry(0.12, 0.14, 0.28, 24), []);
  const chestGeo = React.useMemo(() => new THREE.CylinderGeometry(0.42, 0.32, 0.38, 32), []);
  const absGeo = React.useMemo(() => new THREE.CylinderGeometry(0.3, 0.26, 0.45, 32), []);
  const shoulderGeo = React.useMemo(() => new THREE.SphereGeometry(0.18, 32, 32), []);
  const armGeo = React.useMemo(() => new THREE.CapsuleGeometry(0.11, 0.38, 16, 16), []);
  const latGeo = React.useMemo(() => new THREE.CylinderGeometry(0.45, 0.28, 0.48, 32), []);
  const gluteGeo = React.useMemo(() => new THREE.SphereGeometry(0.22, 32, 32), []);
  const legGeo = React.useMemo(() => new THREE.CapsuleGeometry(0.15, 0.68, 16, 16), []);
  const calfGeo = React.useMemo(() => new THREE.CapsuleGeometry(0.12, 0.58, 16, 16), []);
  const trapBackGeo = React.useMemo(() => new THREE.BoxGeometry(0.38, 0.22, 0.12), []);

  return (
    <group position={[0, -0.2, 0]}>
      <mesh geometry={headGeo} position={[0, 2.25, 0]}>
        <meshStandardMaterial color={isDarkMode ? '#0f172a' : '#475569'} roughness={0.4} />
      </mesh>
      <mesh geometry={neckGeo} position={[0, 1.95, 0]}>
        <meshStandardMaterial color={isDarkMode ? '#0f172a' : '#475569'} roughness={0.4} />
      </mesh>

      <StylizedMuscleMesh id="back" geometry={trapBackGeo} position={[0, 1.78, -0.08]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="chest" geometry={chestGeo} position={[-0.2, 1.55, 0.08]} rotation={[0, 0, -0.1]} scale={[0.85, 0.85, 0.7]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="chest" geometry={chestGeo} position={[0.2, 1.55, 0.08]} rotation={[0, 0, 0.1]} scale={[0.85, 0.85, 0.7]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="back" geometry={latGeo} position={[0, 1.48, -0.06]} scale={[1, 0.9, 0.7]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="abs" geometry={absGeo} position={[0, 1.08, 0.06]} scale={[0.9, 0.9, 0.8]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="shoulders" geometry={shoulderGeo} position={[-0.54, 1.66, 0]} scale={[1.1, 0.9, 1]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="shoulders" geometry={shoulderGeo} position={[0.54, 1.66, 0]} scale={[1.1, 0.9, 1]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="biceps" geometry={armGeo} position={[-0.54, 1.25, 0.06]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="biceps" geometry={armGeo} position={[0.54, 1.25, 0.06]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="triceps" geometry={armGeo} position={[-0.54, 1.24, -0.07]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="triceps" geometry={armGeo} position={[0.54, 1.24, -0.07]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="glutes" geometry={gluteGeo} position={[-0.2, 0.65, -0.1]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="glutes" geometry={gluteGeo} position={[0.2, 0.65, -0.1]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="quads-hamstrings" geometry={legGeo} position={[-0.21, 0.12, 0.03]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="quads-hamstrings" geometry={legGeo} position={[0.21, 0.12, 0.03]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="calves" geometry={calfGeo} position={[-0.21, -0.58, -0.04]} isDarkMode={isDarkMode} />
      <StylizedMuscleMesh id="calves" geometry={calfGeo} position={[0.21, -0.58, -0.04]} isDarkMode={isDarkMode} />
    </group>
  );
};

export const HumanModelViewer: React.FC<Props> = ({ isDarkMode = false }) => {
  const { selectedMuscleId, setSelectedMuscle } = useFitnessStore();
  const controlsRef = useRef<any>(null);

  const currentMuscleName = MUSCLE_GROUPS.find(
    (m) => m.id === selectedMuscleId
  )?.name;

  const rotateCamera = (azimuthAngle: number) => {
    if (controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(azimuthAngle);
    }
  };

  return (
    <div className={`w-full h-full min-h-[350px] sm:min-h-[450px] relative rounded-2xl overflow-hidden border transition-colors duration-300 flex flex-col shadow-lg touch-none ${
      isDarkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-100/90 border-slate-200'
    }`}>
      {/* Barra de Estado Superior */}
      <div className={`absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 backdrop-blur-md border px-3 py-1.5 rounded-xl text-xs font-medium shadow-sm ${
        isDarkMode ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200 text-slate-700'
      }`}>
        <Activity className="w-3.5 h-3.5 text-sky-500 shrink-0" />
        <span className="truncate max-w-[180px] sm:max-w-none">
          Músculo:{' '}
          <strong className="text-sky-500">
            {currentMuscleName || 'Toca un músculo'}
          </strong>
        </span>
      </div>

      {/* Botones de Vista */}
      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
        <button
          onClick={() => rotateCamera(0)}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all border shadow-sm active:scale-95 ${
            isDarkMode ? 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-white/90 hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          Frente
        </button>
        <button
          onClick={() => rotateCamera(Math.PI)}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all border shadow-sm active:scale-95 ${
            isDarkMode ? 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-white/90 hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          Espalda
        </button>

        {selectedMuscleId && (
          <button
            onClick={() => setSelectedMuscle(null)}
            className={`p-1.5 rounded-xl text-xs transition-all border shadow-sm active:scale-95 ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`}
            title="Limpiar Selección"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Instructivo */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-center pointer-events-none">
        <span className={`text-[10px] sm:text-[11px] px-3 py-1 rounded-full border backdrop-blur-sm shadow-sm font-medium ${
          isDarkMode ? 'bg-slate-900/90 text-slate-400 border-slate-800' : 'bg-white/90 text-slate-500 border-slate-200'
        }`}>
          Gira en 360° y toca un músculo
        </span>
      </div>

      {/* Canvas Three.js */}
      <Canvas camera={{ position: [0, 0.2, 5.8], fov: 45 }}>
        <ambientLight intensity={isDarkMode ? 0.8 : 1.5} />
        <directionalLight position={[5, 8, 5]} intensity={2.0} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 2, 2]} intensity={1.0} color="#0284c7" />

        <Suspense fallback={null}>
          <StylizedAthleteBody isDarkMode={isDarkMode} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={3.2}
          maxDistance={7.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};