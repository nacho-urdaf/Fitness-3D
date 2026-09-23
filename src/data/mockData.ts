import { MuscleGroup, Exercise } from '@/types/fitness';

export const MUSCLE_GROUPS: MuscleGroup[] = [
  {
    id: 'biceps',
    name: 'Bíceps Braquial',
    subzones: [
      { id: 'biceps-long-head', name: 'Cabeza Larga', description: 'Cara externa y pico del bíceps.' },
      { id: 'biceps-short-head', name: 'Cabeza Corta', description: 'Cara interna y anchura.' },
      { id: 'brachialis', name: 'Braquial Anterior', description: 'Grosor lateral y conexión con antebrazo.' },
    ],
  },
  {
    id: 'triceps',
    name: 'Tríceps Braquial',
    subzones: [
      { id: 'triceps-long-head', name: 'Cabeza Larga', description: 'Masa posterior superior.' },
      { id: 'triceps-lateral-head', name: 'Cabeza Lateral', description: 'Cara externa / Herradura.' },
      { id: 'triceps-medial-head', name: 'Cabeza Medial', description: 'Cercana al codo / Estabilidad.' },
    ],
  },
  {
    id: 'shoulders',
    name: 'Hombros (Deltoides)',
    subzones: [
      { id: 'deltoid-anterior', name: 'Deltoides Anterior', description: 'Porción frontal.' },
      { id: 'deltoid-lateral', name: 'Deltoides Lateral', description: 'Ancho visual.' },
      { id: 'deltoid-posterior', name: 'Deltoides Posterior', description: 'Cara trasera.' },
    ],
  },
  {
    id: 'chest',
    name: 'Pecho (Pectoral)',
    subzones: [
      { id: 'chest-upper', name: 'Pectoral Superior', description: 'Porción clavicular.' },
      { id: 'chest-mid-lower', name: 'Pectoral Medio e Inferior', description: 'Porción esternocostal.' },
    ],
  },
  {
    id: 'back',
    name: 'Espalda',
    subzones: [
      { id: 'lats', name: 'Dorsal Ancho', description: 'Anchura en V.' },
      { id: 'rhomboids-traps', name: 'Trapecio y Romboides', description: 'Grosor y zona media.' },
      { id: 'spinal-erectors', name: 'Erectores Espinales', description: 'Zona lumbar y columna.' },
    ],
  },
  {
    id: 'abs',
    name: 'Abdomen y Core',
    subzones: [
      { id: 'rectus-abdominis', name: 'Recto Abdominal', description: 'Six-Pack.' },
      { id: 'obliques', name: 'Oblicuos', description: 'Laterales del abdomen.' },
      { id: 'transverse-abdominis', name: 'Transverso / Core Profundo', description: 'Anti-movimiento y estabilidad.' },
    ],
  },
  {
    id: 'quads-hamstrings',
    name: 'Cuádriceps e Isquiotibiales',
    subzones: [
      { id: 'quadriceps', name: 'Cuádriceps', description: 'Recto femoral y vastos.' },
      { id: 'hamstrings', name: 'Isquiotibiales', description: 'Bíceps femoral, semitendinoso y semimembranoso.' },
    ],
  },
  {
    id: 'glutes',
    name: 'Glúteos',
    subzones: [
      { id: 'glutes-sub', name: 'Glúteos', description: 'Glúteo mayor, medio y menor.' },
    ],
  },
  {
    id: 'calves',
    name: 'Pantorrillas',
    subzones: [
      { id: 'calves-sub', name: 'Pantorrillas', description: 'Gastrocnemio y sóleo.' },
    ],
  },
];

