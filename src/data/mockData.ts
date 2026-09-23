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
  // ==================== BÍCEPS BRAQUIAL ====================
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
  { id: 'bic-s-11', name: 'Dominada isométrica sosteniendo la barbilla', muscleGroupId: 'biceps', subzoneId: 'biceps-short-head', equipment: 'bodyweight' },

  { id: 'bic-b-1', name: 'Curl martillo alterno de pie', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-2', name: 'Curl martillo simultáneo', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-3', name: 'Curl martillo en banco inclinado', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-4', name: 'Curl martillo cruzado al pecho (Pinwheel curl)', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-5', name: 'Curl reverso con mancuernas (agarre pronado)', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'dumbbells' },
  { id: 'bic-b-6', name: 'Curl martillo con liga tensa en posición neutra', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'bands' },
  { id: 'bic-b-7', name: 'Curl reverso con liga pisada (agarre sobremano)', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'bands' },
  { id: 'bic-b-8', name: 'Curl martillo en polea baja con cuerda', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'machines' },
  { id: 'bic-b-9', name: 'Curl reverso en polea baja con barra recta o Z', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'machines' },
  { id: 'bic-b-10', name: 'Dominadas con agarre neutro en barras paralelas', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'bodyweight' },
  { id: 'bic-b-11', name: 'Dominadas usando toallas colgadas en la barra', muscleGroupId: 'biceps', subzoneId: 'brachialis', equipment: 'bodyweight' },

  // ==================== TRÍCEPS BRAQUIAL ====================
  { id: 'tri-l-1', name: 'Extensiones verticales tras nuca a dos manos', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-2', name: 'Extensiones tras nuca unilateral', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-3', name: 'California press con mancuernas', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'dumbbells' },
  { id: 'tri-l-4', name: 'Extensiones sobre la cabeza pisando la liga', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bands' },
  { id: 'tri-l-5', name: 'Extensiones tras nuca con liga anclada media/baja', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bands' },
  { id: 'tri-l-6', name: 'Extensiones tras nuca en polea alta con cuerda', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'machines' },
  { id: 'tri-l-7', name: 'Extensiones tras nuca en polea baja con barra Z', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'machines' },
  { id: 'tri-l-8', name: 'Extensiones en polea baja con cuerda inclinado', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'machines' },
  { id: 'tri-l-9', name: 'Sphinx push-ups (Extensiones en plancha)', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bodyweight' },
  { id: 'tri-l-10', name: 'Bodyweight triceps extension en barra baja', muscleGroupId: 'triceps', subzoneId: 'triceps-long-head', equipment: 'bodyweight' },

  { id: 'tri-lat-1', name: 'Patada de tríceps (Kickback) en banco horizontal', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'dumbbells' },
  { id: 'tri-lat-2', name: 'Patada de tríceps inclinada', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'dumbbells' },
  { id: 'tri-lat-3', name: 'Hex press (Press de pecho agarre neutro cerrado)', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'dumbbells' },
  { id: 'tri-lat-4', name: 'Jalón de tríceps vertical con liga anclada arriba', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'bands' },
  { id: 'tri-lat-5', name: 'Extensiones cruzadas con liga de arriba abajo', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'bands' },
  { id: 'tri-lat-6', name: 'Jalón en polea alta con cuerda (abriendo al final)', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'machines' },
  { id: 'tri-lat-7', name: 'Jalón en polea alta con barra V', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'machines' },
  { id: 'tri-lat-8', name: 'Extensión unilateral en polea alta sin agarre', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'machines' },
  { id: 'tri-lat-9', name: 'Flexiones en diamante (Diamond push-ups)', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'bodyweight' },
  { id: 'tri-lat-10', name: 'Flexiones declinadas con manos juntas', muscleGroupId: 'triceps', subzoneId: 'triceps-lateral-head', equipment: 'bodyweight' },

  { id: 'tri-m-1', name: 'Press francés en banco plano con agarre supinado', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'dumbbells' },
  { id: 'tri-m-2', name: 'Press francés en banco declinado', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'dumbbells' },
  { id: 'tri-m-3', name: 'Press de pecho agarre estrecho con mancuernas', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'dumbbells' },
  { id: 'tri-m-4', name: 'Extensiones en plano horizontal con liga en pared', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'bands' },
  { id: 'tri-m-5', name: 'Jalón en polea alta agarre supinado (inverso)', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'machines' },
  { id: 'tri-m-6', name: 'Press francés en polea baja sobre banco plano', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'machines' },
  { id: 'tri-m-7', name: 'Fondos en paralelas centrados en tríceps', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'bodyweight' },
  { id: 'tri-m-8', name: 'Fondos entre bancos o en silla (Bench dips)', muscleGroupId: 'triceps', subzoneId: 'triceps-medial-head', equipment: 'bodyweight' },

  // ==================== HOMBROS ====================
  { id: 'sho-a-1', name: 'Press militar de pie con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-2', name: 'Press sentado con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-3', name: 'Press Arnold', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-4', name: 'Elevaciones frontales (neutras / pronadas / supinadas)', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-5', name: 'Press Scott', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'dumbbells' },
  { id: 'sho-a-6', name: 'Press de hombros de pie pisando la liga', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'bands' },
  { id: 'sho-a-7', name: 'Elevaciones frontales con liga pisada', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'bands' },
  { id: 'sho-a-8', name: 'Press de hombros en máquina guiada / Smith', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'machines' },
  { id: 'sho-a-9', name: 'Elevaciones frontales en polea baja con barra/cuerda', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'machines' },
  { id: 'sho-a-10', name: 'Handstand push-ups (Flexiones en pino)', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'bodyweight' },
  { id: 'sho-a-11', name: 'Flexiones Pike en suelo o pies elevados', muscleGroupId: 'shoulders', subzoneId: 'deltoid-anterior', equipment: 'bodyweight' },

  { id: 'sho-l-1', name: 'Elevaciones laterales de pie con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'dumbbells' },
  { id: 'sho-l-2', name: 'Elevaciones laterales sentado', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'dumbbells' },
  { id: 'sho-l-3', name: 'Elevaciones laterales acostado de lado en banco', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'dumbbells' },
  { id: 'sho-l-4', name: 'Elevaciones laterales pisando la liga', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'bands' },
  { id: 'sho-l-5', name: 'Elevaciones laterales unilaterales con liga anclada', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'bands' },
  { id: 'sho-l-6', name: 'Elevaciones laterales en polea baja por delante/detrás', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'machines' },
  { id: 'sho-l-7', name: 'Elevaciones laterales en máquina específica', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'machines' },
  { id: 'sho-l-8', name: 'Plancha lateral con elevación dinámica de brazo', muscleGroupId: 'shoulders', subzoneId: 'deltoid-lateral', equipment: 'bodyweight' },

  { id: 'sho-p-1', name: 'Pájaros (elevaciones posteriores) inclinados', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'dumbbells' },
  { id: 'sho-p-2', name: 'Remos con codos abiertos a 90° con mancuernas', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'dumbbells' },
  { id: 'sho-p-3', name: 'Band pull-aparts (Aperturas invertidas con liga)', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'bands' },
  { id: 'sho-p-4', name: 'Face pull con liga anclada arriba', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'bands' },
  { id: 'sho-p-5', name: 'Face pull en polea alta con cuerda hacia la frente', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'machines' },
  { id: 'sho-p-6', name: 'Aperturas en máquina Pec-Deck invertida', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'machines' },
  { id: 'sho-p-7', name: 'Rear delt flyes en polea alta', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'machines' },
  { id: 'sho-p-8', name: 'Remos en barra baja con codos muy abiertos', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'bodyweight' },
  { id: 'sho-p-9', name: 'Y-T-W en suelo boca abajo', muscleGroupId: 'shoulders', subzoneId: 'deltoid-posterior', equipment: 'bodyweight' },

  // ==================== PECHO (PECTORAL) ====================
  { id: 'ch-u-1', name: 'Press inclinado con mancuernas (30°, 45°)', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'dumbbells' },
  { id: 'ch-u-2', name: 'Aperturas inclinadas con mancuernas', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'dumbbells' },
  { id: 'ch-u-3', name: 'Pullover con mancuerna en banco plano', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'dumbbells' },
  { id: 'ch-u-4', name: 'Cruce inclinado con liga de abajo hacia arriba', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'bands' },
  { id: 'ch-u-5', name: 'Press inclinado en máquina Smith / Hammer', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'machines' },
  { id: 'ch-u-6', name: 'Cruce de poleas bajas hacia el centro arriba', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'machines' },
  { id: 'ch-u-7', name: 'Flexiones declinadas (pies elevados)', muscleGroupId: 'chest', subzoneId: 'chest-upper', equipment: 'bodyweight' },

  { id: 'ch-m-1', name: 'Press plano con mancuernas', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'dumbbells' },
  { id: 'ch-m-2', name: 'Aperturas en banco plano / declinado', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'dumbbells' },
  { id: 'ch-m-3', name: 'Press de pecho horizontal con liga en espalda', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'bands' },
  { id: 'ch-m-4', name: 'Press plano en máquina guiada / Pec-Deck', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'machines' },
  { id: 'ch-m-5', name: 'Cruce de poleas desde posición alta hacia abajo', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'machines' },
  { id: 'ch-m-6', name: 'Flexiones de brazos estándar / pliométricas', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'bodyweight' },
  { id: 'ch-m-7', name: 'Fondos en paralelas con torso inclinado', muscleGroupId: 'chest', subzoneId: 'chest-mid-lower', equipment: 'bodyweight' },

  // ==================== ESPALDA ====================
  { id: 'back-l-1', name: 'Remo a una mano apoyado en banco', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'dumbbells' },
  { id: 'back-l-2', name: 'Remo Seal (a dos manos en banco inclinado)', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'dumbbells' },
  { id: 'back-l-3', name: 'Jalón vertical / Remo unilateral con liga', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'bands' },
  { id: 'back-l-4', name: 'Jalón al pecho en polea alta (pronado / neutro)', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'machines' },
  { id: 'back-l-5', name: 'Pullover en polea alta con barra recta o cuerda', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'machines' },
  { id: 'back-l-6', name: 'Dominadas pronadas estándar (Pull-ups)', muscleGroupId: 'back', subzoneId: 'lats', equipment: 'bodyweight' },

  { id: 'back-t-1', name: 'Encogimientos de hombros con mancuernas', muscleGroupId: 'back', subzoneId: 'rhomboids-traps', equipment: 'dumbbells' },
  { id: 'back-t-2', name: 'Remo sentado con liga apoyada en los pies', muscleGroupId: 'back', subzoneId: 'rhomboids-traps', equipment: 'bands' },
  { id: 'back-t-3', name: 'Remo en barra T / Polea baja con agarre en V', muscleGroupId: 'back', subzoneId: 'rhomboids-traps', equipment: 'machines' },
  { id: 'back-t-4', name: 'Dominadas australianas / Remos invertidos', muscleGroupId: 'back', subzoneId: 'rhomboids-traps', equipment: 'bodyweight' },

  { id: 'back-e-1', name: 'Peso muerto rumano / Sumo con mancuernas', muscleGroupId: 'back', subzoneId: 'spinal-erectors', equipment: 'dumbbells' },
  { id: 'back-e-2', name: 'Buenos días con liga enganchada en pies', muscleGroupId: 'back', subzoneId: 'spinal-erectors', equipment: 'bands' },
  { id: 'back-e-3', name: 'Hiperextensiones en banco a 45° / 90°', muscleGroupId: 'back', subzoneId: 'spinal-erectors', equipment: 'machines' },
  { id: 'back-e-4', name: 'Superman en suelo / Aquaman', muscleGroupId: 'back', subzoneId: 'spinal-erectors', equipment: 'bodyweight' },

  // ==================== ABDOMEN Y CORE ====================
  { id: 'abs-r-1', name: 'Crunch abdominal / Sit-ups con mancuerna', muscleGroupId: 'abs', subzoneId: 'rectus-abdominis', equipment: 'dumbbells' },
  { id: 'abs-r-2', name: 'Crunch de pie o rodando con liga', muscleGroupId: 'abs', subzoneId: 'rectus-abdominis', equipment: 'bands' },
  { id: 'abs-r-3', name: 'Crunch en polea alta de rodillas con cuerda', muscleGroupId: 'abs', subzoneId: 'rectus-abdominis', equipment: 'machines' },
  { id: 'abs-r-4', name: 'Elevaciones de piernas colgado en barra / Hollow hold', muscleGroupId: 'abs', subzoneId: 'rectus-abdominis', equipment: 'bodyweight' },

  { id: 'abs-o-1', name: 'Flexión lateral de tronco / Russian Twist con mancuerna', muscleGroupId: 'abs', subzoneId: 'obliques', equipment: 'dumbbells' },
  { id: 'abs-o-2', name: 'Press Pallof / Leñador con liga', muscleGroupId: 'abs', subzoneId: 'obliques', equipment: 'bands' },
  { id: 'abs-o-3', name: 'Leñador en polea alta/baja', muscleGroupId: 'abs', subzoneId: 'obliques', equipment: 'machines' },
  { id: 'abs-o-4', name: 'Plancha lateral dinámica / Crunch bicicleta', muscleGroupId: 'abs', subzoneId: 'obliques', equipment: 'bodyweight' },

  { id: 'abs-t-1', name: 'Caminata del granjero unilateral / bilateral', muscleGroupId: 'abs', subzoneId: 'transverse-abdominis', equipment: 'dumbbells' },
  { id: 'abs-t-2', name: 'Plancha isométrica con tracción lateral de liga', muscleGroupId: 'abs', subzoneId: 'transverse-abdominis', equipment: 'bands' },
  { id: 'abs-t-3', name: 'Plancha frontal / Rueda abdominal (Ab-wheel rollout)', muscleGroupId: 'abs', subzoneId: 'transverse-abdominis', equipment: 'bodyweight' },

  // ==================== CUÁDRICEPS E ISQUIOTIBIALES ====================
  { id: 'leg-q-1', name: 'Sentadilla copa / Búlgara / Zancadas con mancuernas', muscleGroupId: 'quads-hamstrings', subzoneId: 'quadriceps', equipment: 'dumbbells' },
  { id: 'leg-q-2', name: 'Monster walks / Sentadillas con liga', muscleGroupId: 'quads-hamstrings', subzoneId: 'quadriceps', equipment: 'bands' },
  { id: 'leg-q-3', name: 'Extensión de piernas en máquina / Prensa / Hack', muscleGroupId: 'quads-hamstrings', subzoneId: 'quadriceps', equipment: 'machines' },
  { id: 'leg-q-4', name: 'Pistol squat / Sentadilla Sissy / Air squat', muscleGroupId: 'quads-hamstrings', subzoneId: 'quadriceps', equipment: 'bodyweight' },

  { id: 'leg-h-1', name: 'Peso muerto rumano / Curl femoral con mancuerna', muscleGroupId: 'quads-hamstrings', subzoneId: 'hamstrings', equipment: 'dumbbells' },
  { id: 'leg-h-2', name: 'Curl femoral tumbado con liga anclada', muscleGroupId: 'quads-hamstrings', subzoneId: 'hamstrings', equipment: 'bands' },
  { id: 'leg-h-3', name: 'Curl femoral tumbado / sentado en máquina', muscleGroupId: 'quads-hamstrings', subzoneId: 'hamstrings', equipment: 'machines' },
  { id: 'leg-h-4', name: 'Curl nórdico (Nordic hamstring curl)', muscleGroupId: 'quads-hamstrings', subzoneId: 'hamstrings', equipment: 'bodyweight' },

  // ==================== GLÚTEOS ====================
  { id: 'gl-g-1', name: 'Hip Thrust / Step-ups con mancuernas', muscleGroupId: 'glutes', subzoneId: 'glutes-sub', equipment: 'dumbbells' },
  { id: 'gl-g-2', name: 'Caminata lateral con minibanda / Clamshells', muscleGroupId: 'glutes', subzoneId: 'glutes-sub', equipment: 'bands' },
  { id: 'gl-g-3', name: 'Patada de glúteo en polea baja / Abducción en máquina', muscleGroupId: 'glutes', subzoneId: 'glutes-sub', equipment: 'machines' },
  { id: 'gl-g-4', name: 'Puente de glúteo a una pierna / Frog pumps', muscleGroupId: 'glutes', subzoneId: 'glutes-sub', equipment: 'bodyweight' },

  // ==================== PANTORRILLAS ====================
  { id: 'gl-c-1', name: 'Elevación de talones de pie/sentado con mancuernas', muscleGroupId: 'calves', subzoneId: 'calves-sub', equipment: 'dumbbells' },
  { id: 'gl-c-2', name: 'Extensiones de tobillo con liga tensa', muscleGroupId: 'calves', subzoneId: 'calves-sub', equipment: 'bands' },
  { id: 'gl-c-3', name: 'Elevación de talones en máquina Smith / Prensa', muscleGroupId: 'calves', subzoneId: 'calves-sub', equipment: 'machines' },
  { id: 'gl-c-4', name: 'Elevación de talones a una pierna en escalón', muscleGroupId: 'calves', subzoneId: 'calves-sub', equipment: 'bodyweight' },
];