export const MOCK_EXERCISES: Exercise[] = [
  // BÍCEPS
  { id: 'bic-l-1', name: 'Curl inclinado en banco (30° / 45° / 60°)', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'dumbbells' },
  { id: 'bic-l-2', name: 'Curl inclinado en banco alterno', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'dumbbells' },
  { id: 'bic-l-3', name: 'Curl inclinado con agarre en supinación constante', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'dumbbells' },
  { id: 'bic-l-4', name: 'Curl drag (arrastre) con mancuernas', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'dumbbells' },
  { id: 'bic-l-5', name: 'Curl con liga anclada atrás a altura baja', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'bands' },
  { id: 'bic-l-6', name: 'Curl de bíceps con liga cruzada desde atrás', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'bands' },
  { id: 'bic-l-7', name: 'Curl bayesiano en polea baja unilateral', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'machines' },
  { id: 'bic-l-8', name: 'Curl en polea baja con barra recta por detrás', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'machines' },
  { id: 'bic-l-9', name: 'Flexión de codo sobre barra fija en suspensión inclinada', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'bodyweight' },
  { id: 'bic-l-10', name: 'Dominada supinada con separación amplia', muscleGroupId: 'biceps', subzoneId: 'biceps-long-head', equipment: 'bodyweight' },

  { id: 'bic-s-1', name: 'Curl predicador unilateral con mancuerna', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'dumbbells' },
  { id: 'bic-s-2', name: 'Curl araña (Spider curl) en banco inclinado', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'dumbbells' },
  { id: 'bic-s-3', name: 'Curl concentrado sentado apoyado en el muslo', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'dumbbells' },
  { id: 'bic-s-4', name: 'Curl estilo Zottman', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'dumbbells' },
  { id: 'bic-s-5', name: 'Curl con liga pisada con apertura amplia', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'bands' },
  { id: 'bic-s-6', name: 'Curl de pico con liga anclada a altura de hombros', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'bands' },
  { id: 'bic-s-7', name: 'Curl en banco Scott/Predicador con barra Z guiada', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'machines' },
  { id: 'bic-s-8', name: 'Curl en máquina de bíceps sentado', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'machines' },
  { id: 'bic-s-9', name: 'Curl doble de bíceps en poleas altas cruzadas', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'machines' },
  { id: 'bic-s-10', name: 'Dominadas supinadas agarre cerrado (Chin-ups)', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'bodyweight' },

  { id: 'bic-b-1', name: 'Curl martillo alterno de pie', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-2', name: 'Curl martillo simultáneo', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-3', name: 'Curl martillo en banco inclinado', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-4', name: 'Curl martillo cruzado al pecho (Pinwheel curl)', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-5', name: 'Curl reverso con mancuernas (agarre pronado)', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },

  // TRÍCEPS
  { id: 'tri-l-1', name: 'Extensiones verticales tras nuca a dos manos', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-2', name: 'Extensiones tras nuca unilateral', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-3', name: 'California press con mancuernas', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-4', name: 'Extensiones sobre la cabeza pisando la liga', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bands' },
  { id: 'tri-l-5', name: 'Extensiones tras nuca con liga anclada media/baja', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bands' },
  { id: 'tri-l-6', name: 'Extensiones tras nuca en polea alta con cuerda', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'machines' },

  { id: 'tri-lat-1', name: 'Patada de tríceps (Kickback) en banco horizontal', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'dumbbells' },
  { id: 'tri-lat-2', name: 'Hex press (Press de pecho agarre neutro cerrado)', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'dumbbells' },
  { id: 'tri-lat-3', name: 'Jalón en polea alta con cuerda (abriendo al final)', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'machines' },

  { id: 'tri-m-1', name: 'Press francés en banco plano con agarre supinado', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'dumbbells' },
  { id: 'tri-m-2', name: 'Fondos en paralelas centrados en tríceps', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'bodyweight' },

  // HOMBROS
  { id: 'sho-a-1', name: 'Press militar de pie con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-2', name: 'Press Arnold', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-l-1', name: 'Elevaciones laterales de pie con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'dumbbells' },
  { id: 'sho-p-1', name: 'Face pull en polea alta con cuerda hacia la frente', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'machines' },

  // PECHO
  { id: 'ch-u-1', name: 'Press inclinado con mancuernas (30°, 45°)', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'dumbbells' },
  { id: 'ch-m-1', name: 'Press plano con mancuernas', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'dumbbells' },
  { id: 'ch-m-2', name: 'Flexiones de brazos estándar', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'bodyweight' },

  // ESPALDA
  { id: 'back-l-1', name: 'Remo a una mano apoyado en banco', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'dumbbells' },
  { id: 'back-l-2', name: 'Jalón al pecho en polea alta', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'machines' },

  // ABDOMEN
  { id: 'abs-r-1', name: 'Crunch abdominal con mancuerna', muscleGroupId: 'abs', subzoneId: 'rectus-abdominis', equipment: 'dumbbells' },
  { id: 'abs-o-1', name: 'Plancha lateral dinámica', muscleGroupId: 'abs', subzoneId: 'obliques', equipment: 'bodyweight' },

  // CUÁDRICEPS E ISQUIOTIBIALES
  { id: 'leg-q-1', name: 'Sentadilla copa / Búlgara / Zancadas', muscleGroupId: 'quads-hamstrings', subzoneId: 'quadriceps', equipment: 'dumbbells' },
  { id: 'leg-h-1', name: 'Peso muerto rumano con mancuernas', muscleGroupId: 'quads-hamstrings', subzoneId: 'hamstrings', equipment: 'dumbbells' },

  // GLÚTEOS
  { id: 'gl-g-1', name: 'Hip Thrust con mancuerna', muscleGroupId: 'glutes', subzoneId: 'glutes-sub', equipment: 'dumbbells' },

  // PANTORRILLAS
  { id: 'gl-c-1', name: 'Elevación de talones de pie/sentado', muscleGroupId: 'calves', subzoneId: 'calves-sub', equipment: 'dumbbells' },
];