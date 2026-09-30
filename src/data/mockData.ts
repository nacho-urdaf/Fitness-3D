import { MuscleGroup, Exercise } from '@/types/fitness';

export const MUSCLE_GROUPS: MuscleGroup[] = [
  {
    id: 'forearm',
    name: 'Antebrazo',
    subzones: [
      { id: 'brachioradialis', name: 'Braquiorradial (Lateral / Supinador largo)', description: 'Cara lateral y superior del antebrazo.' },
      { id: 'forearm-flexors', name: 'Flexores del Antebrazo (Cara Anterior / Palmar)', description: 'Cara interna y palmar para fuerza de agarre.' },
      { id: 'forearm-extensors', name: 'Extensores del Antebrazo (Cara Posterior / Dorsal)', description: 'Cara dorsal y posterior de la muñeca.' },
    ],
  },
  {
    id: 'biceps',
    name: 'Bíceps y Flexores del Brazo',
    subzones: [
      { id: 'biceps-long-head', name: 'Cabeza Larga del Bíceps (Cara Externa / "Pico")', description: 'Cara externa, tracción desde atras y pico del bíceps.' },
      { id: 'biceps-short-head', name: 'Cabeza Corta del Bíceps (Cara Interna / Anchura)', description: 'Cara interna y grosor frontal.' },
      { id: 'brachialis', name: 'Braquial Anterior (Braquial Profundo)', description: 'Músculo profundo debajo del bíceps para separación lateral.' },
    ],
  },
  {
    id: 'triceps',
    name: 'Tríceps Braquial',
    subzones: [
      { id: 'triceps-long-head', name: 'Cabeza Larga del Tríceps', description: 'Masa posterior superior y estiramiento sobre la cabeza.' },
      { id: 'triceps-lateral-head', name: 'Cabeza Lateral del Tríceps', description: 'Cara externa y herradura del tríceps.' },
      { id: 'triceps-medial-head', name: 'Cabeza Medial del Tríceps', description: 'Músculo profundo, estabilidad y bloqueo articular.' },
      { id: 'anconeus', name: 'Músculo Ancóneo (Accesorio / Asociado)', description: 'Estabilizador de codo y bloqueo terminal.' },
    ],
  },
  {
    id: 'chest',
    name: 'Pecho (Pectoral)',
    subzones: [
      { id: 'chest-upper', name: 'Pectoral Mayor - Haz Clavicular (Pecho Superior)', description: 'Porción superior y empujes inclinados.' },
      { id: 'chest-mid', name: 'Pectoral Mayor - Haz Esternocostal (Pecho Medio)', description: 'Masa central y aducción horizontal.' },
      { id: 'chest-lower', name: 'Pectoral Mayor - Haz Abdominal / Inferior (Pecho Inferior)', description: 'Línea inferior y empujes declinados/fondos.' },
    ],
  },
  {
    id: 'shoulders',
    name: 'Hombros (Deltoides)',
    subzones: [
      { id: 'deltoid-anterior', name: 'Deltoides Anterior', description: 'Porción frontal y empujes verticales.' },
      { id: 'deltoid-lateral', name: 'Deltoides Lateral', description: 'Ancho visual, forma de V y abducciones.' },
      { id: 'deltoid-posterior', name: 'Deltoides Posterior', description: 'Cara trasera, pájaros y cara posterior.' },
    ],
  },
  {
    id: 'back',
    name: 'Espalda',
    subzones: [
      { id: 'lats', name: 'Dorsal Ancho', description: 'Amplitud de espalda en V y jalones.' },
      { id: 'rhomboids-traps', name: 'Trapecio y Romboides', description: 'Grosor, densidad central, escápulas y encogimientos.' },
    ],
  },
  {
    id: 'abs',
    name: 'Abdomen y Core',
    subzones: [
      { id: 'abs-upper', name: 'Recto Abdominal - Porción Superior (Abdominales Altos)', description: 'Crunches y flexión alta de tronco.' },
      { id: 'obliques', name: 'Oblicuos (Interno y Externo)', description: 'Rotación, flexión lateral y antirotación.' },
      { id: 'abs-lower', name: 'Recto Abdominal - Porción Inferior (Abdominales Bajos)', description: 'Elevaciones de piernas y flexión pélvica.' },
      { id: 'transverse-abdominis', name: 'Transverso del Abdomen (Core Profundo / Estabilidad)', description: 'Planchas, vacíos y estabilidad antidesplazamiento.' },
    ],
  },
  {
    id: 'glutes',
    name: 'Glúteos',
    subzones: [
      { id: 'gluteus-maximus', name: 'Glúteo Mayor (Contracción y Estiramiento)', description: 'Masa principal de glúteo, hip thrusts y sentadillas.' },
      { id: 'gluteus-medius', name: 'Glúteo Medio (Abducción y Estabilización)', description: 'Cara lateral, abducciones y trabajo unilateral.' },
      { id: 'gluteus-minimus', name: 'Glúteo Menor (Rotación Interna y Estabilidad)', description: 'Estabilizador profundo anterior de cadera.' },
    ],
  },
  {
    id: 'quadriceps',
    name: 'Cuádriceps',
    subzones: [
      { id: 'rectus-femoris', name: 'Recto Femoral', description: 'Músculo central biarticular y flexor de cadera.' },
      { id: 'vastus-lateralis', name: 'Vasto Lateral', description: 'Cara externa del muslo y barrido lateral.' },
      { id: 'vastus-medialis', name: 'Vasto Medial (VMO / Gota de Agua)', description: 'Cara interna inferior y estabilidad rotuliana.' },
      { id: 'vastus-intermedius', name: 'Vasto Intermedio (Vasto Crural Profundo)', description: 'Grosor frontal profundo y extensión pura.' },
    ],
  },
  {
    id: 'hamstrings',
    name: 'Isquiotibiales (Femorales)',
    subzones: [
      { id: 'biceps-femoris', name: 'Bíps Femoral (Cabeza Larga y Corta)', description: 'Cara posterior externa del muslo.' },
      { id: 'semitendinosus', name: 'Semitendinoso', description: 'Cara posterior interna y rotación interna.' },
      { id: 'semimembranosus', name: 'Semimembranoso', description: 'Capa profunda posterior interna.' },
    ],
  },
  {
    id: 'calves',
    name: 'Pantorrilla y Gemelos',
    subzones: [
      { id: 'gastrocnemius-medial', name: 'Gemelo Medial (Gastrocnemio Cabeza Interna)', description: 'Cara posterior interna con rodilla extendida.' },
      { id: 'gastrocnemius-lateral', name: 'Gemelo Lateral (Gastrocnemio Cabeza Externa)', description: 'Cara posterior externa con rodilla extendida.' },
      { id: 'soleus', name: 'Sóleo', description: 'Músculo profundo trabajado con rodilla a 90°.' },
    ],
  },
];

export const MOCK_EXERCISES: Exercise[] = [
  // --- ANTEBRAZO: BRAQUIORRADIAL ---
  {
    id: 'brachioradialis-1',
    name: 'Curl Martillo con Mancuernas',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'dumbbells',
    instructions: [
      'De pie o sentado, toma una mancuerna en cada mano con agarre neutro (palmas mirándose entre sí) y los brazos extendidos a los lados del cuerpo.',
      'Mantén los codos pegados al torso y las muñecas firmes sin doblar.',
      'Flexiona los codos subiendo las mancuernas hacia los hombros sin balancear la espalda ni mover los codos hacia adelante.',
      'Pausa un segundo arriba apretando la zona lateral del antebrazo y baja de forma controlada hasta extender los brazos.'
    ]
  },
  {
    id: 'brachioradialis-2',
    name: 'Curl Martillo Inclinado',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'dumbbells',
    instructions: [
      'Ajusta un banco a un ángulo de 45° a 60° y siéntate apoyando completamente la espalda y la cabeza.',
      'Deja caer los brazos con las mancuernas en agarre neutro (palmas hacia adentro).',
      'Flexiona los codos llevando las mancuernas hacia arriba manteniendo los codos fijos apuntando hacia el suelo.',
      'Desciende suavemente hasta sentir el estiramiento completo en el antebrazo y bíceps.'
    ]
  },
  {
    id: 'brachioradialis-3',
    name: 'Curl Zottman',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'dumbbells',
    instructions: [
      'De pie, toma las mancuernas con las palmas mirando hacia adelante (supinación).',
      'Flexiona los codos subiendo el peso como en un curl tradicional hasta llegar a la altura de los hombros.',
      'En la parte superior, gira las muñecas 180° para que las palmas queden mirando hacia abajo (pronación).',
      'Baja el peso lentamente en pronación y, abajo, vuelve a girar las muñecas a la posición inicial.'
    ]
  },
  {
    id: 'brachioradialis-4',
    name: 'Curl Invertido con Mancuernas',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'dumbbells',
    instructions: [
      'Sostén una mancuerna en cada mano con las palmas mirando hacia tu cuerpo (agarre prono/invertido).',
      'Con la espalda recta, flexiona los codos subiendo el peso hacia los hombros.',
      'Controla la tentación de levantar los codos; deben actuar como una bisagra.',
      'Baja el peso despacio resistiendo la gravedad.'
    ]
  },
  {
    id: 'brachioradialis-5',
    name: 'Curl Martillo Cruzado al Pecho (Pinwheel Curl)',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'dumbbells',
    instructions: [
      'Colócate de pie con las mancuernas a los lados y agarre neutro.',
      'Levanta una mancuerna en diagonal a través del torso, llevando la mancuerna hacia el pectoral del lado opuesto.',
      'Mantén la muñeca neutra y aprieta el antebrazo en el punto más alto.',
      'Desciende la mancuerna a la posición inicial y repite el movimiento con el otro brazo.'
    ]
  },
  {
    id: 'brachioradialis-6',
    name: 'Curl Martillo con Banda',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de una banda elástica con ambos pies a la anchura de las caderas.',
      'Agarra los extremos o agarres con las palmas mirándose entre sí.',
      'Mantén los hombros atrás y los codos pegados a las costillas.',
      'Flexiona los codos subiendo las manos hacia los hombros, manteniendo la tensión de la liga al bajar.'
    ]
  },
  {
    id: 'brachioradialis-7',
    name: 'Curl Invertido con Banda',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bands',
    instructions: [
      'Pisa la banda de resistencia y tómala por los extremos con las palmas mirando hacia tus muslos (agarre prono).',
      'Flexiona los codos subiendo las manos en dirección al pecho sin doblar las muñecas hacia arriba o abajo.',
      'Haz una breve pausa en el punto superior y baja lentamente frenando la resistencia de la liga.'
    ]
  },
  {
    id: 'brachioradialis-8',
    name: 'Curl Martillo Unilateral con Banda',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bands',
    instructions: [
      'Ancla la banda en un punto bajo o písala con el pie del mismo lado del brazo a trabajar.',
      'Toma la liga con agarre neutro manteniéndola alineada con el antebrazo.',
      'Flexiona el codo llevando la mano hacia el hombro correspondiente de forma aislada.',
      'Regresa de manera pausada y completa las repeticiones antes de cambiar de brazo.'
    ]
  },
  {
    id: 'brachioradialis-9',
    name: 'Dominadas en Agarre Neutro',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de unas barras paralelas o anillas con las palmas mirándose de frente (agarre neutro) y los brazos extendidos.',
      'Retrae las escápulas (hombros abajo y atrás) y activa el abdomen.',
      'Tira de tu cuerpo hacia arriba dirigiendo el pecho hacia las barras mientras los codos se flexionan pegados al cuerpo.',
      'Supera la barra con la barbilla y baja con control hasta extender completamente los brazos.'
    ]
  },
  {
    id: 'brachioradialis-10',
    name: 'Dominadas en Agarre Prono',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bodyweight',
    instructions: [
      'Tómate de una barra fija con las palmas mirando hacia adelante (agarre en pronación) a un ancho ligeramente mayor que tus hombros.',
      'Inicia el movimiento tirando con la espalda y flexiona los codos con fuerza.',
      'Eleva el cuerpo hasta que la barbilla pase la barra, sintiendo el trabajo intenso en la parte posterior y lateral del antebrazo.',
      'Baja despacio controlando la fase descendente.'
    ]
  },
  {
    id: 'brachioradialis-11',
    name: 'Remo Invertido Corporal (Agarre Neutro)',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bodyweight',
    instructions: [
      'Colócate debajo de una barra baja o anillas a la altura de la cintura.',
      'Toma el agarre en posición neutra, extiende las piernas y apoya solo los talones (manteniendo el cuerpo en tabla recta).',
      'Tira del cuerpo hacia arriba llevando el pecho hacia las manos flexionando los codos.',
      'Haz una pausa arriba y regresa a la posición inicial sin dejar caer la cadera.'
    ]
  },
  {
    id: 'brachioradialis-12',
    name: 'Isometría en Codo a 90° con Agarre Neutro',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de barras paralelas con agarre neutro y sube mediante una dominada o salto hasta flexionar los codos a 90°.',
      'Mantén esa posición estática apretando los antebrazos y manteniendo la postura firme sin balanceos.',
      'Sostén el tiempo objetivo (ej. 15–30 segundos) y desciende de forma suave.'
    ]
  },
  {
    id: 'brachioradialis-13',
    name: 'Curl Martillo en Polea Baja con Cuerda',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'machines',
    instructions: [
      'Engancha el accesorio de cuerda en la parte más baja de la polea.',
      'Toma los extremos de la cuerda con las palmas mirándose de frente y da un paso atrás para generar tensión.',
      'Mantén los codos inmóviles junto al torso y flexiona los brazos llevando los nudillos hacia los hombros.',
      'En la parte alta separa ligeramente las puntas de la cuerda para enfatizar la contracción y baja controlado.'
    ]
  },
  {
    id: 'brachioradialis-14',
    name: 'Curl Invertido con Barra EZ',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'machines',
    instructions: [
      'Toma la barra EZ por sus curvas en agarre prono (palmas hacia abajo) a la anchura de los hombros.',
      'Mantén la postura erguida y los codos fijos a los costados.',
      'Eleva la barra flexionando únicamente los codos hasta que los antebrazos queden casi verticales.',
      'Desciende la barra con ritmo lento frenando el peso.'
    ]
  },
  {
    id: 'brachioradialis-15',
    name: 'Curl Invertido en Banco Scott / Predicador',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'machines',
    instructions: [
      'Siéntate en el banco predicador y apoya la parte posterior de los brazos sobre la almohadilla.',
      'Agarra la barra EZ o barra recta con las palmas mirando hacia abajo.',
      'Flexiona los codos subiendo la barra hacia arriba sin despegar los tríceps de la almohadilla.',
      'Baja la barra despacio sin llegar a hiperbloquear los codos al final.'
    ]
  },
  {
    id: 'brachioradialis-16',
    name: 'Curl Martillo en Máquina',
    muscleGroupId: 'forearm',
    subzoneId: 'brachioradialis',
    equipment: 'machines',
    instructions: [
      'Ajusta la altura del asiento de la máquina de bíceps para que los codos queden alineados con el eje de rotación de la máquina.',
      'Sujeta los agarres verticales (agarre neutro).',
      'Exhala mientras flexionas los brazos tirando de los agarres hacia ti.',
      'Inhala y regresa el peso paulatinamente a la posición de inicio evitando que las placas choquen.'
    ]
  },

  // --- ANTEBRAZO: FLEXORES ---
  {
    id: 'forearm-flex-1',
    name: 'Curl de Muñeca Supino con Mancuernas',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco y apoya los antebrazos sobre los muslos, dejando las muñecas y manos sobresaliendo por el borde.',
      'Sostén una mancuerna en cada mano con las palmas mirando hacia arriba (agarre supino).',
      'Deja que las mancuernas bajen lentamente abriendo ligeramente los dedos para que el peso ruede hacia las yemas.',
      'Cierra la mano y flexiona la muñeca hacia arriba lo más alto posible, apretando la cara interna del antebrazo. Pausa 1 segundo y baja de forma controlada.'
    ]
  },
  {
    id: 'forearm-flex-2',
    name: 'Curl de Muñeca Supino Unilateral (Apoyado en Banco)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'dumbbells',
    instructions: [
      'Colócate de rodillas al lado de un banco plano y apoya un antebrazo sobre él, con la muñeca fuera del borde.',
      'Toma una mancuerna con la palma mirando hacia arriba.',
      'Desciende la mancuerna extendiendo la muñeca y permitiendo que ruede ligeramente por los dedos.',
      'Flexiona la muñeca hacia arriba concentrando la fuerza en un solo antebrazo y regresa despacio.'
    ]
  },
  {
    id: 'forearm-flex-3',
    name: "Paseo del Granjero con Mancuernas (Farmer's Walk)",
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'dumbbells',
    instructions: [
      'Colócate de pie entre dos mancuernas pesadas, flexiona las rodillas con la espalda recta y tómalas con agarre firme.',
      'Levántate manteniendo los hombros atrás, el pecho erguido y el abdomen activado.',
      'Camina a pasos controlados durante la distancia o tiempo objetivo, apretando las mancuernas con fuerza máxima sin dejar que se resbalen.'
    ]
  },
  {
    id: 'forearm-flex-4',
    name: 'Curl de Muñeca Supino con Banda',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'bands',
    instructions: [
      'Siéntate en una silla o banco y pisa el centro de una banda de resistencia con ambos pies.',
      'Apoya los antebrazos sobre los muslos y toma los extremos de la banda con las palmas mirando hacia arriba.',
      'Permite que la liga tire de las muñecas hacia abajo flexionándolas hacia el suelo.',
      'Eleva las muñecas hacia arriba contra la resistencia de la liga y aprieta los flexores al final del rango.'
    ]
  },
  {
    id: 'forearm-flex-5',
    name: 'Curl de Muñeca de Pie con Banda Tras la Espalda',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'bands',
    instructions: [
      'Pisa un extremo de la banda con los talones y sostiene el otro extremo detrás de la espalda con las palmas mirando hacia atrás/arriba.',
      'Mantén los brazos extendidos hacia abajo pegados a los glúteos.',
      'Flexiona las muñecas subiendo los dedos hacia arriba y hacia tu espalda.',
      'Pausa en el punto de máxima contracción y desciende paulatinamente.'
    ]
  },
  {
    id: 'forearm-flex-6',
    name: 'Colgado de Barra (Dead Hang)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'bodyweight',
    instructions: [
      'Salta o usa un banco para sujetar una barra de dominadas con agarre supino o neutro a la anchura de los hombros.',
      'Deja caer todo el peso del cuerpo manteniendo los brazos extendidos y las manos cerradas con la mayor fuerza posible sobre la barra.',
      'Sostén la posición isométrica apretando las palmas y dedos contra la barra durante el tiempo objetivo (ej. 30–60 segundos).'
    ]
  },
  {
    id: 'forearm-flex-7',
    name: 'Flexiones sobre Yemas de los Dedos (Fingertip Push-ups)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de flexión (o apoyando las rodillas para reducir la carga).',
      'En lugar de apoyar las palmas completas, apóyate únicamente sobre las yemas de los diez dedos bien extendidos y firmes.',
      'Realiza la flexión bajando el pecho al suelo y empuja hacia arriba manteniendo la estructura de los dedos rígida.'
    ]
  },
  {
    id: 'forearm-flex-8',
    name: 'Flexiones sobre el Dorso de las Manos (Wrist Push-ups)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'bodyweight',
    instructions: [
      'Colócate de rodillas sobre una superficie suave o colchoneta.',
      'Apoya el dorso de las manos en el suelo (palmas mirando hacia arriba) con los dedos apuntando hacia ti.',
      'Flexiona los codos suavemente bajando el cuerpo y empuja regresando a la posición inicial mediante la fuerza de los flexores de la muñeca.'
    ]
  },
  {
    id: 'forearm-flex-9',
    name: 'Curl de Muñeca Supino con Barra',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'machines',
    instructions: [
      'Siéntate en el borde de un banco con las piernas abiertas a la anchura de los hombros.',
      'Sostén una barra recta (o barra EZ) con las palmas mirando hacia arriba a una distancia corta (anchura de los hombros) y apoya los antebrazos en los muslos.',
      'Inclina la barra hacia el suelo abriendo los dedos al final del recorrido para extender el rango.',
      'Cierra la mano, eleva la barra flexionando las muñecas hacia el techo y aprieta los antebrazos 1 segundo arriba.'
    ]
  },
  {
    id: 'forearm-flex-10',
    name: 'Curl de Muñeca en Polea Baja',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'machines',
    instructions: [
      'Coloca una barra recta corta en el mosquetón de la polea baja.',
      'Agáchate o siéntate frente a la polea y toma la barra con las palmas mirando hacia arriba.',
      'Apoya los antebrazos sobre los muslos dejándote llevar por la tensión continua del cable hacia abajo.',
      'Eleva las muñecas contra la resistencia de la polea de forma fluida y regresa despacio.'
    ]
  },
  {
    id: 'forearm-flex-11',
    name: 'Curl de Muñeca de Pie con Barra Tras la Espalda',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-flexors',
    equipment: 'machines',
    instructions: [
      'Sostén una barra por detrás de tus glúteos con agarre en supinación (palmas mirando hacia atrás).',
      'Mantén los brazos extendidos y deja que la barra ruede hacia la punta de los dedos.',
      'Cierra los dedos subiendo la barra y flexiona las muñecas hacia arriba lo más alto posible.',
      'Pausa arriba y baja de forma lenta sin despegar la barra de la parte posterior de las piernas.'
    ]
  },

  // --- ANTEBRAZO: EXTENSORES ---
  {
    id: 'forearm-ext-1',
    name: 'Curl de Muñeca Prono con Mancuernas (Reverse Wrist Curl)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco y apoya los antebrazos sobre los muslos, dejando las muñecas y manos sobresaliendo con las palmas mirando hacia abajo (agarre prono).',
      'Sostén una mancuerna ligera en cada mano.',
      'Deja caer las manos hacia el suelo flexionando la muñeca hacia abajo.',
      'Eleva el dorso de la mano hacia el techo lo más alto posible usando la fuerza de la parte superior del antebrazo. Pausa 1 segundo arriba y baja despacio.'
    ]
  },
  {
    id: 'forearm-ext-2',
    name: 'Extensión de Muñeca Unilateral Apoyado en Banco',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'dumbbells',
    instructions: [
      'Colócate de rodillas al lado de un banco plano y apoya un antebrazo sobre él con la palma mirando hacia abajo.',
      'Sostén una mancuerna en la mano que sobresale del borde del banco.',
      'Desciende la mancuerna permitiendo que la muñeca se doble hacia el suelo.',
      'Extiende la muñeca hacia arriba de forma aislada, manteniendo el antebrazo firme contra el banco durante todo el movimiento.'
    ]
  },
  {
    id: 'forearm-ext-3',
    name: 'Rotaciones Prono-Supinas con Mancuerna (Leverage Twists)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'dumbbells',
    instructions: [
      'Toma una mancuerna por uno de sus extremos (o una mancuerna liviana) con el codo a 90° pegado al costado.',
      'Inicia con la palma mirando hacia abajo.',
      'Gira la muñeca lentamente de lado a lado manteniendo el control del peso, enfocando la resistencia en los extensores y estabilizadores de la muñeca.'
    ]
  },
  {
    id: 'forearm-ext-4',
    name: 'Extensión de Muñeca Prona con Banda',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'bands',
    instructions: [
      'Siéntate en un banco y pisa el centro de una banda de resistencia con ambos pies.',
      'Apoya los antebrazos sobre las piernas y toma los extremos de la liga con las palmas mirando hacia abajo.',
      'Deja que la banda tire de tus manos hacia el suelo.',
      'Eleva los dorsos de las manos hacia arriba contra la tensión de la liga y aprieta la cara posterior del antebrazo antes de descender de forma controlada.'
    ]
  },
  {
    id: 'forearm-ext-5',
    name: 'Extensiones de Dedos con Banda Elástica (Grip Extensions)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'bands',
    instructions: [
      'Coloca una banda elástica pequeña o de resistencia en la parte exterior de los cinco dedos (alrededor de la primera falange).',
      'Empieza con la mano semi-cerrada en puño.',
      'Abre los dedos hacia afuera venciendo la resistencia elástica hasta extender la mano por completo.',
      'Cierra la mano lentamente y repite el movimiento para fortalecer los extensores digitales de la cara posterior.'
    ]
  },
  {
    id: 'forearm-ext-6',
    name: 'Flexiones sobre el Dorso de la Mano Invertidas (Reverse Wrist Push-ups)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de quadripedia (cuatro puntos) apoyando las rodillas en una colchoneta suave.',
      'Apoya el dorso de las manos en el suelo (palmas mirando hacia arriba) con los dedos apuntando hacia ti.',
      'Lleva lentamente el peso del torso hacia atrás o haz una flexión suave doblando los codos para cargar peso sobre los extensores.',
      'Empuja suavemente con el dorso de las manos para regresar a la posición inicial.'
    ]
  },
  {
    id: 'forearm-ext-7',
    name: 'Isometría de Extensión con Auto-Resistencia',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'bodyweight',
    instructions: [
      'Coloca un brazo extendido frente a ti con la palma mirando hacia abajo.',
      'Con la mano opuesta, ejerce presión hacia abajo sobre el dorso de la mano mientras intentas empujar hacia arriba con la mano de trabajo.',
      'Mantén la tensión isométrica firme durante 15 a 20 segundos sin permitir que la muñeca ceda.'
    ]
  },
  {
    id: 'forearm-ext-8',
    name: 'Curl de Muñeca Prono con Barra',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'machines',
    instructions: [
      'Siéntate en el borde de un banco con las piernas a la anchura de los hombros.',
      'Toma una barra recta o barra EZ en agarre prono (palmas mirando hacia abajo) a la anchura de los hombros y apoya los antebrazos sobre los muslos.',
      'Deja que la barra baje doblándole las muñecas hacia el suelo.',
      'Eleva la barra flexionando las muñecas hacia el techo lo más alto posible y mantén la contracción 1 segundo arriba.'
    ]
  },
  {
    id: 'forearm-ext-9',
    name: 'Curl de Muñeca Prono en Polea Baja',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'machines',
    instructions: [
      'Engancha una barra corta recta en el punto más bajo de una polea.',
      'Agarra la barra con las palmas mirando hacia abajo y siéntate o colócate en cuclillas frente a la polea apoyando los antebrazos sobre los muslos.',
      'Deja que el cable tire de la barra hacia el suelo flexionando las muñecas hacia abajo.',
      'Extiende las muñecas levantando la barra contra la tensión constante del cable y regresa lentamente.'
    ]
  },
  {
    id: 'forearm-ext-10',
    name: 'Rodillo de Muñeca (Wrist Roller)',
    muscleGroupId: 'forearm',
    subzoneId: 'forearm-extensors',
    equipment: 'machines',
    instructions: [
      'Sostén el rodillo de muñeca a la altura de los hombros con un disco pesado colgado en la cuerda central.',
      'Con las palmas mirando hacia abajo, gira el cilindro de la barra hacia ti alternando las manos para enrollar la cuerda completamente.',
      'Una vez que el peso llegue a la parte superior, desenrolla la cuerda de manera lenta y controlada manteniendo los brazos firmes.'
    ]
  },

  // --- BÍCEPS: CABEZA LARGA ---
  {
    id: 'bic-long-1',
    name: 'Curl Inclinado con Mancuernas en Banco',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'Ajusta un banco en un ángulo de 45° a 60° y siéntate apoyando completamente la espalda y la cabeza.',
      'Deja caer los brazos a los lados con una mancuerna en cada mano, manteniendo las palmas mirando hacia adelante (supinación).',
      'Mantén los codos por detrás de la línea de la espalda durante todo el movimiento para maximizar la tensión en la cabeza larga.',
      'Flexiona los codos subiendo las mancuernas hacia los hombros sin despegar los hombros del banco y desciende de forma pausada hasta sentir el estiramiento completo.'
    ]
  },
  {
    id: 'bic-long-2',
    name: 'Curl Drag (Drag Curl con Mancuernas)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'Colócate de pie con los pies a la anchura de las caderas y las palmas mirando hacia el frente.',
      'En lugar de llevar las mancuernas en un arco hacia adelante, arrastra los pesos pegados a lo largo del torso dirigiendo los codos hacia atrás.',
      'Eleva las mancuernas hasta la altura de la parte inferior del pecho manteniendo la tensión en la cara externa del bíceps.',
      'Desciende arrastrando las mancuernas pegadas al cuerpo hasta la posición inicial.'
    ]
  },
  {
    id: 'bic-long-3',
    name: 'Curl de Pie con Agarre Estrecho y Mancuernas Unidas',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'De pie, une las dos mancuernas tocándose frente a tus muslos con las palmas mirando hacia arriba.',
      'Mantén los codos pegados a los costados y flexionados hacia adentro.',
      'Sube ambas mancuernas juntas manteniendo la presión de una contra otra hasta la altura del pecho.',
      'Pausa 1 segundo en la parte superior apretando el "pico" del bíceps y desciende lentamente.'
    ]
  },
  {
    id: 'bic-long-4',
    name: 'Curl de Bíceps con Banda Anclada Atrás',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto bajo por detrás de ti (o pisa la liga dejando el sobrante a tus espaldas).',
      'Da un paso hacia adelante para crear tensión inicial, de modo que tu brazo extendido quede ligeramente retraído tras el torso.',
      'Mantén la espalda recta y flexiona el codo llevando la mano hacia el hombro mientras el brazo permanece inclinado hacia atrás.',
      'Regresa despacio dejando que la elasticidad de la liga estire la cara externa del bíceps.'
    ]
  },
  {
    id: 'bic-long-5',
    name: 'Curl Estrecho con Banda de Pie',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de la banda elástica con los pies juntos.',
      'Toma la banda con las manos muy juntas (separadas solo por 10–15 cm) y las palmas mirando hacia adelante.',
      'Mantén los codos firmes a los costados y flexiona los brazos llevando las manos hacia la barbilla.',
      'Aprieta la parte externa del bíceps en el punto máximo de contracción y desciende controladamente.'
    ]
  },
  {
    id: 'bic-long-6',
    name: 'Dominadas Supinas con Agarre Estrecho (Close-Grip Chin-ups)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de una barra fija con agarre en supinación (palmas mirando hacia ti) y las manos juntas a unos 10–15 cm de distancia.',
      'Con los brazos extendidos y los hombros relajados hacia abajo, flexiona los codos tirando del cuerpo hacia arriba.',
      'Lleva la barbilla por encima de la barra enfocado en aproximar el antebrazo al bíceps.',
      'Baja suavemente hasta extender por completo los brazos para estirar la cabeza larga.'
    ]
  },
  {
    id: 'bic-long-7',
    name: 'Curl de Bíceps Corporal Invertido (Bodyweight Biceps Curl)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'bodyweight',
    instructions: [
      'Ajusta una barra baja en una jaula o usa anillas a la altura de la cintura.',
      'Tómate de la barra con agarre supino (palmas hacia ti) en una posición donde las manos queden más juntas que el ancho de hombros.',
      'Coloca el cuerpo en línea recta apoyado en los talones y flexiona los codos llevando tu frente hacia la barra.',
      'Regresa de forma pausada extendiendo los codos por completo sin doblar la cadera.'
    ]
  },
  {
    id: 'bic-long-8',
    name: 'Curl Bayesiano en Polea Baja (Bayesian Curl)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'machines',
    instructions: [
      'Coloca un agarre individual en la polea baja de una máquina de cables.',
      'Toma el agarre con una mano y da un par de pasos hacia adelante de espaldas a la máquina, permitiendo que el cable tire de tu brazo extendido hacia atrás.',
      'Con el codo situado por detrás de tu tronco, flexiona el brazo llevando la mano hacia adelante y arriba.',
      'Siente el estiramiento profundo en la cara externa del bíceps durante la fase excéntrica mientras bajas la mano por detrás de la cadera.'
    ]
  },
  {
    id: 'bic-long-9',
    name: 'Curl con Barra EZ (Agarre Estrecho / Curva Interna)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'machines',
    instructions: [
      'Toma una barra EZ sujetándola por sus curvas internas (las marcas más cerradas) con las palmas mirando hacia arriba.',
      'Mantén la vista al frente, el pecho arriba y los codos pegados a las costillas.',
      'Flexiona los codos subiendo la barra en arco hacia la parte alta del pecho sin balancear la zona lumbar.',
      'Haz una pausa arriba apretando la cabeza larga y desciende la barra paulatinamente.'
    ]
  },
  {
    id: 'bic-long-10',
    name: 'Curl de Bíceps en Polea Baja con Agarre Estrecho',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-long-head',
    equipment: 'machines',
    instructions: [
      'Engancha una barra recta corta a la polea baja.',
      'Sostén la barra con las manos juntas en agarre supino a pocos centímetros de separación.',
      'Mantén la postura firme y eleva la barra mediante la flexión del codo sin despegar los codos de los costados.',
      'Baja la barra despacio manteniendo la tensión continua que ofrece la polea.'
    ]
  },

  // --- BÍCEPS: CABEZA CORTA ---
  {
    id: 'bic-short-1',
    name: 'Curl Concentrado con Mancuerna',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en el borde de un banco con las piernas bien abiertas.',
      'Toma una mancuerna con una mano en agarre supino (palma hacia arriba) y apoya la parte posterior del brazo (tríceps) firmemente contra la cara interna de tu muslo.',
      'Flexiona el codo subiendo la mancuerna hacia el pecho sin despegar el brazo del muslo.',
      'Aprieta fuertemente la cara interna del bíceps arriba y desciende despacio hasta la extensión casi completa del codo.'
    ]
  },
  {
    id: 'bic-short-2',
    name: 'Curl Predicador Unilateral con Mancuerna (Banco Scott)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'dumbbells',
    instructions: [
      'Ajusta un banco predicador e apoya la axila y la cara posterior del brazo sobre la almohadilla inclinada.',
      'Toma la mancuerna con la palma mirando hacia arriba (o ligeramente girada hacia afuera para enfatizar la cabeza corta).',
      'Flexiona el codo subiendo la mancuerna en dirección al hombro.',
      'Controla el descenso frenando el peso sin llegar a hiperbloquear la articulación abajo.'
    ]
  },
  {
    id: 'bic-short-3',
    name: 'Curl de Pie con Agarre Ancho con Mancuernas',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'dumbbells',
    instructions: [
      'De pie, sostiene una mancuerna en cada mano e inclina ligeramente los brazos hacia afuera del torso (en ángulo de V).',
      'Mantén las palmas mirando hacia adelante durante todo el trayecto.',
      'Flexiona los codos subiendo las mancuernas por fuera de la línea de los hombros.',
      'Pausa 1 segundo arriba sintiendo la tensión en la cara interna del brazo y baja con control.'
    ]
  },
  {
    id: 'bic-short-4',
    name: 'Curl Estilo "Hércules" con Ligas (Doble Aislamiento Lateral)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'bands',
    instructions: [
      'Ancla dos bandas de resistencia a puntos fijos a la altura de tus hombros (una a la izquierda y otra a la derecha).',
      'Toma una banda en cada mano en agarre supino y colócate en el centro formando una "T" con tus brazos extendidos.',
      'Manteniendo los codos elevados a la altura de los hombros, flexiona los brazos llevando los puños hacia las orejas.',
      'Siente la contracción máxima de la cara interna del bíceps arriba y regresa extendiendo los brazos a la posición en "T".'
    ]
  },
  {
    id: 'bic-short-5',
    name: 'Curl Ancho de Pie con Banda',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de una banda de resistencia con los pies separados a la anchura de los hombros.',
      'Toma los extremos de la banda con las manos posicionadas por fuera de la cadera (agarre ancho).',
      'Flexiona los codos subiendo las manos por fuera del pecho mientras mantienes las palmas apuntando hacia arriba.',
      'Baja suavemente manteniendo la tensión de la liga durante el descenso.'
    ]
  },
  {
    id: 'bic-short-6',
    name: 'Dominadas Supinas con Agarre Ancho (Wide-Grip Chin-ups)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de una barra fija con agarre supino (palmas mirando hacia ti), pero con las manos separadas a una distancia mayor a la anchura de tus hombros.',
      'Con el abdomen activado, flexiona los codos llevando el pecho hacia la barra.',
      'Al tener las manos abiertas, el trabajo se desplaza de la cabeza larga a la cara interna (cabeza corta).',
      'Baja despacio controlando el peso del cuerpo hasta estirar los brazos.'
    ]
  },
  {
    id: 'bic-short-7',
    name: 'Isometría en Banco/Silla en Posición de Predicador Corporal',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'bodyweight',
    instructions: [
      'Colócate frente al respaldo inclinado de un sofá o silla alta, apoyando la cara posterior de los brazos y axilas.',
      'Simula la contracción de bíceps aplicando auto-resistencia cruzando las manos o sujetando un objeto pesado.',
      'Aprieta la zona interna del bíceps manteniendo la posición estática durante 20 a 30 segundos.'
    ]
  },
  {
    id: 'bic-short-8',
    name: 'Curl con Barra Recta (Agarre Ancho)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'machines',
    instructions: [
      'Toma una barra recta con agarre en supinación bastante más ancho que la distancia de tus hombros.',
      'Mantén la espalda erguida, los hombros atrás y los codos ligeramente adelantados.',
      'Eleva la barra en arco hacia la parte alta del pecho concentrando el esfuerzo en la cara interna del brazo.',
      'Desciende la barra de forma rítmica sin balancear la pelvis.'
    ]
  },
  {
    id: 'bic-short-9',
    name: 'Curl de Bíceps Alto en Poleas Dobles (Cable Crossover Curl)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'machines',
    instructions: [
      'Ajusta dos poleas altas a ambos lados de una máquina de cruces y toma las empuñaduras individuales.',
      'Colócate al centro con los brazos extendidos a los lados a la altura de los hombros.',
      'Flexiona ambos codos al mismo tiempo llevando los agarres hacia la cabeza.',
      'Mantén los codos elevados y fijos durante toda la serie para aislar la cabeza corta.'
    ]
  },
  {
    id: 'bic-short-10',
    name: 'Curl en Máquina Predicador (Scott Machine)',
    muscleGroupId: 'biceps',
    subzoneId: 'biceps-short-head',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina predicador y apoya el pecho y los brazos firmemente sobre el cojín.',
      'Toma los agarres anchos con las palmas mirando hacia arriba.',
      'Flexiona los codos tirando de la carga hacia tu cara hasta conseguir la máxima contracción.',
      'Regresa despacio controlando la fase negativa hasta la extensión casi completa del codo.'
    ]
  },

  // --- BÍCEPS: BRAQUIAL ANTERIOR ---
  {
    id: 'brachialis-1',
    name: 'Curl Martillo con Mancuernas (Hammer Curl)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'dumbbells',
    instructions: [
      'De pie o sentado, toma una mancuerna en cada mano con agarre neutro (palmas mirándose de frente) y los brazos extendidos a los lados del cuerpo.',
      'Mantén los codos pegados a las costillas y las muñecas alineadas sin doblar.',
      'Flexiona los codos subiendo las mancuernas en dirección a los hombros sin mover el tronco ni balancear los codos.',
      'Aprieta en el punto más alto sintiendo la tensión debajo del bíceps y baja lentamente.'
    ]
  },
  {
    id: 'brachialis-2',
    name: 'Curl Zottman',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'dumbbells',
    instructions: [
      'Toma las mancuernas con agarre supino (palmas hacia arriba) al inicio.',
      'Flexiona los codos subiendo el peso como en un curl tradicional hasta llegar a la altura de los hombros.',
      'En la parte superior, gira las muñecas 180° para colocar el agarre en pronación (palmas mirando hacia abajo).',
      'Baja el peso lentamente en pronación (fase excéntrica), donde el braquial anterior y el braquiorradial asumen casi todo el trabajo.'
    ]
  },
  {
    id: 'brachialis-3',
    name: 'Curl Martillo Cruzado al Pecho (Pinwheel Curl)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con las mancuernas a los lados y agarre neutro.',
      'Eleva una mancuerna en diagonal cruzando el torso hacia el hombro/pectoral opuesto.',
      'Mantén el codo pegado al cuerpo y la muñeca firme.',
      'Haz una pausa arriba enfocando la contracción en la zona lateral del brazo y baja suavemente antes de cambiar de lado.'
    ]
  },
  {
    id: 'brachialis-4',
    name: 'Curl Martillo con Banda de Resistencia',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de la banda de resistencia con ambos pies alineados a la anchura de las caderas.',
      'Toma las empuñaduras o extremos de la banda con agarre neutro (palmas mirándose de frente).',
      'Con los codos fijos a los costados, flexiona los brazos llevando las manos hacia los hombros.',
      'Desciende despacio frenando la tensión elástica sin perder el control.'
    ]
  },
  {
    id: 'brachialis-5',
    name: 'Curl Invertido con Banda (Agarre Prono)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'bands',
    instructions: [
      'Pisa la banda elástica y tómala con las palmas mirando hacia tus muslos (agarre en pronación).',
      'Mantén los codos pegados al cuerpo y las muñecas rígidas.',
      'Flexiona los codos subiendo las manos hacia el pecho, desactivando la contribución del bíceps y obligando al braquial a trabajar.',
      'Regresa al punto inicial de forma pausada.'
    ]
  },
  {
    id: 'brachialis-6',
    name: 'Dominadas en Agarre Neutro (Neutral-Grip Pull-ups)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en unas barras paralelas o anillas y tómate con agarre neutro (palmas mirándose entre sí).',
      'Con los brazos extendidos y el abdomen activado, flexiona los codos tirando del cuerpo hacia arriba.',
      'Eleva el cuerpo hasta que la barbilla supere las barras, manteniendo los codos pegados al tronco.',
      'Baja con control hasta la extensión completa de los codos.'
    ]
  },
  {
    id: 'brachialis-7',
    name: 'Dominadas Pronas (Overhand Pull-ups)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'bodyweight',
    instructions: [
      'Agárrate a una barra fija con las palmas mirando hacia adelante (agarre prono) a la anchura de los hombros.',
      'Inicia la subida flexionando los codos con fuerza; al estar las palmas mirando hacia afuera, el braquial actúa como el principal flexor del codo.',
      'Sube hasta pasar la barbilla por encima de la barra y desciende suavemente.'
    ]
  },
  {
    id: 'brachialis-8',
    name: 'Curl Martillo en Polea Baja con Cuerda',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'machines',
    instructions: [
      'Engancha el accesorio de cuerda en el punto más bajo de la máquina de poleas.',
      'Toma las puntas de la cuerda con las palmas mirándose de frente y da un paso atrás.',
      'Mantén los codos pegados al torso y flexiona los brazos llevando los nudillos hacia los hombros.',
      'En la parte superior, abre ligeramente los extremos de la cuerda para enfatizar la contracción y desciende paulatinamente.'
    ]
  },
  {
    id: 'brachialis-9',
    name: 'Curl Invertido con Barra EZ (Agarre Prono)',
    muscleGroupId: 'biceps',
    subzoneId: 'brachialis',
    equipment: 'machines',
    instructions: [
      'Toma la barra EZ por sus curvas en agarre en pronación (palmas mirando hacia abajo).',
      'Mantén la vista al frente, el tronco firme y los codos inmóviles junto al torso.',
      'Eleva la barra flexionando los codos hasta que los antebrazos queden cerca de la vertical.',
      'Controla la bajada para maximizar la tensión excéntrica en el braquial anterior.'
    ]
  },

  // --- TRÍCEPS: CABEZA LARGA ---
  {
    id: 'tri-long-1',
    name: 'Extensión de Tríceps Copa sobre la Cabeza (con Mancuerna a Dos Manos)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco con respaldo corto o ponte de pie con el abdomen bien activado.',
      'Toma una mancuerna pesada verticalmente con ambas manos, formando un triángulo ("diamante") con tus pulgares e índices bajo la parte interna del disco.',
      'Eleva la mancuerna por encima de la cabeza con los brazos extendidos.',
      'Flexiona los codos bajando la mancuerna por detrás de la nuca hasta sentir un estiramiento profundo en la parte posterior del brazo, manteniendo los codos lo más cerrados y apuntando hacia adelante posible.',
      'Extiende los codos empujando la mancuerna hacia arriba hasta regresar a la posición inicial sin mover los hombros.'
    ]
  },
  {
    id: 'tri-long-2',
    name: 'Extensión de Tríceps Unilateral sobre la Cabeza',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'Toma una mancuerna con una mano y extiéndela por encima de la cabeza.',
      'Puedes colocar la mano libre sobre el torso o el codo activo para dar estabilidad.',
      'Baja la mancuerna por detrás de la cabeza flexionando el codo hacia el hombro opuesto.',
      'Empuja el peso hacia el techo hasta extender el codo por completo y aprieta la cabeza larga arriba.'
    ]
  },
  {
    id: 'tri-long-3',
    name: 'Pullover con Mancuerna (Enfocado en Tríceps / Cabeza Larga)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'dumbbells',
    instructions: [
      'Apoya la parte superior de la espalda perpendicularmente sobre un banco plano, formando un puente con las caderas elevadas.',
      'Toma una mancuerna con ambas manos sobre el pecho con los codos ligeramente flexionados.',
      'Lleva la mancuerna hacia atrás por encima y detrás de la cabeza en un arco suave hasta sentir el estiramiento en la cabeza larga del tríceps y dorsales.',
      'Regresa la mancuerna a la posición sobre el pecho mediante la contracción del tríceps.'
    ]
  },
  {
    id: 'tri-long-4',
    name: 'Extensión sobre la Cabeza con Banda de Resistencia',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'bands',
    instructions: [
      'Pisa un extremo de la banda de resistencia con los talones (o anclala en un punto bajo por detrás de ti).',
      'Toma el otro extremo de la liga con ambas manos por detrás de tu espalda y eleva los codos por encima de la cabeza.',
      'Con los codos apuntando hacia el techo, extiende los brazos hacia arriba contra la resistencia de la liga.',
      'Regresa de forma pausada permitiendo que la banda estire la parte posterior del brazo.'
    ]
  },
  {
    id: 'tri-long-5',
    name: 'Patada de Tríceps Inclinada con Banda',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda a la altura de la cintura frente a ti o pisa el centro de la liga e inclina el torso hacia adelante a 45°.',
      'Lleva los codos hacia atrás superando la línea de la espalda y mantenlos fijos ahí.',
      'Extiende los codos llevando las manos hacia atrás/arriba por completo. Al mantener el brazo por detrás del torso, la cabeza larga permanece en máxima contracción.',
      'Flexiona los codos suavemente sin dejar que bajen de la posición elevada.'
    ]
  },
  {
    id: 'tri-long-6',
    name: 'Flexiones Pica / Flexiones de Tríceps en Inclinación (Triceps Extensions)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de plancha apoyando las manos en el suelo o sobre una barra/superficie elevada frente a ti.',
      'Coloca los codos apoyados o alineados por delante de los hombros.',
      'Flexiona los codos bajando el antebrazo y la cabeza por debajo del nivel de las manos para lograr el estiramiento por encima de la cabeza.',
      'Empuja con fuerza las palmas contra la superficie extendiendo los codos para elevar el cuerpo a la posición inicial.'
    ]
  },
  {
    id: 'tri-long-7',
    name: 'Fondos entre Bancos / Sillas con Codos Atrasados',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'bodyweight',
    instructions: [
      'Coloca las manos en el borde de un banco o silla estable a tus espaldas con las piernas extendidas o flexionadas.',
      'Desciende la cadera hacia el suelo manteniendo la espalda muy cerca del banco y los codos flexionados hacia atrás.',
      'Empuja hacia arriba extendiendo los codos por completo en la parte alta.'
    ]
  },
  {
    id: 'tri-long-8',
    name: 'Extensión de Tríceps sobre la Cabeza en Polea Baja con Cuerda',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'machines',
    instructions: [
      'Engancha el accesorio de cuerda en la polea baja.',
      'Toma la cuerda, da la espalda a la máquina y eleva los brazos por encima de la cabeza con los codos apuntando hacia arriba.',
      'Flexiona los codos bajando los puños por detrás de la nuca.',
      'Empuja la cuerda hacia arriba y abre ligeramente los extremos en la parte alta para maximizar la contracción de la cabeza larga.'
    ]
  },
  {
    id: 'tri-long-9',
    name: 'Extensión de Tríceps en Polea Alta con Cuerda de Espaldas (Cable Overhead Extension)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'machines',
    instructions: [
      'Coloca la polea a la altura del pecho o cabeza.',
      'Toma la cuerda, da un paso hacia adelante de espaldas a la máquina e inclina el torso 45° hacia el frente.',
      'Mantén los codos fijos a los lados de la cabeza y extiende los brazos hacia adelante/arriba siguiendo la línea del cable.',
      'Regresa de forma controlada dejando que la polea estire profundamente la cabeza larga.'
    ]
  },
  {
    id: 'tri-long-10',
    name: 'Press Francés con Barra EZ en Banco Plano / Inclinado',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-long-head',
    equipment: 'machines',
    instructions: [
      'Recuéstate en un banco plano o ligeramente inclinado y sostiene una barra EZ en las curvas internas sobre tu pecho con los brazos extendidos.',
      'En lugar de bajar la barra a la frente, inclina levemente los brazos hacia atrás a un ángulo de 60° (para mantener tensión continua en la cabeza larga).',
      'Flexiona los codos bajando la barra por detrás de la cabeza.',
      'Empuja la barra hacia arriba y atrás manteniendo ese ángulo de inclinación constante.'
    ]
  },

  // --- TRÍCEPS: CABEZA LATERAL ---
  {
    id: 'tri-lat-1',
    name: 'Extensión de Tríceps Horizontal / Press Francés con Mancuernas',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate sobre un banco plano con una mancuerna en cada mano, brazos extendidos perpendicularmente sobre el pecho y palmas mirándose (agarre neutro) o hacia los pies (agarre prono).',
      'Mantén los codos fijos apuntando hacia el techo sin mover los hombros.',
      'Flexiona únicamente los codos bajando las mancuernas a los lados de las orejas/sienes.',
      'Empuja el peso hacia arriba extendiendo los codos por completo y aprieta la cara externa del tríceps al final.'
    ]
  },
  {
    id: 'tri-lat-2',
    name: 'Patada de Tríceps con Mancuerna (Kickback)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'dumbbells',
    instructions: [
      'Apoya una rodilla y una mano sobre un banco plano, manteniendo la espalda paralela al suelo.',
      'Sostén una mancuerna con la mano libre, eleva el codo alineándolo con el torso y mantenlo fijo a la costilla.',
      'Extiende el codo llevando la mancuerna hacia atrás hasta que el brazo quede completamente recto y paralelo al suelo.',
      'Sostén la contracción 1 segundo en la parte posterior y regresa a 90° de flexión sin bajar el codo.'
    ]
  },
  {
    id: 'tri-lat-3',
    name: 'Press de Pecho / Tríceps con Agarre Neutro Estrecho',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate en un banco o en el suelo (Floor Press) con una mancuerna en cada mano en agarre neutro pegadas al torso.',
      'Mantén los codos rozando las costillas durante todo el trayecto.',
      'Empuja las mancuernas hacia arriba enfocando el esfuerzo en los tríceps en lugar del pecho.',
      'Baja suavemente rozando los costados con los codos.'
    ]
  },
  {
    id: 'tri-lat-4',
    name: 'Jalón de Tríceps en Polea / Anclaje Alto con Banda (Agarre Prono)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto alto (puerta o barra).',
      'Sostén las empuñaduras con las palmas mirando hacia abajo (pronación) y mantén los codos pegados a los costados.',
      'Empuja la banda hacia abajo hasta extender completamente los codos al lado de los muslos.',
      'Regresa de forma pausada permitiendo que los codos se flexionen a 90° sin descolgar las escápulas.'
    ]
  },
  {
    id: 'tri-lat-5',
    name: 'Extensión de Tríceps Unilateral con Banda',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda arriba y toma un extremo con una sola mano en agarre neutro o prono.',
      'Da un paso atrás para dar tensión y fija el codo junto al costado.',
      'Empuja la banda hacia abajo hasta bloquear el codo, apretando la cara externa del tríceps.',
      'Controla la fase negativa al subir la mano.'
    ]
  },
  {
    id: 'tri-lat-6',
    name: 'Flexiones Diamante (Diamond Push-ups)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de tabla/plancha apoyando las manos juntas en el suelo bajo el centro del pecho, formando un diamante/triángulo con los dedos índices y pulgares.',
      'Mantén el cuerpo en línea recta y desciende el pecho hacia las manos mientras los codos se flexionan pegados al cuerpo.',
      'Empuja el suelo con firmeza extendiendo los codos por completo arriba para activar la cabeza lateral.'
    ]
  },
  {
    id: 'tri-lat-7',
    name: 'Flexiones con Manos Retrasadas / Codos Pegados (Sphinx Push-ups)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de plancha con las palmas apoyadas a la altura de los hombros pero ligeramente adelantadas.',
      'Flexiona los codos bajando los antebrazos al suelo (posición de esfinge).',
      'Empuja el suelo con las palmas levantando los codos del suelo únicamente con la fuerza de los tríceps.'
    ]
  },
  {
    id: 'tri-lat-8',
    name: 'Jalón de Tríceps en Polea Alta con Barra Recta o V (Pushdown)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'machines',
    instructions: [
      'Engancha una barra recta o en "V" en la polea alta de la máquina.',
      'Toma la barra con agarre en pronación (palmas hacia abajo) a la anchura de los hombros y pega los codos a las costillas.',
      'Empuja la barra hacia abajo hacia tus muslos hasta la extensión total de los brazos.',
      'Regresa despacio subiendo la barra hasta la altura del pecho manteniendo los codos inmóviles.'
    ]
  },
  {
    id: 'tri-lat-9',
    name: 'Press Cerrado con Barra en Banco Plano (Close-Grip Bench Press)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'machines',
    instructions: [
      'Acuéstate en un banco plano y toma la barra con las palmas hacia adelante y las manos separadas a la anchura de los hombros (o ligeramente más juntas, unos 20-30 cm).',
      'Desciende la barra de forma controlada hacia la parte baja del esternón, manteniendo los codos cerrados y pegados al cuerpo.',
      'Empuja la barra hacia arriba con fuerza hasta el bloqueo de codos, concentrando la carga en la cabeza lateral y medial.'
    ]
  },
  {
    id: 'tri-lat-10',
    name: 'Dips / Fondos en Paralelas enfocado en Tríceps',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-lateral-head',
    equipment: 'bodyweight',
    instructions: [
      'Suspéndete en unas barras paralelas con los brazos extendidos y el cuerpo completamente vertical (sin inclinar el torso hacia adelante).',
      'Flexiona los codos bajando el cuerpo hasta que los brazos formen un ángulo de 90°.',
      'Empuja hacia arriba hasta volver a extender los codos por completo al final.'
    ]
  },

  // --- TRÍCEPS: CABEZA MEDIAL ---
  {
    id: 'tri-med-1',
    name: 'Extensiones de Tríceps en Agarre Supino (Inverted-Grip Dumbbell Triceps Extension)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate sobre un banco plano sosteniendo una mancuerna en cada mano con las palmas mirando hacia tu cabeza (agarre supino/invertido).',
      'Mantén los codos apuntando fijos hacia el techo.',
      'Flexiona los codos bajando las mancuernas a los lados de las orejas.',
      'Empuja las mancuernas hacia arriba hasta extender los codos por completo, apretando la zona baja del tríceps.'
    ]
  },
  {
    id: 'tri-med-2',
    name: 'Patada de Tríceps con Agarre Supino (Inverted-Grip Kickback)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'dumbbells',
    instructions: [
      'Apoya una rodilla y una mano sobre un banco plano con la espalda paralela al suelo.',
      'Toma la mancuerna con la mano libre, pero gira la muñeca para que la palma mire hacia afuera/arriba (supinación).',
      'Eleva el codo alineándolo con el torso.',
      'Extiende el codo llevando la mancuerna hacia atrás hasta bloquear el brazo, enfatizando el trabajo en la cabeza medial.'
    ]
  },
  {
    id: 'tri-med-3',
    name: 'Press Francés Unilateral en Agarre Supino',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'dumbbells',
    instructions: [
      'Échate en un banco plano sosteniendo una mancuerna con la palma mirando hacia ti.',
      'Flexiona el codo bajando la mancuerna hacia el hombro opuesto.',
      'Extiende el brazo hacia arriba manteniendo el agarre invertido durante todo el movimiento.'
    ]
  },
  {
    id: 'tri-med-4',
    name: 'Jalón de Tríceps con Agarre Supino con Banda (Reverse-Grip Band Pushdown)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto alto.',
      'Sujeta los extremos con las palmas mirando hacia el techo (agarre supino).',
      'Pega los codos a los costados del torso.',
      'Empuja la banda hacia abajo hasta bloquear los codos al lado de las caderas y regresa de forma pausada.'
    ]
  },
  {
    id: 'tri-med-5',
    name: 'Extensión Horizontal con Banda en Agarre Supino',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'bands',
    instructions: [
      'Ancla la banda a la altura del pecho.',
      'Ponte de frente al anclaje, toma la banda con las palmas mirando hacia arriba y da un paso atrás.',
      'Mantén los codos pegados a las costillas y extiende las muñecas hacia atrás extendiendo los codos.',
      'Controla el retorno de la liga sin desalinear las manos.'
    ]
  },
  {
    id: 'tri-med-6',
    name: 'Flexiones Esfinge con Énfasis en Bloqueo (Sphinx Push-ups)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de plancha con los antebrazos apoyados en el suelo y las palmas mirando hacia abajo.',
      'Presiona con fuerza las palmas de las manos contra el suelo levantando los antebrazos y codos hasta bloquear los brazos por completo.',
      'Controla el descenso bajando suavemente los antebrazos al suelo.'
    ]
  },
  {
    id: 'tri-med-7',
    name: 'Fondos entre Bancos / Sillas con Bloqueo Completo (Bench Dips)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'bodyweight',
    instructions: [
      'Coloca las manos en el borde de un banco con los dedos apuntando hacia adelante.',
      'Flexiona los codos bajando la cadera en ángulo recto.',
      'Empuja con fuerza hasta extender los brazos completamente, pausando 1 segundo en el bloqueo articular superior para activar la cabeza medial.'
    ]
  },
  {
    id: 'tri-med-8',
    name: 'Flexiones en Banco con Manos en Agarre Invertido',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'bodyweight',
    instructions: [
      'Apoya las manos sobre un banco elevado con los dedos apuntando hacia tus pies (agarre supino/invertido).',
      'Mantén el cuerpo en línea recta y flexiona los codos pegándolos al tronco.',
      'Empuja el banco hasta extender por completo los brazos.'
    ]
  },
  {
    id: 'tri-med-9',
    name: 'Jalón de Tríceps en Polea Alta con Agarre Invertido / Supino (Reverse-Grip Pushdown)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'machines',
    instructions: [
      'Coloca una barra recta o barra EZ corta en la polea alta.',
      'Toma la barra con agarre supino (palmas mirando hacia el techo) a la anchura de los hombros.',
      'Pega los codos a los costados y empuja la barra hacia abajo hacia los muslos.',
      'Bloquea los codos al final del recorrido y regresa suavemente subiendo la barra a la altura del pecho.'
    ]
  },
  {
    id: 'tri-med-10',
    name: 'Jalón Unilateral en Polea Alta en Agarre Invertido',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'machines',
    instructions: [
      'Quita los accesorios de la polea alta y toma directamente el cable (o un agarre individual D) con la palma mirando hacia arriba.',
      'Coloca el codo firme junto al torso.',
      'Empuja el cable hacia abajo aislando el tríceps hasta la extensión total del brazo.',
      'Pausa en la contracción y desciende paulatinamente.'
    ]
  },
  {
    id: 'tri-med-11',
    name: 'Press Francés con Barra EZ en Banco Declinado (Decline EZ-Bar Extension)',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'machines',
    instructions: [
      'Acuéstate en un banco declinado y toma la barra EZ en las curvas con agarre estrecho.',
      'Lleva la barra hacia atrás de la cabeza.',
      'Flexiona los codos bajando la barra cerca de la frente/coronilla y empuja de regreso. El ángulo declinado genera máxima tensión en la fase final donde actúa la cabeza medial.'
    ]
  },
  {
    id: 'tri-med-12',
    name: 'Press de Pecho / Tríceps con Barra EZ en Agarre Invertido',
    muscleGroupId: 'triceps',
    subzoneId: 'triceps-medial-head',
    equipment: 'machines',
    instructions: [
      'Acuéstate en banco plano y toma la barra EZ con palmas mirando hacia tu cabeza.',
      'Desciende la barra al esternón manteniendo los codos cerrados.',
      'Empuja la barra hacia arriba enfocando la contracción en la cabeza medial del tríceps.'
    ]
  },

  // --- TRÍCEPS: ANCÓNEO ---
  {
    id: 'anc-1',
    name: 'Extensión de Codo Unilateral con Mancuerna y Pronación (Anconeus Kickback)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'dumbbells',
    instructions: [
      'Apoya una rodilla y la mano libre sobre un banco plano con el torso paralelo al suelo.',
      'Sostén una mancuerna liviana y eleva el codo alineándolo con el torso.',
      'Al extender el codo hacia atrás, gira la muñeca para que el meñique quede mirando hacia arriba (pronación acentuada).',
      'Mantén el bloqueo articular durante 1 o 2 segundos sintiendo la tensión justo detrás de la articulación del codo antes de regresar a 90°.'
    ]
  },
  {
    id: 'anc-2',
    name: 'Press Tate con Mancuernas (Tate Press)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate en un banco plano sosteniendo dos mancuernas sobre el pecho con los brazos extendidos y las palmas mirando hacia los pies (agarre prono).',
      'Apunta los codos hacia los lados exteriores.',
      'Flexiona únicamente los codos bajando los extremos de las mancuernas hacia el centro del pecho (las mancuernas se dibujan en forma de V).',
      'Empuja las mancuernas hacia arriba hasta el bloqueo completo de los codos.'
    ]
  },
  {
    id: 'anc-3',
    name: 'Extensión Prona sobre Banco (Overhead Pronated Triceps Extension)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco y toma una mancuerna en vertical por el disco.',
      'Mantén los codos cerrados por encima de la cabeza.',
      'Flexiona los codos bajando el peso detrás de la nuca y extiéndelos por completo en la parte alta, acentuando el bloqueo articular final.'
    ]
  },
  {
    id: 'anc-4',
    name: 'Extensión Terminal de Codo con Banda (Band Terminal Elbow Extension)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a la altura del pecho.',
      'Toma la liga con agarre prono (palma hacia abajo), da un paso atrás y fija el codo a la altura del costado en un ángulo de 90°.',
      'Extiende el codo enfocándote en los últimos 15 a 20 grados del recorrido hasta que el brazo quede totalmente recto.',
      'Mantén el bloqueo de 2 a 3 segundos en isometría para maximizar la activación del ancóneo.'
    ]
  },
  {
    id: 'anc-5',
    name: 'Jalón Prono con Banda y Separación de Muñeca',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'bands',
    instructions: [
      'Ancla la banda en un punto alto por encima de la cabeza.',
      'Toma las bandas con las palmas mirando hacia abajo.',
      'Empuja la banda hacia abajo y, en el punto de extensión completa, separa las manos hacia afuera haciendo una ligera pronación.',
      'Regresa despacio frena la resistencia elástica.'
    ]
  },
  {
    id: 'anc-6',
    name: 'Flexiones Sphinx con Enfoque en Bloqueo (Sphinx / Cobra Extensions)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de plancha apoyando los antebrazos sobre una colchoneta suave.',
      'Coloca las palmas firmes contra el suelo con las puntas de los dedos apuntando al frente.',
      'Presiona fuertemente las manos contra el suelo para despegar los antebrazos y elevar los codos hasta extenderlos totalmente.',
      'Pausa 1 segundo en la posición superior de bloqueo articular y desciende suavemente de nuevo a los antebrazos.'
    ]
  },
  {
    id: 'anc-7',
    name: 'Bloqueos Isométricos en Fondo Corto (Bench Dip Lockouts)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'bodyweight',
    instructions: [
      'Apoya las manos en el borde de un banco con las piernas extendidas frente a ti.',
      'Flexiona los codos solo unos 15 a 30 grados (rango de movimiento corto).',
      'Empuja fuertemente hacia arriba hasta extender los brazos por completo.',
      'Sostén la posición bloqueada arriba durante 3 a 5 segundos por repetición.'
    ]
  },
  {
    id: 'anc-8',
    name: 'Jalón de Tríceps con Barra Recta y Agarre Prono Ancho (Wide-Grip Pushdown)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'machines',
    instructions: [
      'Engancha una barra recta en la polea alta de la máquina de cables.',
      'Toma la barra con las palmas mirando hacia abajo (agarre prono) a una distancia ligeramente mayor que la anchura de tus hombros.',
      'Pega los codos a los costados del tronco y empuja la barra hacia tus muslos.',
      'Al llegar abajo, acentúa la extensión completa trabando la articulación de forma controlada.'
    ]
  },
  {
    id: 'anc-9',
    name: 'Press de Pecho / Tríceps con Agarres Ciertos en Máquina Smith (JM Press en Smith)',
    muscleGroupId: 'triceps',
    subzoneId: 'anconeus',
    equipment: 'machines',
    instructions: [
      'Acuéstate sobre un banco plano bajo la barra de la máquina Smith.',
      'Toma la barra con agarre en pronación a la anchura de los hombros.',
      'Desciende la barra apuntando los codos hacia adelante y abajo (hacia la parte alta del pecho o cuello).',
      'Empuja la barra hacia arriba hasta conseguir la extensión y bloqueo completo de los codos.'
    ]
  },

  // --- PECHO: SUPERIOR ---
  {
    id: 'ch-up-1',
    name: 'Press Inclinado con Mancuernas (Incline Dumbbell Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'dumbbells',
    instructions: [
      'Ajusta un banco a un ángulo de 30° a 45°.',
      'Siéntate apoyando la espalda completa y sostén las mancuernas a la altura del pecho con agarre prono (palmas hacia adelante) y los codos flexionados a unos 45°-60° respecto al torso.',
      'Empuja las mancuernas hacia arriba y ligeramente hacia adentro sobre la línea de las clavículas sin llegar a chocar los discos arriba.',
      'Baja las mancuernas de forma controlada hasta sentir el estiramiento en la parte superior del pecho.'
    ]
  },
  {
    id: 'ch-up-2',
    name: 'Aperturas Inclinadas con Mancuernas (Incline Dumbbell Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'dumbbells',
    instructions: [
      'Colócate en un banco inclinado a 30°-45° sosteniendo las mancuernas sobre la parte alta del pecho con los brazos casi extendidos (ligera flexión fija en los codos) y las palmas mirándose (agarre neutro).',
      'Abre los brazos hacia los lados en un arco amplio hasta sentir un estiramiento profundo en el pectoral superior.',
      'Cierra los brazos siguiendo la misma trayectoria en arco hacia el centro hasta que las mancuernas se reúnan sobre la clavícula.'
    ]
  },
  {
    id: 'ch-up-3',
    name: 'Press Inclinado Neutro / Agarre Abierto con Mancuernas',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en el banco inclinado y coloca las mancuernas con agarre neutro (palmas mirándose de frente).',
      'Mantén los codos pegados más cerca del torso durante el empuje.',
      'Presiona el peso hacia arriba enfocando la tensión en la porción clavicular y reduce la sobrecarga en la parte anterior del hombro.',
      'Regresa de forma pausada hasta la altura de los pectorales superiores.'
    ]
  },
  {
    id: 'ch-up-4',
    name: 'Press Hex Inclinado (Incline Hex Press / Squeeze Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate en un banco inclinado sosteniendo dos mancuernas presionadas la una contra la otra sobre el pecho.',
      'Mantén una fuerza constante presionando ambas mancuernas entre sí hacia el centro.',
      'Empuja las mancuernas hacia arriba manteniendo la presión continua entre ellas durante todo el trayecto.',
      'Baja despacio hacia el esternón superior sin perder el contacto entre las mancuernas.'
    ]
  },
  {
    id: 'ch-up-5',
    name: 'Press Inclinado de Pie con Banda de Resistencia',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'bands',
    instructions: [
      'Ancla la banda en un punto bajo detrás de ti (o pisa la banda con el pie trasero en postura de zancada).',
      'Toma las empuñaduras con las palmas mirando hacia abajo a la altura de los hombros.',
      'Empuja las manos hacia arriba y adelante en un ángulo inclinado de 45° cruzando levemente los puños al final.',
      'Regresa de manera lenta resistiendo la tensión elástica.'
    ]
  },
  {
    id: 'ch-up-6',
    name: 'Cruces Inclinados de Abajo hacia Arriba con Banda (Low-to-High Band Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia cerca del suelo.',
      'Ponte de pie de espaldas al anclaje en postura estable, sosteniendo los extremos con las palmas hacia adelante y los brazos extendidos hacia abajo.',
      'Junta las manos frente a la cara/clavículas elevando los brazos en diagonal hacia arriba.',
      'Pausa 1 segundo en la cima sintiendo la contracción del haz clavicular y regresa suavemente.'
    ]
  },
  {
    id: 'ch-up-7',
    name: 'Flexiones Declinadas (Decline Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'bodyweight',
    instructions: [
      'Coloca las puntas de los pies elevadas sobre una silla, banco o escalón, y apoya las palmas de las manos en el suelo a una distancia ligeramente mayor que la anchura de los hombros.',
      'Mantén el cuerpo firme en línea recta (abdomen y glúteos contraídos).',
      'Flexiona los codos bajando el pecho de forma controlada hacia el suelo.',
      'Empuja el suelo con fuerza extendiendo los brazos por completo.'
    ]
  },
  {
    id: 'ch-up-8',
    name: 'Flexiones en Pica Inclinadas Livianas (Incline Pike Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de "V" invertida con la cadera elevada.',
      'Flexiona los codos dirigiendo la cabeza diagonalmente hacia el suelo.',
      'Empuja hacia arriba enfocando la fuerza en la franja clavicular y deltoides anterior.'
    ]
  },
  {
    id: 'ch-up-9',
    name: 'Press Inclinado con Barra (Incline Barbell Bench Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'machines',
    instructions: [
      'Échate en un banco inclinado a 30° bajo la barra del soporte.',
      'Toma la barra con un agarre en pronación ligeramente más ancho que los hombros.',
      'Desencaja la barra y bájala con control hacia la parte alta del pecho (justo debajo de las clavículas).',
      'Empuja la barra en línea recta hacia arriba hasta la extensión casi completa de los codos.'
    ]
  },
  {
    id: 'ch-up-10',
    name: 'Cruces en Polea Baja hacia Arriba (Low-to-High Cable Crossover)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'machines',
    instructions: [
      'Engancha las empuñaduras individuales en los puntos más bajos de un cruce de poleas.',
      'Colócate al centro, da un paso adelante con una pierna para dar estabilidad y sostiene las asas con las palmas hacia adelante.',
      'Eleva las manos en arco en diagonal ascendente hasta que los puños se junten a la altura de los ojos/frente.',
      'Mantén la contracción 1 segundo en el punto máximo y desciende lentamente.'
    ]
  },
  {
    id: 'ch-up-11',
    name: 'Press Inclinado en Máquina Smith (Incline Smith Machine Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'machines',
    instructions: [
      'Coloca un banco inclinado a 30°-45° centrado dentro de la máquina Smith.',
      'Ajusta el agarre a una distancia cómoda y desengancha la barra.',
      'Baja la barra suavemente hacia la zona superior del pecho.',
      'Presiona la carga hacia arriba permitiendo un recorrido guiado y constante.'
    ]
  },
  {
    id: 'ch-up-12',
    name: 'Press Inclinado en Máquina Hammer Strength / Placas',
    muscleGroupId: 'chest',
    subzoneId: 'chest-upper',
    equipment: 'machines',
    instructions: [
      'Ajusta la altura del asiento para que los agarres de la máquina queden alineados con la clavícula.',
      'Mantén la espalda bien pegada al respaldo y las plantas de los pies firmes en el suelo.',
      'Empuja las empuñaduras hacia adelante y arriba de forma convergente.',
      'Regresa despacio frenando las placas sin dejar que el peso descanse abajo.'
    ]
  },

  // --- PECHO: MEDIO ---
  {
    id: 'ch-mid-1',
    name: 'Press Plano con Mancuernas (Flat Dumbbell Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate en un banco plano sosteniendo una mancuerna en cada mano sobre el pecho, con las palmas mirando hacia los pies y los codos inclinados a unos 45°-60° respecto al torso.',
      'Mantén los pies apoyados firmemente en el suelo y una ligera curvatura natural en la zona lumbar.',
      'Empuja las mancuernas en vertical hacia arriba hasta extender los brazos casi por completo sin chocar las mancuernas arriba.',
      'Baja el peso de forma controlada hasta que los codos queden alineados con el torso y sientas el estiramiento en el pectoral.'
    ]
  },
  {
    id: 'ch-mid-2',
    name: 'Aperturas en Banco Plano con Mancuernas (Flat Dumbbell Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate en un banco plano con las mancuernas extendidas sobre la mitad del pecho, las palmas mirándose (agarre neutro) y los codos levemente flexionados de forma fija.',
      'Abre los brazos hacia los lados en forma de arco hasta que las mancuernas lleguen a la altura del pecho y sientas un estiramiento profundo.',
      'Vuelve a juntar los brazos siguiendo el mismo arco hacia arriba hasta la posición inicial.'
    ]
  },
  {
    id: 'ch-mid-3',
    name: 'Press Hex Plano / Press de Apriete (Flat Hex Press / Squeeze Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate sobre un banco plano y junta dos mancuernas presionándolas fuertemente la una contra la otra sobre el esternón.',
      'Mantén una presión constante hacia el centro entre ambas mancuernas durante todo el ejercicio.',
      'Empuja las mancuernas hacia arriba sin separar las superficies en ningún momento.',
      'Baja despacio hasta tocar ligeramente el centro del pecho.'
    ]
  },
  {
    id: 'ch-mid-4',
    name: 'Press Plano de Pie con Banda de Resistencia (Band Chest Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a la altura del pecho en una columna o puerta (o pásala por la parte alta de tu espalda sostenida por las manos).',
      'Colócate de espaldas al anclaje en postura de zancada para dar estabilidad.',
      'Empuja las empuñaduras directamente hacia adelante a la altura de la mitad del pecho hasta extender los codos.',
      'Regresa suavemente resistiendo la tensión elástica.'
    ]
  },
  {
    id: 'ch-mid-5',
    name: 'Aperturas / Cruces de Pie con Banda a Altura Media (Band Chest Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'bands',
    instructions: [
      'Ancla las bandas a la altura de los hombros/pecho en dos puntos laterales o detrás de ti.',
      'Toma los extremos con los brazos extendidos hacia los lados y una ligera flexión de codos.',
      'Junta los puños frente al centro del esternón apretando el pecho en el punto medio.',
      'Regresa abriendo los brazos en arco con ritmo controlado.'
    ]
  },
  {
    id: 'ch-mid-6',
    name: 'Flexiones Tradicionales (Standard Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de tabla con las manos apoyadas en el suelo a un ancho ligeramente mayor que tus hombros y el cuerpo en línea recta.',
      'Inhala y desciende el cuerpo doblando los codos a unos 45° del torso hasta que el pecho quede a un par de centímetros del suelo.',
      'Empuja el suelo con fuerza extendiendo los brazos por completo mientras mantienes el abdomen activado.'
    ]
  },
  {
    id: 'ch-mid-7',
    name: 'Flexiones Anchas (Wide Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'bodyweight',
    instructions: [
      'Posiciona las manos en el suelo a una distancia considerablemente mayor que la anchura de los hombros.',
      'Flexiona los codos bajando el esternón hacia el suelo.',
      'Empuja hacia arriba enfocando mayor tensión en la parte externa y media del pectoral.'
    ]
  },
  {
    id: 'ch-mid-8',
    name: 'Flexiones Isométricas con Parada / Pausa (Pause Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'bodyweight',
    instructions: [
      'Realiza la bajada de una flexión estándar hasta que el pecho casi toque el suelo.',
      'Sostén la posición a 2 cm del suelo durante 2 a 3 segundos sin apoyar el cuerpo.',
      'Empuja con máxima velocidad hacia arriba hasta extender los brazos.'
    ]
  },
  {
    id: 'ch-mid-9',
    name: 'Press Plano con Barra (Flat Barbell Bench Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'machines',
    instructions: [
      'Acuéstate en un banco plano con la vista alineada bajo la barra.',
      'Toma la barra con agarre prono a una distancia superior al ancho de los hombros y desengánchala.',
      'Baja la barra con control hacia la mitad del esternón manteniendo los codos a 45°-60° del cuerpo.',
      'Empuja la barra en línea recta/ligeramente diagonal hacia arriba hasta el bloqueo suave de codos.'
    ]
  },
  {
    id: 'ch-mid-10',
    name: 'Cruces en Poleas Medias (Cable Chest Flyes / Crossover)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'machines',
    instructions: [
      'Ajusta las poleas a la altura de la mitad del pecho o de los hombros.',
      'Toma los agarres individuales, colócate en el centro y da un paso adelante para tensar el cable.',
      'Trae las manos hacia adelante en un arco hasta que los puños o muñecas se crucen frente al esternón.',
      'Pausa 1 segundo sintiendo la máxima contracción del pecho medio y regresa despacio.'
    ]
  },
  {
    id: 'ch-mid-11',
    name: 'Peck Deck / Aperturas en Máquina de Pecho (Pec Deck Machine)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'machines',
    instructions: [
      'Ajusta la altura del asiento para que los agarres o almohadillas queden a la altura del pecho.',
      'Apoya la espalda contra el respaldo y toma los agarres.',
      'Junta los brazos frente a ti mediante la fuerza del pecho hasta que los agarres se toquen al centro.',
      'Regresa de manera lenta y controlada abriendo el pecho sin despegar la espalda.'
    ]
  },
  {
    id: 'ch-mid-12',
    name: 'Press de Pecho Horizontal en Máquina (Chest Press Machine)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-mid',
    equipment: 'machines',
    instructions: [
      'Ajusta el asiento para que las empuñaduras queden alineadas con el centro del pectoral.',
      'Toma las asas e inicia el empuje hacia adelante hasta extender los brazos.',
      'Regresa reteniendo la carga suavemente hasta sentir el estiramiento completo.'
    ]
  },

  // --- PECHO: INFERIOR ---
  {
    id: 'ch-low-1',
    name: 'Press Declinado con Mancuernas (Decline Dumbbell Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'dumbbells',
    instructions: [
      'Colócate en un banco declinado (ángulo de -15° a -30°) asegurando las piernas en los rodillos.',
      'Sostén las mancuernas sobre la parte baja del pecho con agarre prono (palmas hacia los pies).',
      'Desciende las mancuernas hacia la línea inferior del pectoral doblando los codos a unos 45° respecto al torso.',
      'Empuja las mancuernas hacia arriba y ligeramente hacia adelante en diagonal descendente respecto al plano del torso hasta extender los brazos por completo.'
    ]
  },
  {
    id: 'ch-low-2',
    name: 'Aperturas Declinadas con Mancuernas (Decline Dumbbell Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate en un banco declinado sosteniendo las mancuernas sobre la parte inferior del esternón con las palmas mirándose (agarre neutro) y codos levemente flexionados de forma fija.',
      'Abre los brazos en un arco amplio descendente hasta sentir un estiramiento en el pectoral inferior.',
      'Reúne las mancuernas arriba sobre la zona del arco costal siguiendo el mismo arco sin chocar las pesas.'
    ]
  },
  {
    id: 'ch-low-3',
    name: 'Press Hex Declinado (Decline Hex / Squeeze Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'dumbbells',
    instructions: [
      'Colócate en el banco declinado y presiona dos mancuernas entre sí sobre la parte baja del pecho.',
      'Mantén la presión interna hacia el centro constante en todo momento.',
      'Empuja las mancuernas hacia arriba manteniendo la fuerza de contacto constante.',
      'Baja con control hacia el área inferior del pezón o esternón bajo.'
    ]
  },
  {
    id: 'ch-low-4',
    name: 'Cruces de Arriba hacia Abajo con Banda (High-to-Low Band Flyes)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto alto (por encima de la cabeza).',
      'Toma las empuñaduras, da un paso hacia adelante en postura de zancada e inclina ligeramente el torso al frente.',
      'Lleva los brazos extendidos (con suave flexión de codos) hacia abajo y hacia el centro, cruzando las manos al nivel de la cadera o pubis.',
      'Regresa de forma pausada permitiendo que la elasticidad eleve los brazos hacia la altura de los hombros.'
    ]
  },
  {
    id: 'ch-low-5',
    name: 'Press Declinado de Pie con Banda',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'bands',
    instructions: [
      'Ancla la banda por detrás de ti a la altura de la cabeza.',
      'Toma los extremos con agarre prono y da un paso al frente para tensionar la liga.',
      'Empuja las manos hacia adelante y hacia abajo en un ángulo inclinado descendente de 45°.',
      'Regresa suavemente resistiendo la tracción hacia atrás.'
    ]
  },
  {
    id: 'ch-low-6',
    name: 'Fondos en Paralelas enfocado en Pecho (Chest Dips)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'bodyweight',
    instructions: [
      'Suspéndete en dos barras paralelas con los brazos extendidos y las piernas cruzadas o flexionadas hacia atrás.',
      'Inclina el torso hacia adelante unos 30° a 45° e inclina la barbilla hacia el pecho para desplazar el foco del tríceps al pecho.',
      'Desciende el cuerpo doblando los codos hacia afuera hasta sentir el estiramiento profundo en la cara inferior del pectoral.',
      'Empuja el cuerpo hacia arriba hasta extender los brazos.'
    ]
  },
  {
    id: 'ch-low-7',
    name: 'Flexiones Inclinadas / Manos Elevadas (Incline Push-ups)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'bodyweight',
    instructions: [
      'Apoya las manos sobre una superficie elevada (banco, silla firme o barra baja) a una distancia un poco más ancha que los hombros.',
      'Mantén los pies en el suelo creando un plano inclinado con el cuerpo.',
      'Baja el cuerpo llevando la parte baja del pecho hacia el borde del banco.',
      'Empuja con fuerza la superficie elevando el torso hasta extender los brazos.'
    ]
  },
  {
    id: 'ch-low-8',
    name: 'Fondos en Silla / Banco Fijos (Bench / Chair Dips for Chest)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'bodyweight',
    instructions: [
      'Coloca las manos en la orilla de una silla o banco firme detrás de ti.',
      'Inclina el torso ligeramente hacia el frente en lugar de mantenerlo completamente vertical.',
      'Baja la cadera hacia el suelo y empuja fuertemente enfocando el empuje en la zona costal inferior.'
    ]
  },
  {
    id: 'ch-low-9',
    name: 'Cruces en Polea Alta a Baja (High-to-Low Cable Crossover)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'machines',
    instructions: [
      'Engancha las empuñaduras individuales en el punto más alto de las poleas.',
      'Ponte en el centro, da un paso al frente con una pierna para dar estabilidad e inclina levemente el torso.',
      'Trae las manos desde arriba en un arco descendente hasta juntar o cruzar los puños frente al abdomen/caderas.',
      'Regresa de manera muy controlada abriendo los brazos hasta la altura de la cabeza/hombros.'
    ]
  },
  {
    id: 'ch-low-10',
    name: 'Press Declinado con Barra (Decline Barbell Bench Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'machines',
    instructions: [
      'Recuéstate en un banco declinado con los pies fijos en los soportes de seguridad.',
      'Toma la barra con agarre prono un poco más ancho que tus hombros y desengánchala.',
      'Desciende la barra con control hacia la parte inferior del esternón (debajo de los pezones).',
      'Presiona la barra en vertical/diagonal hacia arriba hasta extender los codos.'
    ]
  },
  {
    id: 'ch-low-11',
    name: 'Press Declinado en Máquina Smith (Decline Smith Machine Press)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'machines',
    instructions: [
      'Coloca un banco declinado centrado bajo la guía de la máquina Smith.',
      'Ajusta el agarre sobre la barra alineado con la línea inferior del pecho.',
      'Desbloquea la barra y bájala hacia el esternón inferior.',
      'Empuja la carga guiada hacia arriba extendiendo los brazos por completo.'
    ]
  },
  {
    id: 'ch-low-12',
    name: 'Fondos Asistidos / En Máquina con Lastre (Machine / Weighted Chest Dips)',
    muscleGroupId: 'chest',
    subzoneId: 'chest-lower',
    equipment: 'machines',
    instructions: [
      'Si usas máquina asistida, coloca las rodillas en la plataforma; si es con lastre, usa un cinturón de carga.',
      'Agarra las barras paralelas, inclina el torso hacia adelante a 45° y abre ligeramente los codos.',
      'Baja hasta que los codos queden en un ángulo de 90° o un poco más profundo.',
      'Empuja el peso regresando al bloqueo superior sin perder la inclinación anterior del torso.'
    ]
  },

  // --- HOMBROS: DELTOIDES ANTERIOR ---
  {
    id: 'sho-ant-1',
    name: 'Press Militar / Press de Hombros con Mancuernas (Dumbbell Overhead Press)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco con el respaldo vertical (o ligeramente inclinado a 80°-85°) y apoya los pies firmemente en el suelo.',
      'Sostén las mancuernas a la altura de las clavículas/orejas con las palmas mirando hacia adelante (agarre prono) o inclinadas a 45°.',
      'Empuja las mancuernas verticalmente hacia el techo sobre la cabeza hasta extender los brazos casi por completo, sin chocar las pesas arriba.',
      'Desciende con ritmo controlado hasta que las mancuernas bajen al nivel de las orejas/mentón.'
    ]
  },
  {
    id: 'sho-ant-2',
    name: 'Press Arnold con Mancuernas (Arnold Press)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en posición erguida sosteniendo las mancuernas frente a la altura del pecho con las palmas mirando hacia ti (agarre supino).',
      'Conforme inicias el empuje hacia arriba, rota progresivamente las muñecas hacia afuera.',
      'Termina el movimiento por encima de la cabeza con las palmas mirando hacia adelante (agarre prono).',
      'Invierte el giro y la trayectoria de bajada hasta regresar las mancuernas frente a la cara.'
    ]
  },
  {
    id: 'sho-ant-3',
    name: 'Elevaciones Frontales Alternas / Simultáneas con Mancuernas (Front Raises)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con la espalda erguida y sostiene una mancuerna sobre cada muslo con las palmas mirando hacia tu cuerpo (agarre prono).',
      'Manteniendo una ligera flexión fija en los codos, eleva una mancuerna hacia adelante hasta la altura de los ojos.',
      'Haz una breve pausa de 1 segundo sintiendo la tensión en la cara frontal del hombro.',
      'Baja la mancuerna de forma lenta y repite con el otro brazo (o de forma simultánea).'
    ]
  },
  {
    id: 'sho-ant-4',
    name: 'Elevación Frontal en Agarre Neutro o con Mancuerna Vertical',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'dumbbells',
    instructions: [
      'Toma una sola mancuerna pesada de forma vertical con ambas manos (abrazando el disco superior o por la barra) o dos mancuernas con palmas mirándose (agarre neutro).',
      'Inicia con el peso descansando frente a la cadera.',
      'Sube la carga en línea recta frente al rostro hasta superar la línea de la vista.',
      'Controla la bajada frenando el peso durante la fase negativa.'
    ]
  },
  {
    id: 'sho-ant-5',
    name: 'Press Militar de Pie con Banda de Resistencia',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de la banda elástica con ambos pies a la anchura de las caderas.',
      'Sostén las empuñaduras a la altura de los hombros con las palmas mirando hacia el frente.',
      'Mantén el abdomen contraído y empuja las manos verticalmente hacia arriba hasta la extensión completa de codos.',
      'Baja despacio controlando la tracción hacia abajo de la liga.'
    ]
  },
  {
    id: 'sho-ant-6',
    name: 'Elevación Frontal con Banda de Resistencia',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'bands',
    instructions: [
      'Pisa un extremo o el centro de la banda de resistencia con un pie o ambos.',
      'Toma los extremos con las palmas mirando hacia abajo (agarre prono).',
      'Con la espalda recta, eleva los brazos frente al cuerpo hasta alcanzar la altura de la cabeza.',
      'Desciende suavemente manteniendo la liga tensa en todo el recorrido.'
    ]
  },
  {
    id: 'sho-ant-7',
    name: 'Flexiones en Pica (Pike Push-ups)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'bodyweight',
    instructions: [
      'Adopta una posición de pirámide o "V" invertida apoyando las palmas en el suelo y caminando con los pies hacia adelante con la cadera elevada.',
      'Mira hacia tus pies para mantener la alineación cervical.',
      'Flexiona los codos dirigiendo la coronilla en diagonal hacia el suelo por delante de las manos.',
      'Empuja el suelo con fuerza extendiendo los brazos y elevando la cadera a la posición inicial.'
    ]
  },
  {
    id: 'sho-ant-8',
    name: 'Flexiones Pica Elevadas / Flexiones Verticales en Pared (Elevated Pike Push-ups)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'bodyweight',
    instructions: [
      'Coloca las puntas de los pies sobre una superficie elevada (banco, silla o apoyo en pared) y las manos en el suelo en ángulo de 90° respecto a la cadera.',
      'Desciende la cabeza hacia el suelo doblando los codos.',
      'Empuja con fuerza contra el suelo alineando la cabeza con los hombros al subir.'
    ]
  },
  {
    id: 'sho-ant-9',
    name: 'Deslizamiento Frontal en Plancha (Plank Front Reach)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de tabla/plancha alta con los brazos extendidos.',
      'Eleva un brazo estirado completamente hacia adelante alineándolo con la oreja, sosteniendo la contracción 2 segundos.',
      'Alterna el brazo de trabajo manteniendo la pelvis estable sin balancear el torso.'
    ]
  },
  {
    id: 'sho-ant-10',
    name: 'Press Militar con Barra de Pie / Sentado (Barbell Overhead Press / OHP)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'machines',
    instructions: [
      'De pie (o sentado en banco), sostiene la barra a la altura de la parte superior del pecho/clavículas con un agarre en pronación ligeramente más ancho que los hombros.',
      'Mantén los glúteos y el abdomen activos para proteger la zona lumbar.',
      'Empuja la barra en línea recta hacia arriba metiendo levemente la cabeza hacia adelante una vez que la barra supera la cara.',
      'Baja la barra con ritmo controlado hacia las clavículas.'
    ]
  },
  {
    id: 'sho-ant-11',
    name: 'Elevación Frontal en Polea Baja con Cuerda o Barra',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'machines',
    instructions: [
      'Engancha una cuerda o barra corta recta en la polea baja.',
      'Colócate de espaldas a la máquina dejando pasar el cable o cuerda por entre las piernas.',
      'Agarra los extremos con las palmas mirándose o hacia abajo y eleva los brazos hacia adelante hasta la altura de los ojos.',
      'Pausa 1 segundo arriba y regresa despacio controlando el tirón constante del cable.'
    ]
  },
  {
    id: 'sho-ant-12',
    name: 'Press de Hombros en Máquina Guiada (Shoulder Press Machine)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-anterior',
    equipment: 'machines',
    instructions: [
      'Ajusta la altura del asiento para que las empuñaduras queden alineadas a la altura de los hombros/orejas.',
      'Apoya la espalda firmemente contra el respaldo.',
      'Empuja las asas hacia arriba hasta extender los brazos.',
      'Regresa suavemente evitando que las placas de peso se golpeen al bajar.'
    ]
  },

  // --- HOMBROS: DELTOIDES LATERAL ---
  {
    id: 'sho-lat-1',
    name: 'Elevaciones Laterales Tradicionales con Mancuernas (Dumbbell Lateral Raises)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con la espalda erguida, los pies a la anchura de las caderas y sostiene una mancuerna en cada mano a los lados de los muslos.',
      'Inclina el torso levemente hacia adelante (unos 5°-10°) y mantén una ligera flexión fija en los codos (15° a 30°).',
      'Eleva los brazos hacia los lados en un ángulo diagonal levemente adelantado (en el plano de la escápula, a unos 30° respecto al cuerpo) hasta llegar a la altura de los hombros.',
      'Pausa 1 segundo en la parte superior dirigiendo los meñiques ligeramente hacia arriba e inicia un descenso lento y controlado.'
    ]
  },
  {
    id: 'sho-lat-2',
    name: 'Elevaciones Laterales Inclinadas de Lado en Banco (Incline Side Lateral Raise)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate de lado sobre un banco inclinado a 45°-60°, apoyando el torso lateralmente.',
      'Toma una mancuerna con el brazo libre dejando caer el peso hacia el suelo.',
      'Eleva la mancuerna de forma lateral hasta la altura del hombro.',
      'Este ángulo elimina la inercia e incrementa la tensión en la parte inicial del recorrido.'
    ]
  },
  {
    id: 'sho-lat-3',
    name: 'Press Arnold / Press con Enfoque en Abducción Lateral',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en un banco erguido sosteniendo las mancuernas a la altura del hombro.',
      'Al empujar hacia arriba, abre los codos hacia afuera en un arco amplio.',
      'Este recorrido involucra intensamente la porción medial en la primera mitad del empuje antes del bloqueo superior.'
    ]
  },
  {
    id: 'sho-lat-4',
    name: 'Remo al Mentón con Agarre Ancho con Mancuernas (Wide-Grip Dumbbell High Pull)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'dumbbells',
    instructions: [
      'De pie, sostiene dos mancuernas frente a tus muslos con agarre prono y las manos separadas (más ancho que los hombros).',
      'Eleva las mancuernas guiando el movimiento con los codos hacia arriba y afuera hasta la altura del pecho.',
      'Mantén las manos más bajas que los codos en todo momento para concentrar la carga en el deltoides lateral.',
      'Baja con ritmo controlado.'
    ]
  },
  {
    id: 'sho-lat-5',
    name: 'Elevaciones Laterales de Pie con Banda de Resistencia',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de la banda elástica con uno o ambos pies.',
      'Toma las empuñaduras cruzando las ligas (la banda del pie izquierdo en la mano derecha y viceversa) para generar tensión desde el inicio.',
      'Eleva los brazos lateralmente hasta alcanzar la línea horizontal de los hombros.',
      'Regresa suavemente conteniendo la fuerza elástica de la liga.'
    ]
  },
  {
    id: 'sho-lat-6',
    name: 'Elevación Lateral Unilateral con Banda Anclada Abajo',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'bands',
    instructions: [
      'Ancla la banda cerca del suelo a un costado de ti.',
      'Sujeta el extremo con la mano más alejada cruzando la liga por delante de tu cuerpo.',
      'Eleva el brazo hacia el lado en arco hasta el nivel del hombro.',
      'Desciende despacio manteniendo la tensión continua de la banda.'
    ]
  },
  {
    id: 'sho-lat-7',
    name: 'Plancha Lateral con Elevación de Brazo (Side Plank with Shoulder Abduction)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'bodyweight',
    instructions: [
      'Adopta una posición de plancha lateral apoyando el antebrazo en el suelo y el cuerpo en línea recta.',
      'Eleva el brazo libre extendido hacia el techo y sostén la contracción isométrica.',
      'Realiza pequeños pulsos hacia arriba o mantén la posición sosteniendo el peso del brazo contra la gravedad.'
    ]
  },
  {
    id: 'sho-lat-8',
    name: 'Flexiones en Pica Abiertas con Enfoque Lateral (Wide Pike Push-ups)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de pirámide ("V" invertida) abriendo las manos bastante más que el ancho de los hombros.',
      'Desciende dirigiendo los codos marcadamente hacia afuera.',
      'Empuja el suelo manteniendo la tensión en la zona lateral del hombro.'
    ]
  },
  {
    id: 'sho-lat-9',
    name: 'Isometría de Abducción contra Pared (Wall Lateral Iso-Hold)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'bodyweight',
    instructions: [
      'Parado de lado a una pared (a la distancia de tu brazo), apoya el dorso de la mano o el antebrazo contra la superficie.',
      'Presiona con máxima fuerza lateralmente hacia la pared como si intentaras atravesarla con el brazo.',
      'Mantén la tensión isométrica durante 15 a 30 segundos.'
    ]
  },
  {
    id: 'sho-lat-10',
    name: 'Elevaciones Laterales en Polea Baja por Detrás / Delante del Cuerpo (Cable Lateral Raise)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'machines',
    instructions: [
      'Engancha un agarre individual en la polea baja.',
      'Colócate de lado a la máquina y sostiene el agarre con la mano del lado opuesto, pasando el cable por detrás (o por delante) del cuerpo.',
      'Eleva la mano hacia un lado en arco hasta la altura del hombro.',
      'La polea proporciona resistencia constante incluso en la parte baja del movimiento, donde las mancuernas pierden tensión.'
    ]
  },
  {
    id: 'sho-lat-11',
    name: 'Elevación Lateral Unilateral Apoyado / Inclinado en Polea (Leaning Cable Lateral Raise)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'machines',
    instructions: [
      'Colócate al lado de la estructura de la polea, sujeta la columna con la mano interna e inclina el torso hacia afuera unos 30°.',
      'Toma el cable con la mano externa y elévalo lateralmente en horizontal.',
      'Este ángulo altera la curva de fuerza y maximiza el aislamiento en el punto de mayor elongación.'
    ]
  },
  {
    id: 'sho-lat-12',
    name: 'Elevaciones Laterales en Máquina Especifica de Hombros (Lateral Raise Machine)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'machines',
    instructions: [
      'Ajusta la altura del asiento para que las articulaciones del hombro queden alineadas con el eje de giro de la máquina.',
      'Apoya los antebrazos sobre los cojines y sostiene las empuñaduras.',
      'Eleva los codos hacia los lados hasta alinearlos con los hombros.',
      'Regresa lentamente reteniendo las placas de peso.'
    ]
  },
  {
    id: 'sho-lat-13',
    name: 'Remo al Mentón con Barra EZ / Recta (Agarre Ancho) (Wide-Grip Upright Row)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-lateral',
    equipment: 'machines',
    instructions: [
      'Sostén una barra con las manos bien separadas (casi al doble del ancho de hombros).',
      'Tira de la barra hacia arriba pegada al torso, elevando los codos hacia afuera hasta que queden a la altura de los hombros.',
      'Baja de forma pausada hasta extender los brazos.'
    ]
  },

  // --- HOMBROS: DELTOIDES POSTERIOR ---
  {
    id: 'sho-post-1',
    name: 'Pájaros con Mancuernas de Pie o Sentado (Bent-Over Rear Delt Flyes)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'dumbbells',
    instructions: [
      'Inclina el torso hacia adelante doblándolo desde la cadera hasta que quede casi paralelo al suelo (de pie o sentado en el borde de un banco).',
      'Sostén una mancuerna en cada mano colgando bajo el pecho con las palmas mirándose (agarre neutro) o hacia atrás (agarre prono) y los codos levemente flexionados.',
      'Eleva los brazos hacia los lados ("abriendo las alas") enfocándote en empujar hacia afuera y no hacia atrás, deteniendo el movimiento cuando los codos lleguen a la altura de los hombros.',
      'Pausa 1 segundo arriba evitando juntar las escápulas con exceso para no desviar el trabajo a los trapecios/romboides, y baja despacio.'
    ]
  },
  {
    id: 'sho-post-2',
    name: 'Pájaros apoyado en Banco Inclinado (Incline Bench Rear Delt Flyes)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'dumbbells',
    instructions: [
      'Coloca un banco inclinado a 30°-45° y apoya el pecho contra el respaldo dejando colgar los brazos.',
      'Sujeta las mancuernas con los codos ligeramente flexionados.',
      'Abre los brazos hacia los lados en arco hasta que los codos alineen con la espalda posterior.',
      'Esta variante elimina por completo el balanceo corporal e aísla la porción trasera del deltoides.'
    ]
  },
  {
    id: 'sho-post-3',
    name: 'Remo para Deltoides Posterior con Agarre Abierto y Codos a 90° (Rear Delt Row)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'dumbbells',
    instructions: [
      'Colócate inclinado a 45° o apóyate sobre un banco inclinado sosteniendo las mancuernas con agarre prono.',
      'Tira de los codos hacia arriba y afuera en un ángulo de 90° respecto al torso (diferente al remo tradicional donde los codos van pegados a las costillas).',
      'Mantén las manos alineadas por debajo de los codos durante el ascenso.',
      'Desciende con ritmo controlado.'
    ]
  },
  {
    id: 'sho-post-4',
    name: 'Face Pull con Banda de Resistencia',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a un punto fijo a la altura de la cara o frente.',
      'Toma las puntas o la liga con agarre neutro o prono y da un par de pasos atrás.',
      'Tira de la banda llevando las manos directamente hacia la cara (hacia la nariz/ojos) abriendo los codos hacia afuera y haciendo una rotación externa al final del recorrido.',
      'Sostén la contracción 1-2 segundos arriba y regresa despacio.'
    ]
  },
  {
    id: 'sho-post-5',
    name: 'Cruce Inverso con Banda de Pie (Band Reverse Flyes / Band Pull-Apart)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'bands',
    instructions: [
      'Toma una banda de resistencia con ambas manos frente a ti a la altura de los hombros y brazos extendidos.',
      'Separa las manos abriendo los brazos en abducción horizontal hasta que la liga toque tu pecho.',
      'Piensa en abrir hacia los lados en lugar de tirar hacia atrás para concentrar la tensión en la parte posterior del hombro.',
      'Vuelve de forma pausada resistiendo la fuerza elástica.'
    ]
  },
  {
    id: 'sho-post-6',
    name: 'Face Pull en TRX / Anillas / Peso Corporal (Calisthenic Face Pull)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'bodyweight',
    instructions: [
      'Toma las anillas o correas de suspensión (TRX) con agarre prono o neutro e inclina el cuerpo hacia atrás apoyado en los talones.',
      'Flexiona los codos tirando del cuerpo hacia arriba dirigiendo las manos hacia la cara mientras abres los codos a 90°.',
      'Al llegar a la parte alta, rota externamente los hombros mostrando las palmas hacia el frente.',
      'Baja suavemente manteniendo el cuerpo rígido en tabla.'
    ]
  },
  {
    id: 'sho-post-7',
    name: 'Remo Invertido Abierto Corporal (Australian Pull-up Wide Grip)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'bodyweight',
    instructions: [
      'Colócate debajo de una barra baja ajustada a la altura de la cadera.',
      'Toma la barra con agarre prono bien abierto (bastante más ancho que tus hombros).',
      'Tira del pecho hacia la barra dirigiendo los codos abiertos hacia los lados.',
      'Desciende de forma rítmica sin dejar caer la cadera.'
    ]
  },
  {
    id: 'sho-post-8',
    name: 'Isometría Posterior en Suelo / Codos de Hierro (Floor Rear Delt Drive)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'bodyweight',
    instructions: [
      'Acuéstate boca arriba en el suelo con las rodillas dobladas y los brazos flexionados a 90° apoyando los codos contra el piso.',
      'Presiona fuertemente los codos contra el suelo para despegar la parte alta de la espalda del piso unos centímetros.',
      'Sostén la posición isométrica durante 3 a 5 segundos activando la cadena posterior del hombro y regresa despacio.'
    ]
  },
  {
    id: 'sho-post-9',
    name: 'Deltoides Posterior en Poleas Cruzadas (Cable Reverse Flyes)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'machines',
    instructions: [
      'Ponte en el centro de un cruce de poleas ajustadas a la altura de la cara o parte alta (sin accesorios o con empuñaduras simples).',
      'Toma la polea izquierda con la mano derecha y la polea derecha con la mano izquierda (cruzando los cables frente a ti).',
      'Abre los brazos hacia los lados en horizontal sin doblar excesivamente los codos.',
      'Mantén la tensión constante en el deltoides posterior durante todo el rango y regresa dejando que los cables se crucen nuevamente.'
    ]
  },
  {
    id: 'sho-post-10',
    name: 'Aperturas Invertidas en Máquina Pec Deck (Reverse Pec Deck)',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'machines',
    instructions: [
      'Siéntate de frente al respaldo de la máquina Pec Deck y ajusta la altura de los agarres a la altura de tus hombros.',
      'Toma las empuñaduras verticales o separadas con agarre neutro o prono.',
      'Mueve los brazos hacia atrás en arco enfocándote en abrir hacia los lados hasta alinear los brazos con la espalda.',
      'Regresa despacio evitando que las placas de peso choque abajo.'
    ]
  },
  {
    id: 'sho-post-11',
    name: 'Face Pull en Polea Alta con Cuerda',
    muscleGroupId: 'shoulders',
    subzoneId: 'deltoid-posterior',
    equipment: 'machines',
    instructions: [
      'Engancha una cuerda en el punto más alto de una máquina de poleas.',
      'Toma los extremos de la cuerda con los pulgares apuntando hacia atrás e inclina levemente el torso hacia atrás.',
      'Tira de la cuerda hacia los ojos/frente abriendo las puntas de la cuerda al final y llevando los codos bien atrás.',
      'Pausa 1 segundo en la máxima contracción y desciende controlando el peso.'
    ]
  },

  // --- ESPALDA: DORSAL ANCHO ---
  {
    id: 'lat-1',
    name: 'Remo Unilateral con Mancuerna Apoyado en Banco (Single-Arm Dumbbell Row)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'dumbbells',
    instructions: [
      'Apoya la rodilla y la mano izquierda sobre un banco plano, manteniendo la espalda paralela al suelo.',
      'Sostén una mancuerna con la mano derecha dejando colgar el brazo extendedido hacia el suelo.',
      'Tira de la mancuerna llevando el codo hacia atrás y hacia la cadera (no hacia el pecho) manteniendo el brazo cerca del torso.',
      'Pausa 1 segundo sintiendo la contracción en el lateral bajo de la espalda y baja suavemente estirando el dorsal.'
    ]
  },
  {
    id: 'lat-2',
    name: 'Remo con Mancuernas a Dos Manos Inclinado (Bent-Over Double Dumbbell Row)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'dumbbells',
    instructions: [
      'Inclina el torso a 45° con las rodillas semi-flexionadas y sostiene una mancuerna en cada mano.',
      'Inicia con agarre neutro o prono y tira de las mancuernas llevando los codos hacia las caderas.',
      'Aprieta la zona media-baja de la espalda arriba y regresa estirando los brazos abajo.'
    ]
  },
  {
    id: 'lat-3',
    name: 'Pullover con Mancuerna en Banco Plano (Dumbbell Lat Pullover)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate a lo largo de un banco plano (o perpendicular apoyando la parte alta de la espalda) sosteniendo una mancuerna con ambas manos en forma de diamante sobre el pecho.',
      'Con los codos con una ligera flexión fija, lleva la mancuerna hacia atrás por encima de la cabeza hasta sentir el estiramiento profundo del dorsal ancho.',
      'Tira de la mancuerna mediante la fuerza de la espalda para regresar a la posición sobre el pecho.'
    ]
  },
  {
    id: 'lat-4',
    name: 'Jalón Vertical al Pecho con Banda de Resistencia (Band Lat Pulldown)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'bands',
    instructions: [
      'Ancla la banda en un punto alto (marco de puerta superior o estructura).',
      'Arrodíllate o siéntate mirando hacia el anclaje sosteniendo los extremos con las palmas mirando hacia adelante.',
      'Tira de la banda hacia abajo llevando los codos hacia las costillas y el pecho ligeramente erguido hacia arriba.',
      'Pausa 1 segundo en la parte baja y regresa de forma pausada hasta estirar los brazos arriba.'
    ]
  },
  {
    id: 'lat-5',
    name: 'Remo Horizontal con Banda de Resistencia (Band Seated Row)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'bands',
    instructions: [
      'Siéntate en el suelo con las piernas extendidas y pasa la banda por la planta de los pies.',
      'Toma las empuñaduras con agarre neutro manteniéndote erguido.',
      'Tira de la banda llevando los codos pegados al cuerpo hacia la cadera.',
      'Regresa suavemente resistiendo la tensión elástica.'
    ]
  },
  {
    id: 'lat-6',
    name: 'Dominadas Pronas (Overhand Pull-ups) — Máxima Amplitud',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de una barra fija con las palmas mirando hacia adelante (agarre prono) a una distancia un poco más ancha que los hombros.',
      'Deprime las escápulas (baja los hombros alejándolos de las orejas) y flexiona los codos tirando del cuerpo hacia arriba dirigiendo el pecho hacia la barra.',
      'Sube hasta pasar la barbilla por encima de la barra.',
      'Desciende lentamente hasta la extensión completa de codos sin perder la tensión escapular.'
    ]
  },
  {
    id: 'lat-7',
    name: 'Dominadas Supinas / Neutras (Chin-ups / Neutral Grip Pull-ups)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'bodyweight',
    instructions: [
      'Agárrate a la barra con agarre en supinación (palmas mirando hacia ti) o en barras paralelas (agarre neutro).',
      'Tira de tu cuerpo hacia arriba enfocando el esfuerzo en llevar los codos hacia abajo y atrás.',
      'Esta variante activa fuertemente la cara inferior del dorsal y asiste con los flexores del brazo.'
    ]
  },
  {
    id: 'lat-8',
    name: 'Remo Invertido Corporal (Australian Pull-ups)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'bodyweight',
    instructions: [
      'Colócate debajo de una barra fija ajustada a la altura de la cintura o cadera.',
      'Agarra la barra con las manos a la anchura de los hombros, extiende las piernas apoyando solo los talones (manteniendo el cuerpo en tabla rígida).',
      'Tira del cuerpo hacia arriba llevando la parte baja del pecho a tocar la barra.',
      'Baja con ritmo controlled.'
    ]
  },
  {
    id: 'lat-9',
    name: 'Jalón al Pecho con Agarre Ancho en Polea Alta (Lat Pulldown)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de jalón ajustando el rodillo sobre los muslos.',
      'Toma la barra con agarre en pronación bastante más ancho que tus hombros.',
      'Saca el pecho, inclina ligeramente el torso hacia atrás (10°-15°) y tira de la barra hacia la parte superior del pecho dirigiendo los codos hacia las caderas.',
      'Controla el ascenso de la barra estirando completamente los dorsales en la parte alta.'
    ]
  },
  {
    id: 'lat-10',
    name: 'Remo Gironda / Remo Horizontal en Polea Baja (Seated Cable Row)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de remo con polea baja y apoya los pies en las plataformas.',
      'Toma el agarre estrecho en "V" (o barra recta agarre medio).',
      'Mantén la espalda recta y saca pecho mientras tiras del agarre hacia el abdomen/ombligo.',
      'Aprieta la espalda 1 segundo al final del recorrido y regresa suavemente extendiendo los brazos.'
    ]
  },
  {
    id: 'lat-11',
    name: 'Remo con Barra en Pronación / Supinación (Barbell Bent-Over Row)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'machines',
    instructions: [
      'Sostén una barra con agarre prono o supino a la anchura de los hombros e inclina el torso a 45° manteniendo la espalda recta.',
      'Desciende la barra por delante de las rodillas.',
      'Tira de la barra llevándola hacia la zona baja del esternón o abdomen.',
      'Baja la barra de forma rítmica sin arquear la zona lumbar.'
    ]
  },
  {
    id: 'lat-12',
    name: 'Pullover con Cuerda / Barra Recta en Polea Alta (Straight-Arm Lat Pushdown)',
    muscleGroupId: 'back',
    subzoneId: 'lats',
    equipment: 'machines',
    instructions: [
      'Engancha una cuerda o barra recta corta en el punto más alto de la polea.',
      'Toma la barra con los brazos casi extendidos (ligera flexión en codos) e inclina el torso a 30°.',
      'Lleva la barra en un arco desde la altura de la cabeza hacia las caderas usando únicamente los dorsales.',
      'Regresa de forma pausada hasta la posición inicial sobre la cabeza.'
    ]
  },

  // --- ESPALDA: TRAPECIO Y ROMBOIDES ---
  {
    id: 'trap-1',
    name: 'Encogimientos de Hombros con Mancuernas (Dumbbell Shrugs)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con la espalda erguida y sostiene una mancuerna pesada a cada lado del cuerpo.',
      'Eleva los hombros en línea recta hacia las orejas sin doblar los codos ni girar los hombros.',
      'Aprieta el trapecio 1-2 segundos arriba e inicia un descenso lento hasta el estiramiento completo.'
    ]
  },
  {
    id: 'trap-2',
    name: 'Paseo del Granjero (Farmer\'s Walk)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'dumbbells',
    instructions: [
      'Sostén dos mancuernas muy pesadas a los lados con agarre firme.',
      'Camina con postura erguida, hombros retraídos y abdomen activo sosteniendo el peso de forma isométrica.'
    ]
  },
  {
    id: 'trap-3',
    name: 'Remo con Mancuernas Apoyado en Banco Inclinado (Seal Row)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate de pecho sobre un banco inclinado a 30°-45° dejando colgar las mancuernas.',
      'Tira de las mancuernas hacia el torso abriendo los codos a 45° y juntando las escápulas al final.',
      'Sostén la contracción en la zona media de la espalda y desciende lento.'
    ]
  },
  {
    id: 'trap-4',
    name: 'Elevaciones en "Y" con Mancuernas en Banco Inclinado (Incline Bench Y-Raises)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate de pecho en un banco inclinado a 30° con una mancuerna liviana en cada mano.',
      'Eleva los brazos extendidos hacia adelante formando una "Y" con el torso (con los pulgares apuntando hacia el techo).',
      'Pausa en la cima sintiendo la tensión en la zona media-baja del trapecio y desciende paulatinamente.'
    ]
  },
  {
    id: 'trap-5',
    name: 'Aperturas de Pecho / Jalón de Banda (Band Pull-Apart)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'bands',
    instructions: [
      'Sostén una banda elástica al frente a la altura del pecho con los brazos extendidos.',
      'Separa las manos abriendo los brazos en horizontal hasta que la liga toque el pecho, juntando las escápulas de forma potente al final.',
      'Regresa suavemente resistiendo la tensión elástica.'
    ]
  },
  {
    id: 'trap-6',
    name: 'Retracciones Escapulares en Dominada / Barra (Scapular Pull-ups)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de una barra de dominadas con los brazos extendidos sin doblar los codos.',
      'Tira de los hombros hacia abajo y atrás juntando las escápulas para elevar el cuerpo unos pocos centímetros.',
      'Pausa 1-2 segundos arriba y desciende suavemente al colgado pasivo.'
    ]
  },
  {
    id: 'trap-7',
    name: 'Encogimientos de Hombros con Barra (Barbell Shrugs)',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'machines',
    instructions: [
      'Sostén una barra pesada por delante de los muslos (o por detrás de los glúteos) con agarre a la anchura de los hombros.',
      'Eleva los hombros verticalmente hacia las orejas de forma explosiva pero controlada.',
      'Baja suavemente hasta extender por completo los trapecios.'
    ]
  },
  {
    id: 'trap-8',
    name: 'Remo T (T-Bar Row) con Agarre Ancho',
    muscleGroupId: 'back',
    subzoneId: 'rhomboids-traps',
    equipment: 'machines',
    instructions: [
      'Utiliza la máquina de remo en T o una barra apoyada en la esquina.',
      'Sujeta las asas anchas e inclina el torso.',
      'Tira de la carga hacia la parte superior del abdomen/pecho apretando los romboides al máximo.'
    ]
  },

  // --- ABDOMEN: SUPERIOR ---
  {
    id: 'abs-up-1',
    name: 'Crunch con Mancuerna sobre el Pecho / Arms Extended',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate boca arriba sobre una colchoneta con las rodillas flexionadas y las plantas de los pies apoyadas firmemente en el suelo.',
      'Sostén una mancuerna pegada al centro del pecho (o extendida verticalmente con ambos brazos apuntando hacia el techo).',
      'Inhala y, al exhalar, despega los hombros y las escápulas del suelo doblando el torso hacia las rodillas, asegurándote de no despegar la zona lumbar del piso.',
      'Pausa 1 segundo en la cima sintiendo la contracción en la parte alta del abdomen y desciende de forma pausada.'
    ]
  },
  {
    id: 'abs-up-2',
    name: 'Crunch Inclinado con Mancuerna (Incline Bench Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'dumbbells',
    instructions: [
      'Colócate en un banco declinado asegurando las piernas en los rodillos de apoyo.',
      'Sostén una mancuerna liviana contra tu pecho.',
      'Desciende el torso lentamente hacia atrás hasta quedar alineado con el banco.',
      'Sube flexionando la columna hacia adelante mediante la fuerza del abdomen superior.'
    ]
  },
  {
    id: 'abs-up-3',
    name: 'Crunch Arrodillado con Banda (Band Kneeling Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'bands',
    instructions: [
      'Ancla una banda de resistencia en un punto alto (soporte de puerta o barra) y arrodíllate de frente o de espaldas al anclaje.',
      'Toma las puntas de la liga con ambas manos a los lados de la cabeza o cuello.',
      'Flexiona la columna hacia adelante llevando los codos en dirección a las rodillas venciendo la fuerza elástica.',
      'Regresa suavemente extendiendo el tronco sin perder la tensión de la banda.'
    ]
  },
  {
    id: 'abs-up-4',
    name: 'Crunch Tradicional en Suelo (Standard Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'bodyweight',
    instructions: [
      'Acuéstate boca arriba con las rodillas flexionadas a 90° y los pies apoyados en el suelo.',
      'Coloca las yemas de los dedos detrás de las orejas (sin tirar de la nuca) o cruza los brazos sobre el pecho.',
      'Con la zona lumbar pegada al piso, eleva los hombros y la parte alta de la espalda aproximando las costillas hacia la pelvis.',
      'Inhala mientras bajas suavemente la espalda al suelo.'
    ]
  },
  {
    id: 'abs-up-5',
    name: 'Crunch en Mariposa (Butterfly Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba, junta las plantas de los pies y abre las rodillas hacia los lados en posición de diamante.',
      'Extiende los brazos por detrás de la cabeza.',
      'Flexiona el abdomen elevando el torso hasta tocar los pies o el suelo al frente con las manos.',
      'Desciende con ritmo controlado.'
    ]
  },
  {
    id: 'abs-up-6',
    name: 'Crunch en Polea Alta con Cuerda (Cable Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-upper',
    equipment: 'machines',
    instructions: [
      'Arrodíllate frente a una polea alta cargada con el accesorio de cuerda.',
      'Sostén las puntas de la cuerda a los lados de la cara o mandíbula.',
      'Mantén la cadera y los glúteos fijos sobre los talones y encorva la columna hacia abajo llevando los codos hacia los muslos.',
      'Sostén la contracción 1 segundo abajo y regresa extendiendo la espalda hasta la posición inicial.'
    ]
  },

  // --- ABDOMEN: OBLICUOS ---
  {
    id: 'obl-1',
    name: 'Crunch Ruso con Mancuerna (Russian Twist)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en el suelo con las rodillas flexionadas y los talones ligeramente elevados (o apoyados para mayor estabilidad).',
      'Inclina el torso hacia atrás a 45° sosteniendo una mancuerna con ambas manos cerca del pecho.',
      'Gira el torso de forma controlada de izquierda a derecha, llevando la mancuerna hacia el piso al lado de cada cadera.',
      'Mantén la mirada siguiendo el movimiento del peso para asegurar la rotación completa del tronco.'
    ]
  },
  {
    id: 'obl-2',
    name: 'Flexión Lateral de Tronco con Mancuerna (Dumbbell Side Bend)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con la postura erguida, sosteniendo una mancuerna en la mano derecha a un costado del muslo y la mano izquierda tras la cabeza o en la cintura.',
      'Deja caer suavemente el torso hacia el lado derecho doblando únicamente la cintura.',
      'Usa la fuerza del oblicuo izquierdo (el lado opuesto) para contraer y regresar el torso a la posición vertical.',
      'Completa las repeticiones de un lado antes de cambiar la mancuerna de mano.'
    ]
  },
  {
    id: 'obl-3',
    name: 'Press Pallof con Banda (Pallof Press — Anti-Rotación)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a la altura del pecho y colócate de lado al punto de anclaje.',
      'Toma la empuñadura con ambas manos frente al esternón y da un paso al frente/lado para generar tensión.',
      'Extiende los brazos en línea recta hacia adelante resistiendo la fuerza de la liga que intenta girar tu torso.',
      'Pausa 2 segundos con los brazos extendidos y regresa de forma pausada las manos al pecho.'
    ]
  },
  {
    id: 'obl-4',
    name: 'Crunch Bicicleta (Bicycle Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba sobre una colchoneta, coloca las manos detrás de la nuca y eleva las piernas a 90°.',
      'Despega los hombros del suelo y lleva el codo derecho hacia la rodilla izquierda mientras extiendes la pierna derecha hacia adelante.',
      'Alterna de lado de forma fluida mediante una rotación del torso, manteniendo la zona lumbar pegada al piso.'
    ]
  },
  {
    id: 'obl-5',
    name: 'Plancha Lateral con Elevación de Cadera (Side Plank Hip Dip)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'bodyweight',
    instructions: [
      'Apoya el antebrazo derecho en el suelo y coloca el cuerpo de lado en línea recta apoyado en el borde externo del pie.',
      'Desciende suavemente la cadera rozando el suelo.',
      'Empuja con fuerza el piso activando el oblicuo inferior para elevar la cadera por encima de la línea neutra.'
    ]
  },
  {
    id: 'obl-6',
    name: 'Corte de Madera en Polea (Cable Woodchopper)',
    muscleGroupId: 'abs',
    subzoneId: 'obliques',
    equipment: 'machines',
    instructions: [
      'Ajusta la polea en posición alta (o baja) y ponte de lado a la máquina de cables.',
      'Toma el agarre individual con ambas manos manteniendo los brazos extendidos.',
      'Rota el torso llevando el cable en diagonal hacia la cadera o hombro opuesto girando levemente el pie trasero.',
      'Regresa de manera lenta y controlada frenando el peso de las placas.'
    ]
  },

  // --- ABDOMEN: INFERIOR ---
  {
    id: 'abs-low-1',
    name: 'Elevación de Piernas con Mancuerna entre los Pies',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'dumbbells',
    instructions: [
      'Acuéstate boca arriba sobre una colchoneta y sostiene una mancuerna liviana aprisionada firmemente entre los pies o tobillos.',
      'Coloca las palmas de las manos debajo de los glúteos para dar soporte a la zona lumbar.',
      'Con las piernas casi extendidas, elévalas en arco hasta formar un ángulo de 90° con el torso, despegando ligeramente la pelvis del suelo al final del recorrido.',
      'Baja las piernas lentamente sin que la mancuerna toque el piso y evitando que la zona lumbar se arquee.'
    ]
  },
  {
    id: 'abs-low-2',
    name: 'Elevación de Piernas con Banda Anclada Abajo',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto bajo y sujeta las tobilleras o extremos a tus pies.',
      'Recuéstate boca arriba mirando en dirección opuesta al anclaje para generar tensión.',
      'Coloca las manos bajo los glúteos y eleva las piernas o rodillas hacia el pecho contra la resistencia elástica.',
      'Regresa suavemente frenando el tirón de la liga.'
    ]
  },
  {
    id: 'abs-low-3',
    name: 'Crunch Invertido en Suelo (Reverse Crunch)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'bodyweight',
    instructions: [
      'Acuéstate boca arriba con las manos apoyadas a los lados del cuerpo y las rodillas flexionadas en un ángulo de 90°.',
      'Inhala y, al exhalar, rueda la pelvis hacia arriba llevando las rodillas hacia el pecho y despegando la zona lumbar del suelo.',
      'Pausa 1 segundo en la cima sintiendo la contracción en la parte baja del abdomen.',
      'Baja suavemente la cadera hasta volver a apoyar la parte baja de la espalda.'
    ]
  },
  {
    id: 'abs-low-4',
    name: 'Tijeras Abdominales (Scissor Kicks)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba, despega la cabeza y hombros ligeramente del suelo y eleva ambas piernas unos 15 cm del piso.',
      'Cruza una pierna por encima de la otra de forma alterna mediante movimientos rápidos y fluidos en plano horizontal.',
      'Mantén la zona lumbar pegada al piso en todo momento.'
    ]
  },
  {
    id: 'abs-low-5',
    name: 'Elevación de Rodillas / Piernas Colgado en Barra (Hanging Leg Raise)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'bodyweight',
    instructions: [
      'Cuélgate de una barra de dominadas con un agarre prono a la anchura de los hombros y el cuerpo suspendido.',
      'Sin balancear el torso, flexiona las rodillas (o mantén las piernas rectas) y elévalas hacia el pecho rotando la pelvis hacia arriba al final del recorrido.',
      'Pausa 1 segundo en la parte alta comprimiendo la zona inferior del abdomen.',
      'Desciende las piernas de forma muy pausada evitando el impulso.'
    ]
  },
  {
    id: 'abs-low-6',
    name: 'Elevación de Piernas en Silla Romana / Capitán (Captain\'s Chair)',
    muscleGroupId: 'abs',
    subzoneId: 'abs-lower',
    equipment: 'machines',
    instructions: [
      'Apoya los antebrazos y la espalda firmemente sobre los cojines de la silla romana, sujetando las empuñaduras.',
      'Deja caer las piernas verticales.',
      'Eleva las rodillas hacia el pecho (o sube las piernas rectas en horizontal) enfocando el esfuerzo en enrollar la pelvis.',
      'Baja con ritmo controlado hasta extender las piernas.'
    ]
  },

  // --- TRANSVERSO / CORE PROFUNDO ---
  {
    id: 'trans-1',
    name: 'Plancha con Remolque / Paseo de Mancuerna en Plancha (Plank Drag)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'dumbbells',
    instructions: [
      'Colócate en posición de plancha alta (apoyado sobre las palmas de las manos) con una mancuerna apoyada en el suelo justo por detrás de tu muñeca derecha.',
      'Abre los pies a la anchura de las caderas para mantener la pelvis estable.',
      'Cruza la mano izquierda por debajo del pecho, toma la mancuerna y arrástrala hacia el lado izquierdo sin rotar las caderas ni balancear el torso.',
      'Repite el movimiento cruzando la mano derecha para devolver la mancuerna al lado original.'
    ]
  },
  {
    id: 'trans-2',
    name: 'Press Pallof Isométrico con Banda (Isometric Pallof Hold)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a la altura del pecho y colócate de lado al punto de anclaje.',
      'Toma la empuñadura con ambas manos frente al esternón y da un par de pasos laterales para generar tensión.',
      'Extiende los brazos completamente hacia adelante en línea recta y sostiene la posición sin moverte durante 15 a 30 segundos.',
      'Resiste la fuerza lateral de la liga comprimiendo toda la pared abdominal.'
    ]
  },
  {
    id: 'trans-3',
    name: 'Plancha Abdominal Tradicional (Isometric Plank)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'bodyweight',
    instructions: [
      'Colócate boca abajo apoyando los antebrazos y las puntas de los pies en el suelo, con los codos alineados justo debajo de los hombros.',
      'Eleva el cuerpo formando una línea recta continua desde la cabeza hasta los talones.',
      'Aprieta los glúteos y "empuja" el ombligo hacia adentro en dirección a la columna vertebral.',
      'Sostén la postura isométrica firmemente durante el tiempo establecido.'
    ]
  },
  {
    id: 'trans-4',
    name: 'Vacío Abdominal (Stomach Vacuum)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'bodyweight',
    instructions: [
      'Ponte de pie (o inclina el torso apoyando las manos sobre las rodillas) e inhala profundo.',
      'Exhala por la boca expulsando absolutamente todo el aire de tus pulmones.',
      'Sin volver a tomar aire, expande las costillas y "succiona" o mete el ombligo fuertemente hacia adentro y hacia arriba.',
      'Mantén esta succión isométrica durante 10 a 20 segundos y libera el aire suavemente.'
    ]
  },
  {
    id: 'trans-5',
    name: 'Bicho Muerto Tradicional (Deadbug)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba con los brazos extendidos verticalmente hacia el techo y las rodillas elevadas a 90°.',
      'Pega la zona lumbar firmemente contra la colchoneta eliminando cualquier hueco.',
      'Desciende simultáneamente el brazo derecho por detrás de la cabeza y extiende la pierna izquierda hacia adelante a pocos centímetros del piso.',
      'Regresa al centro y repite con el brazo izquierdo y la pierna derecha de forma pausada.'
    ]
  },
  {
    id: 'trans-6',
    name: 'Rueda Abdominal (Ab Wheel Rollout)',
    muscleGroupId: 'abs',
    subzoneId: 'transverse-abdominis',
    equipment: 'machines',
    instructions: [
      'Arrodíllate sobre una colchoneta y toma los agarres de la rueda abdominal colocándola en el suelo frente a ti.',
      'Mantén la espalda ligeramente curvada hacia arriba (retroversión pélvica) y el abdomen muy apretado.',
      'Haz rodar la rueda hacia adelante en línea recta descendiendo el torso de forma controlada hasta donde puedas mantener la estabilidad lumbar.',
      'Usa la fuerza del core profundo para tirar de la rueda de regreso a la posición inicial sobre las rodillas.'
    ]
  },

  // --- GLÚTEO MAYOR ---
  {
    id: 'gl-max-1',
    name: 'Hip Thrust Unilateral o Bilateral con Mancuerna',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'dumbbells',
    instructions: [
      'Apoya la parte media/alta de la espalda (borde inferior de las escápulas) contra un banco plano.',
      'Coloca una mancuerna pesada sobre la pelvis sostenida con las manos y apoya las plantas de los pies firmemente en el suelo a la anchura de los hombros (con rodillas a 90° al subir).',
      'Desciende la cadera hacia el suelo manteniendo la mirada fija hacia adelante (mentón pegado al pecho).',
      'Empuja el suelo con los talones y eleva la cadera hacia el techo hasta alinear el torso con los muslos, apretando los glúteos fuertemente durante 1 o 2 segundos arriba en retroversión pélvica.'
    ]
  },
  {
    id: 'gl-max-2',
    name: 'Sentadilla Búlgara enfocado en Glúteo (Glute-Focused Bulgarian Split Squat)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'dumbbells',
    instructions: [
      'Apoya el empeine del pie trasero sobre un banco y da un paso largo hacia adelante con el pie delantero.',
      'Sostén una o dos mancuernas e inclina el torso levemente hacia adelante a unos 30°-45° (manteniendo la columna neutra).',
      'Desciende llevando la cadera hacia atrás y abajo hasta que el muslo delantero quede paralelo al suelo y sientas un estiramiento profundo en el glúteo.',
      'Empuja el suelo con el talón delantero para subir.'
    ]
  },
  {
    id: 'gl-max-3',
    name: 'Peso Muerto Rumano con Mancuernas (Dumbbell Romanian Deadlift)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con las pies a la anchura de las caderas sosteniendo una mancuerna en cada mano frente a los muslos.',
      'Con una ligera flexión fija en las rodillas, empuja la cadera profundamente hacia atrás como si quisieras tocar una pared detrás de ti.',
      'Desciende las mancuernas pegadas a las piernas hasta justo por debajo de las rodillas (o hasta donde mantengas la espalda recta), sintiendo el estiramiento máximo en glúteos e isquiotibiales.',
      'Extiende la cadera hacia adelante para regresar a la posición erguida.'
    ]
  },
  {
    id: 'gl-max-4',
    name: 'Patada de Glúteo en Cuadrupedia con Banda (Band Kickback)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'bands',
    instructions: [
      'Colócate en posición de cuadrupedia (manos y rodillas apoyadas en el suelo) con una banda elástica rodeando las plantas de los pies o los muslos.',
      'Mantén el abdomen activo para no arquear la zona lumbar.',
      'Extiende una pierna hacia atrás y ligeramente hacia arriba empujando con el talón contra la resistencia de la liga.',
      'Aprieta el glúteo mayor en el punto de extensión completa y regresa de forma pausada.'
    ]
  },
  {
    id: 'gl-max-5',
    name: 'Puente de Glúteo Unilateral en Suelo (Single-Leg Glute Bridge)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba, dobla una rodilla apoyando el pie en el suelo y eleva la otra pierna extendida.',
      'Empuja el piso con el talón apoyado para elevar la cadera hacia el techo.',
      'Aprieta el glúteo del lado activo arriba y desciende sin llegar a tocar el suelo con la cadera.'
    ]
  },
  {
    id: 'gl-max-6',
    name: 'Hip Thrust con Barra (Barbell Hip Thrust)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'machines',
    instructions: [
      'Colócate de espaldas a un banco apoyando la parte inferior de los escápulas, con una barra cargada y acolchada ubicada sobre la pliegue de la cadera.',
      'Coloca los pies a la anchura de los hombros con las espinillas completamente verticales en la cima del movimiento.',
      'Desciende la cadera controladamente manteniendo la mirada al frente.',
      'Empuja los talones de forma explosiva hasta extender la cadera por completo, bloqueando 1 segundo en la cima.'
    ]
  },
  {
    id: 'gl-max-7',
    name: 'Patada de Glúteo en Polea Baja (Cable Glute Kickback)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-maximus',
    equipment: 'machines',
    instructions: [
      'Ajusta una tobillera en la polea baja y conéctala a tu tobillo.',
      'Colócate de frente a la máquina, tómate de la estructura e inclina levemente el torso hacia adelante.',
      'Extiende la pierna hacia atrás en diagonal impulsando con el talón sin hiperextender la zona lumbar.',
      'Mantén la contracción 1 segundo atrás y regresa despacio.'
    ]
  },

  // --- GLÚTEO MEDIO ---
  {
    id: 'gl-med-1',
    name: 'Abducción de Cadera de Lado en Banco Inclinado con Mancuerna',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate de lado sobre un banco inclinado a 30° o 45°, apoyando el torso lateralmente.',
      'Coloca una mancuerna sobre la cara externa del muslo de la pierna superior sosteniéndola con la mano.',
      'Eleva la pierna recta hacia el techo en diagonal levemente atrasada manteniendo la punta del pie apuntando hacia el frente (no hacia arriba).',
      'Pausa 1 segundo en la cima sintiendo la contracción directa en el lateral de la cadera y desciende despacio.'
    ]
  },
  {
    id: 'gl-med-2',
    name: 'Peso Muerto Rumano Unilateral con Mancuerna (Single-Leg Dumbbell RDL)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie apoyado sobre la pierna derecha y sostiene una mancuerna con la mano izquierda.',
      'Realiza una bisagra de cadera llevando la pierna izquierda extendida hacia atrás mientras desciendes el torso hacia el suelo.',
      'Mantén la pelvis totalmente nivelada (sin dejar que la cadera izquierda se abra hacia arriba), obligando al glúteo medio a trabajar bajo estiramiento para estabilizar.',
      'Empuja el suelo con el pie apoyado para regresar a la posición erguida.'
    ]
  },
  {
    id: 'gl-med-3',
    name: 'Pasos Laterales con Banda en Tobillos / Rodillas (Band Monster Walk)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'bands',
    instructions: [
      'Coloca una banda elástica circular alrededor de los tobillos (o sobre las rodillas para menor intensidad).',
      'Flexiona levemente las rodillas y echa la cadera un poco hacia atrás en posición atlética.',
      'Da un paso amplio hacia la derecha abriendo la pierna, y luego mueve la pierna izquierda de forma controlada sin perder la tensión de la liga.',
      'Completa la serie hacia un lado y luego regresa hacia el lado opuesto.'
    ]
  },
  {
    id: 'gl-med-4',
    name: 'Clamshells / Almejas con Banda de Resistencia',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'bands',
    instructions: [
      'Recuéstate de lado en el suelo con las rodillas flexionadas a 90° y los talones juntos, colocando la banda sobre las rodillas.',
      'Mantén los pies en contacto y abre la rodilla superior hacia el techo como una almeja abrindo sus valvas.',
      'Pausa 1-2 segundos arriba apretando la cara externa del glúteo y baja suavemente sin girar la pelvis hacia atrás.'
    ]
  },
  {
    id: 'gl-med-5',
    name: 'Plancha Lateral con Abducción de Pierna (Side Plank Leg Raise)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'bodyweight',
    instructions: [
      'Colócate en posición de plancha lateral apoyando el antebrazo y la cara externa del pie en el suelo.',
      'Mantén la pelvis elevada creando una línea recta con el cuerpo.',
      'Eleva la pierna superior hacia el techo de forma controlada sin perder la altura de la cadera.',
      'Baja la pierna despacio antes de repetir.'
    ]
  },
  {
    id: 'gl-med-6',
    name: 'Abducción de Cadera en Polea Baja (Cable Hip Abduction)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'machines',
    instructions: [
      'Ajusta una tobillera en la polea baja de la máquina y conéctala al tobillo externo.',
      'Ponte de lado a la máquina sosteniéndote de la estructura para dar estabilidad.',
      'Cruza ligeramente la pierna por delante de la pierna de apoyo e inicie la elevación hacia el lado en arco.',
      'Aprieta el lateral de la cadera arriba y regresa lentamente frenando el cable.'
    ]
  },
  {
    id: 'gl-med-7',
    name: 'Máquina de Abducción de Cadera Sentado (Seated Hip Abductor Machine)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-medius',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina apoyando la parte externa de los muslos contra los cojines y la espalda firmemente pegada al respaldo (o inclinado a 45° al frente para enfatizar fibras posteriores).',
      'Abre las piernas de forma potente hacia los lados separando los cojines al máximo.',
      'Sostén la contracción 1 segundo en el punto más abierto.',
      'Cierra las piernas de forma pausada resistiendo la carga de las placas.'
    ]
  },

  // --- GLÚTEO MENOR ---
  {
    id: 'gl-min-1',
    name: 'Abducción en Plano Diagonal con Mancuerna (Diagonal Side Raise)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-minimus',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate totalmente de lado sobre una colchoneta apoyando la cabeza en el brazo.',
      'Coloca una mancuerna liviana sobre la cara anterior/externa del muslo.',
      'Lleva la pierna hacia arriba y ligeramente hacia adelante (en un ángulo de 15° a 30° respecto al cuerpo), manteniendo la punta del pie mirando hacia abajo (rotación interna).',
      'Pausa 1 segundo en la parte alta sintiendo la tensión profunda al frente de la cadera y baja despacio.'
    ]
  },
  {
    id: 'gl-min-2',
    name: 'Almeja Inversa con Mancuerna (Reverse Clamshell)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-minimus',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate de lado con las rodillas flexionadas a 90° y juntas.',
      'Mantén las rodillas pegadas la una contra la otra.',
      'Coloca una mancuerna ligera sobre el tobillo superior y eleva únicamente el pie hacia el techo girando la cadera hacia adentro.',
      'Pausa arriba sintiendo la contracción profunda y regresa de forma suave.'
    ]
  },
  {
    id: 'gl-min-3',
    name: 'Rotación Interna de Cadera Sentado con Banda',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-minimus',
    equipment: 'bands',
    instructions: [
      'Siéntate en la orilla de un banco con las rodillas dobladas a 90° y una banda elástica alrededor de los tobillos.',
      'Separa los pies hacia afuera manteniendo las rodillas juntas (rotación interna de cadera contra la resistencia).',
      'Aprieta la zona profunda del lateral de la cadera en la apertura y regresa lentamente.'
    ]
  },
  {
    id: 'gl-min-4',
    name: 'Almeja Inversa de Lado (Reverse Clamshell Bodyweight)',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-minimus',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate totalmente de lado con las rodillas juntas y dobladas a 90°.',
      'Con las rodillas firmemente en contacto, eleva el tobillo de la pierna superior hacia el techo girando la articulación de la cadera.',
      'Sostén 1-2 segundos arriba y desciende pausadamente.'
    ]
  },
  {
    id: 'gl-min-5',
    name: 'Abducción de Cadera en Polea con Rotación Interna',
    muscleGroupId: 'glutes',
    subzoneId: 'gluteus-minimus',
    equipment: 'machines',
    instructions: [
      'Conecta la tobillera de la polea baja al tobillo de la pierna externa.',
      'Ponte de lado a la máquina, cruza levemente la pierna por delante y elévala hacia afuera y un poco hacia adelante.',
      'Gira la pierna desde la cadera para que el meñique del pie suba primero (rotación interna).',
      'Controla la bajada reteniendo la carga del cable.'
    ]
  },

  // --- CUÁDRICEPS: RECTO FEMORAL ---
  {
    id: 'quad-rec-1',
    name: 'Extensión de Rodilla Sentado con Mancuerna entre los Pies',
    muscleGroupId: 'quadriceps',
    subzoneId: 'rectus-femoris',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en la orilla de un banco elevado con las piernas colgando.',
      'Sostén una mancuerna apretada firmemente entre ambos pies/tobillos.',
      'Mantén el torso erguido y extiéndelas hacia adelante hasta bloquear las rodillas en la cima.',
      'Pausa 1 segundo sintiendo la contracción directa en el centro del muslo y desciende despacio.'
    ]
  },
  {
    id: 'quad-rec-2',
    name: 'Extensión de Rodilla Sentado con Banda',
    muscleGroupId: 'quadriceps',
    subzoneId: 'rectus-femoris',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en la parte baja de una columna o pata trasera del banco.',
      'Siéntate de espaldas al anclaje y rodea un tobillo con el otro extremo de la liga.',
      'Extiende la rodilla hacia adelante hasta alinear la pierna en horizontal.',
      'Pausa en el bloqueo superior venciendo la resistencia elástica y regresa suavemente.'
    ]
  },
  {
    id: 'quad-rec-3',
    name: 'Extensión de Cuádriceps en Suelo de Rodillas (Sissy Squat de Rodillas)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'rectus-femoris',
    equipment: 'bodyweight',
    instructions: [
      'Arrodíllate sobre una colchoneta suave con el torso, cadera y muslos alineados en posición vertical.',
      'Con los brazos cruzados sobre el pecho, inclina todo el tronco rígido hacia atrás doblando únicamente las rodillas.',
      'Siente la tensión extrema en el recto femoral y empuja los muslos para volver a la posición vertical usando la fuerza del cuádriceps.'
    ]
  },
  {
    id: 'quad-rec-4',
    name: 'Extensión de Piernas en Máquina (Leg Extension)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'rectus-femoris',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de extensiones ajustando el rodillo superior sobre los tobillos y la espalda firmemente apoyada en el respaldo.',
      'Si reclinas levemente el respaldo hacia atrás, incrementas el estiramiento inicial del recto femoral.',
      'Extiende ambas piernas hacia arriba de forma fluida hasta la extensión total de codos/rodillas.',
      'Pausa 1-2 segundos en la cima apretando el centro del cuádriceps y desciende despacio.'
    ]
  },
  {
    id: 'quad-rec-5',
    name: 'Sentadilla Hack con Énfasis en Estiramiento de Cuádriceps (Hack Squat)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'rectus-femoris',
    equipment: 'machines',
    instructions: [
      'Colócate en la máquina de sentadilla Hack con la espalda apoyada y los pies colocados en la parte baja de la plataforma a la anchura de las caderas.',
      'Desciende rompiendo las rodillas hacia adelante y dejando que la cadera baje profundamente por debajo de los 90°.',
      'Al fondo del recorrido, el recto femoral alcanza una elongación máxima bajo tensión.',
      'Empuja la plataforma hacia arriba de forma potente con la planta de los pies.'
    ]
  },

  // --- CUÁDRICEPS: VASTO LATERAL ---
  {
    id: 'quad-lat-1',
    name: 'Extensión de Piernas Sentado con Mancuerna (Pies en Rotación Interna)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-lateralis',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en el borde de un banco alto y sostiene una mancuerna aprisionada entre los pies.',
      'Inclinando levemente las puntas de los pies hacia adentro (rotación interna), extienda las piernas hacia adelante.',
      'Al orientar los pies hacia adentro, se enfatiza el reclutamiento de las fibras de la cara externa del cuádriceps.',
      'Pausa 1 segundo en el bloqueo superior apretando el vasto lateral y desciende con control.'
    ]
  },
  {
    id: 'quad-lat-2',
    name: 'Sentadilla Goblet con Talones Elevados y Agarre Estrecho (Cyclist Goblet Squat)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-lateralis',
    equipment: 'dumbbells',
    instructions: [
      'Coloca los talones sobre una cuña o disco elevado (de 5 a 10 cm) y junta los pies a una distancia menor a la anchura de las caderas (5-10 cm de separación).',
      'Sostén una mancuerna verticalmente pegada al pecho en posición de copa.',
      'Desciende flexionando las rodillas marcadamente hacia el frente manteniendo el torso totalmente erguido.',
      'Empuja el suelo desde la parte delantera de los pies para subir, bloqueando las rodillas arriba.'
    ]
  },
  {
    id: 'quad-lat-3',
    name: 'Sentadilla de Ciclista con Peso Corporal (Cyclist Bodyweight Squat)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-lateralis',
    equipment: 'bodyweight',
    instructions: [
      'Apoya los talones sobre un bloque elevado manteniendo los pies juntos.',
      'Cruza los brazos sobre el pecho e inclina el torso suavemente mientras doblas las rodillas hacia adelante.',
      'Desciende en vertical hasta que los muslos toquen las pantorrillas.',
      'Sube empujando los talones contra la elevación, concentrando la tensión en el muslo externo.'
    ]
  },
  {
    id: 'quad-lat-4',
    name: 'Extensión de Piernas en Máquina con Pies Juntos y Puntas hacia Adentro',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-lateralis',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de extensiones y ajusta el rodillo sobre los tobillos.',
      'Junta los pies al centro de la almohadilla y apunta levemente los dedos hacia adentro.',
      'Extiende las piernas hasta el bloqueo articular arriba.',
      'Aprieta fuertemente la cara externa del muslo en la cima y desciende en 3 segundos.'
    ]
  },
  {
    id: 'quad-lat-5',
    name: 'Press de Piernas con Pies Juntos y Bajos (Close & Low Feet Leg Press)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-lateralis',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de prensa e instala los pies en la parte inferior de la plataforma, juntos o con poca separación (10 cm).',
      'Quita los seguros y flexiona las rodillas profundamente hacia el pecho.',
      'La posición baja y cerrada incrementa la flexión de rodilla sobre la de cadera, aislando el vasto lateral.',
      'Presiona la plataforma con fuerza para subir.'
    ]
  },

  // --- CUÁDRICEPS: VASTO MEDIAL (VMO) ---
  {
    id: 'quad-med-1',
    name: 'Extensión de Rodilla Sentado con Mancuerna (Pies en Rotación Externa)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-medialis',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en el borde de un banco elevado sosteniendo una mancuerna apretada entre los pies.',
      'Gira las puntas de los pies hacia afuera en un ángulo de unos 30° a 45° (rotación externa de cadera/tobillo).',
      'Extiende las piernas hacia adelante hasta lograr el bloqueo completo de las rodillas.',
      'Pausa de 1 a 2 segundos en el punto de máxima extensión apretando la "gota" del muslo antes de descender lentamente.'
    ]
  },
  {
    id: 'quad-med-2',
    name: 'Sentadilla Sumo / Agarre Copa con Mancuerna (Goblet Sumo Squat)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-medialis',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con una postura ancha (bastante más abierta que los hombros) y las puntas de los pies apuntando hacia afuera a 45°.',
      'Sostén una mancuerna pesada verticalmente pegada al pecho.',
      'Desciende flexionando las rodillas en la misma dirección en la que apuntan los pies.',
      'Sube empujando los talones y acentúa el bloqueo articular superior activando el vasto medial.'
    ]
  },
  {
    id: 'quad-med-3',
    name: 'Extensión Terminal de Rodilla de Pie con Banda (Band TKE)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-medialis',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a la altura de la rodilla en una columna o estructura sólida.',
      'Introduce la pierna de trabajo por el bucle de la liga, colocándola justo por detrás de la corva/foso poplíteo, de cara al anclaje.',
      'Da un paso atrás para generar tensión con la rodilla levemente flexionada y el talón apoyado.',
      'Empuja la rodilla hacia atrás contra la banda hasta extender la pierna por completo, apretando fuertemente el vasto medial durante 2 segundos.'
    ]
  },
  {
    id: 'quad-med-4',
    name: 'Paso al Frente / Subida Corta con Énfasis en VMO (Peterson Step-Up)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-medialis',
    equipment: 'bodyweight',
    instructions: [
      'Ponte de pie sobre un escalón o disco bajo (5 a 10 cm de altura) apoyando solo la mitad del pie activo y dejando el otro pie libre en el aire.',
      'Eleva el talón de la pierna de apoyo (quedando sobre metatarsos) y dobla levemente la rodilla hacia adelante.',
      'Empuja el escalón extendiendo la rodilla por completo y apretando la gota del cuádriceps en la cima.',
      'Toca el piso suavemente con el talón de la pierna libre y repite de forma fluida.'
    ]
  },
  {
    id: 'quad-med-5',
    name: 'Extensión de Piernas en Máquina con Puntas hacia Afuera',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-medialis',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de extensiones ajustando el rodillo sobre los tobillos.',
      'Abre ligeramente los pies sobre la almohadilla y orienta las puntas de los pies hacia los lados (rotación externa).',
      'Extiende las piernas hasta alinearlas en horizontal.',
      'Sostén la contracción durante 2 segundos en el punto máximo de extensión apretando la cara interna de la rodilla.'
    ]
  },

  // --- CUÁDRICEPS: VASTO INTERMEDIO ---
  {
    id: 'quad-inter-1',
    name: 'Extensión de Pierna Sentado con Mancuerna (Agarre Neutro)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-intermedius',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en la orilla de un banco elevado apoyando la espalda erguida.',
      'Sostén una mancuerna apretada firmemente entre los pies colocados de forma paralela (mirando directo al frente).',
      'Extiende las piernas en el plano frontal hacia adelante hasta bloquear las rodillas.',
      'Sostén la contracción 1 o 2 segundos arriba en la cima sintiendo la fuerza en el centro profundo del muslo y desciende de forma pausada.'
    ]
  },
  {
    id: 'quad-inter-2',
    name: 'Sentadilla Zancada con Enfoque en Rodilla / Zancada Corta (Short-Step Lunge)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-intermedius',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie sosteniendo una mancuerna en cada mano a los lados del cuerpo.',
      'Da un paso corto hacia adelante y desciende llevando la rodilla delantera marcadamente hacia adelante sobre la punta del pie.',
      'Permite un alto rango de flexión en la rodilla delantera para estirar las fibras del vasto intermedio pegadas al fémur.',
      'Empuja el suelo con la planta del pie delantero para volver al punto inicial.'
    ]
  },
  {
    id: 'quad-inter-3',
    name: 'Extensión Terminal de Rodilla (TKE) Bilateral con Banda',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-intermedius',
    equipment: 'bands',
    instructions: [
      'Ancla una banda de resistencia pesada a un soporte a la altura de las rodillas.',
      'Coloca la banda detrás de la articulación del codo/corva de la pierna activa.',
      'Da un paso atrás para tensar la liga manteniendo la rodilla levemente flexionada.',
      'Empuja la rodilla hacia atrás en línea recta hasta lograr la extensión articular completa, apretando la masa muscular profunda del muslo.'
    ]
  },
  {
    id: 'quad-inter-4',
    name: 'Extensiones de Cuádriceps sobre Rodillas (Quad Extensions)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-intermedius',
    equipment: 'bodyweight',
    instructions: [
      'Colócate de rodillas sobre una colchoneta suave con las puntas de los pies apoyadas o estiradas atrás y el torso erguido.',
      'Mantén una línea recta rígida desde las rodillas hasta los hombros.',
      'Déjate caer suavemente hacia atrás flexionando únicamente las rodillas unos centímetros.',
      'Empuja las rodillas contra la colchoneta para retornar a la vertical mediante la extensión activa de las rodillas.'
    ]
  },
  {
    id: 'quad-inter-5',
    name: 'Sentadilla Hack Profunda (Hack Squat)',
    muscleGroupId: 'quadriceps',
    subzoneId: 'vastus-intermedius',
    equipment: 'machines',
    instructions: [
      'Colócate en la máquina de Sentadilla Hack con la espalda totalmente apoyada en el respaldo.',
      'Ubica los pies a la anchura de los hombros en la parte media/baja de la plataforma.',
      'Quita los seguros y baja de forma controlada hasta superar el ángulo de 90° (sentadilla profunda).',
      'El vasto intermedio se estira al máximo bajo la alta carga en el fondo del recorrido.',
      'Presiona la plataforma con la planta del pie para subir.'
    ]
  },

  // --- ISQUIOTIBIALES: BÍCEPS FEMORAL ---
  {
    id: 'ham-bic-1',
    name: 'Curl de Pierna Tumbado en Banco Plano con Mancuerna (Lying Dumbbell Leg Curl)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate boca abajo (en decúbito prono) sobre un banco plano.',
      'Sostén una mancuerna apretada firmemente entre la planta de ambos pies.',
      'Extiende los brazos para sujetar el borde inferior del banco y estabilizar el torso.',
      'Flexiona las rodillas llevando los talones y la mancuerna hacia los glúteos hasta llegar a un ángulo de 90° o un poco más.',
      'Sostén la contracción 1 segundo en la parte alta sintiendo la tensión en la cara posterior-externa del muslo y desciende despacio.'
    ]
  },
  {
    id: 'ham-bic-2',
    name: 'Peso Muerto Rumano con Mancuernas (Dumbbell Romanian Deadlift - RDL)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con los pies a la anchura de las caderas sosteniendo una mancuerna en cada mano frente a los muslos.',
      'Mantén las escápulas retraídas y una ligera flexión fija en las rodillas (15° a 20°).',
      'Empuja la cadera hacia atrás en un patrón de bisagra (como si quisieras tocar la pared con los glúteos) descolgando las mancuernas pegadas a las piernas.',
      'Baja hasta sentir un estiramiento profundo en la parte posterior-externa del muslo (ligeramente por debajo de las rodillas).',
      'Empuja la cadera hacia adelante para regresar arriba apretando los isquiotibiales y glúteos.'
    ]
  },
  {
    id: 'ham-bic-3',
    name: 'Curl de Pierna Tumbado con Banda de Resistencia',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia en un punto bajo (base de una columna o marco de puerta).',
      'Recuéstate boca abajo en el suelo frente al anclaje y rodea uno o ambos tobillos con el extremo de la liga.',
      'Con la pelvis pegada al suelo, flexiona la rodilla llevando el talón hacia el glúteo venciendo la tensión elástica.',
      'Pausa 1-2 segundos en la máxima flexión y regresa lentamente.'
    ]
  },
  {
    id: 'ham-bic-4',
    name: 'Curl Nórdico Negativo / Excéntrico (Nordic Hamstring Curl)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'bodyweight',
    instructions: [
      'Arrodíllate sobre una colchoneta suave con el cuerpo y torso totalmente erguidos, fijando los tobillos firmemente debajo de una barra o superficie pesada (o con la ayuda de un compañero).',
      'Mantén la cadera neutra/extendida (en línea recta con el torso).',
      'Inclina el cuerpo recto hacia adelante frenando la caída de forma lenta y controlada mediante la fuerza de los isquiotibiales.',
      'Coloca las manos al frente al tocar el suelo, da un pequeño empuje para subir y regresa a la posición inicial.'
    ]
  },
  {
    id: 'ham-bic-5',
    name: 'Curl de Piernas Sentado en Máquina (Seated Leg Curl)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de curl sentado ajustando el rodillo superior sobre las espinillas y la almohadilla sobre los muslos para fijar la cadera.',
      'Al estar la cadera flexionada a 90°, la cabeza larga del bíceps femoral se coloca en posición de estiramiento inicial.',
      'Flexiona las rodillas empujando el rodillo hacia abajo y atrás hasta llevar los talones bajo el asiento.',
      'Aprieta en el punto de máxima flexión y desciende lentamente resistiendo el peso.'
    ]
  },
  {
    id: 'ham-bic-6',
    name: 'Curl de Piernas Tumbado en Máquina (Lying Leg Curl)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'biceps-femoris',
    equipment: 'machines',
    instructions: [
      'Acuéstate boca abajo en la máquina apoyando la pelvis sobre el banco y ubicando el rodillo justo por encima de los tobillos.',
      'Toma los agarres de la máquina y mantén las caderas pegadas al cojín.',
      'Flexiona las rodillas de forma explosiva llevando el rodillo hacia los glúteos.',
      'Sostén la contracción arriba 1 segundo y desciende en 3 segundos.'
    ]
  },

  // --- ISQUIOTIBIALES: SEMITENDINOSO ---
  {
    id: 'ham-semi-1',
    name: 'Curl de Pierna Tumbado con Mancuerna (Pies en Rotación Interna)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semitendinosus',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate boca abajo (en decúbito prono) sobre un banco plano.',
      'Aprisiona una mancuerna entre los pies y junta los talones orientando ligeramente las puntas hacia adentro.',
      'Flexiona las rodillas llevando los talones hacia los glúteos de forma fluida.',
      'Pausa 1 segundo en la cima apretando la cara interna-posterior del muslo y desciende despacio.'
    ]
  },
  {
    id: 'ham-semi-2',
    name: 'Peso Muerto Rumano con Mancuernas (Pies Paralelos / Ligeramente Adentro)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semitendinosus',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con las pies a la anchura de las caderas e inclinados suavemente hacia el frente o centro.',
      'Sostén las mancuernas pegadas a los muslos.',
      'Empuja la cadera profundamente hacia atrás manteniendo una ligera flexión fija en las rodillas.',
      'Baja hasta sentir el estiramiento en la cara posterior-interna del muslo y regresa extendiendo la cadera.'
    ]
  },
  {
    id: 'ham-semi-3',
    name: 'Curl de Pierna Tumbado con Banda (Pies hacia Adentro)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semitendinosus',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia a un punto bajo firme.',
      'Recuéstate boca abajo en el suelo frente al anclaje y sujeta el bucle en los tobillos/pies.',
      'Rota suavemente las puntas de los pies hacia el centro y flexiona las rodillas llevando los talones hacia los glúteos.',
      'Regresa de manera pausada controlando la tracción elástica.'
    ]
  },
  {
    id: 'ham-semi-4',
    name: 'Peso Muerto Unilateral a Peso Corporal (Single-Leg Bodyweight RDL)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semitendinosus',
    equipment: 'bodyweight',
    instructions: [
      'Ponte de pie sobre una pierna con ligera flexión en la rodilla.',
      'Lleva la pierna libre extendida hacia atrás manteniendo las caderas perfectamente niveladas y orientadas al suelo.',
      'Siente el estiramiento en el semitendinoso de la pierna apoyada al descender el torso.',
      'Impúlsate con el pie apalancado en el suelo para subir.'
    ]
  },
  {
    id: 'ham-semi-5',
    name: 'Curl de Pierna Sentado en Máquina (Pies en Rotación Interna)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semitendinosus',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de curl y ajusta las almohadillas fijando el torso.',
      'Coloca las puntas de los pies inclinadas hacia el centro (rotación interna).',
      'Flexiona las rodillas tirando del rodillo hacia atrás por debajo del asiento.',
      'La postura sentada coloca la cadera a 90°, estirando la inserción alta del semitendinoso mientras se contrae en la rodilla.'
    ]
  },

  // --- ISQUIOTIBIALES: SEMIMEMBRANOSO ---
  {
    id: 'ham-mem-1',
    name: 'Curl de Pierna Tumbado en Banco Inclinado/Plano con Mancuerna (Pies hacia Adentro)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semimembranosus',
    equipment: 'dumbbells',
    instructions: [
      'Recuéstate boca abajo en un banco plano o ligeramente inclinado a 15°.',
      'Sostén una mancuerna aprisionada entre ambos pies, juntando los talones y orientando levemente las puntas hacia adentro (rotación interna).',
      'Flexiona las rodillas llevando los talones hacia los glúteos de manera fluida y controlada.',
      'Sostén la contracción 1 segundo en el punto más alto apretando la cara posterior-interna del muslo y desciende despacio.'
    ]
  },
  {
    id: 'ham-mem-2',
    name: 'Peso Muerto Rumano con Mancuernas enfocado en Isquios Mediales',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semimembranosus',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con los pies alineados a la anchura de las caderas e inclinados suavemente hacia el frente o centro.',
      'Sostén una mancuerna en cada mano frente a los muslos.',
      'Empuja la cadera profundamente hacia atrás manteniendo una ligera flexión fija en las rodillas.',
      'Desciende las mancuernas pegadas a las piernas hasta la mitad de las espinillas, sintiendo el estiramiento en la cara posterior-interna del muslo.',
      'Extiende la cadera de forma potente para regresar a la postura vertical.'
    ]
  },
  {
    id: 'ham-mem-3',
    name: 'Curl de Pierna Sentado con Banda de Resistencia',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semimembranosus',
    equipment: 'bands',
    instructions: [
      'Ancla la banda de resistencia cerca del suelo frente a ti.',
      'Siéntate en una silla de espaldas al anclaje y sujeta el extremo de la liga en los tobillos.',
      'Orienta las puntas de los pies suavemente hacia el centro.',
      'Flexiona las rodillas llevando los talones hacia abajo y atrás por debajo de la silla contra la resistencia elástica.'
    ]
  },
  {
    id: 'ham-mem-4',
    name: 'Puente de Isquios a Una Pierna en Suelo (Single-Leg Hamstring Bridge)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semimembranosus',
    equipment: 'bodyweight',
    instructions: [
      'Recuéstate boca arriba apoyando un solo talón en el suelo con la rodilla flexionada a unos 120°.',
      'Mantén la otra pierna elevada y orienta levemente la punta del pie de apoyo hacia adentro.',
      'Empuja el suelo con el talón despegando la cadera del piso mediante la fuerza de los isquiotibiales internos.',
      'Desciende sin llegar a tocar el piso con los glúteos.'
    ]
  },
  {
    id: 'ham-mem-5',
    name: 'Peso Muerto Rumano con Barra (Barbell RDL)',
    muscleGroupId: 'hamstrings',
    subzoneId: 'semimembranosus',
    equipment: 'machines',
    instructions: [
      'Sostén una barra cargada con agarre prono a la anchura de los hombros.',
      'Con la espalda recta y las rodillas suavemente flexionadas, empuja la pelvis hacia atrás.',
      'Desciende la barra pegada a los muslos hasta sentir el límite de estiramiento en la zona posterior de las rodillas y muslos mediales.',
      'Sube de forma potente apretando la cadena posterior.'
    ]
  },

  // --- PANTORRILLAS: GEMELO MEDIAL ---
  {
    id: 'cal-med-1',
    name: 'Elevación de Talones a Una Pierna con Mancuerna (Punta Hacia Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'dumbbells',
    instructions: [
      'Coloca los metatarsos (parte delantera del pie) de una sola pierna sobre el borde de un escalón o disco elevado.',
      'Orienta la punta del pie ligeramente hacia afuera (rotación externa de unos 15° a 30°).',
      'Sostén una mancuerna en la mano del mismo lado y sujétate con la otra mano a una pared o soporte para dar estabilidad.',
      'Mantén la rodilla recta/extendida y desciende el talón por debajo del nivel del escalón para sentir un estiramiento profundo.',
      'Impúlsate hacia arriba hasta la máxima extensión (de puntillas), apretando 1 a 2 segundos arriba la cara interna de la pantorrilla.'
    ]
  },
  {
    id: 'cal-med-2',
    name: 'Elevación de Talones de Pie con Dos Mancuernas (Puntas hacia Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie apoyando las puntas de ambos pies en un escalón, separadas al ancho de las caderas y apuntando hacia afuera en ángulo de "V".',
      'Sostén dos mancuernas a los lados del cuerpo manteniéndote erguido.',
      'Desciende lentamente ambos talones reteniendo el peso.',
      'Sube de forma potente apoyándote principalmente sobre el borde del dedo gordo y la cara interna del metatarso.'
    ]
  },
  {
    id: 'cal-med-3',
    name: 'Elevación de Talones de Pie con Banda (Puntas hacia Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de una banda elástica pesada con las puntas de los pies orientadas hacia afuera.',
      'Sostén los extremos de la liga a la altura de los hombros o del pecho para generar tensión elástica.',
      'Mantén las piernas extendidas y eleva los talones contra la resistencia de la liga.',
      'Pausa 1-2 segundos arriba en la máxima extensión y baja despacio.'
    ]
  },
  {
    id: 'cal-med-4',
    name: 'Elevación de Talones Unilateral en Escalón (Punta Hacia Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'bodyweight',
    instructions: [
      'Apoya la parte delantera del pie en el borde de un escalón con la punta orientada hacia afuera y la rodilla extendida.',
      'Deja caer el talón profundamente en el aire para estirar la cabeza medial.',
      'Empuja de forma fluida hacia arriba hasta la punta del pie sin dar impulsos con el torso.'
    ]
  },
  {
    id: 'cal-med-5',
    name: 'Elevación de Talones de Pie en Máquina (Standing Calf Raise - Puntas Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'machines',
    instructions: [
      'Colócate en la máquina de gemelos apoyando las almohadillas sobre los hombros.',
      'Ubica las puntas de los pies sobre la plataforma con los dedos apuntando hacia afuera (rotación externa de 20° a 30°).',
      'Con las rodillas bloqueadas en extensión, baja los talones suavemente al máximo.',
      'Empuja hacia arriba elevando la carga con la cara interna del gemelo.'
    ]
  },
  {
    id: 'cal-med-6',
    name: 'Elevación de Talones en Prensa de Piernas (Leg Press Calf Raise - Puntas Afuera)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-medial',
    equipment: 'machines',
    instructions: [
      'Siéntate en la prensa, coloca las puntas de los pies en el borde inferior de la plataforma e inclínalas hacia afuera.',
      'Mantén las piernas totalmente extendidas y libera los seguros.',
      'Deja que la plataforma baje flexionando los tobillos hacia ti.',
      'Empuja la plataforma únicamente con la punta de los pies reteniendo la carga arriba 1 segundo.'
    ]
  },

  // --- PANTORRILLAS: GEMELO LATERAL ---
  {
    id: 'cal-lat-1',
    name: 'Elevación de Talones a Una Pierna con Mancuerna (Punta Hacia Adentro)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-lateral',
    equipment: 'dumbbells',
    instructions: [
      'Coloca los metatarsos (parte delantera del pie) de una sola pierna sobre el borde de un escalón o disco.',
      'Orienta la punta del pie ligeramente hacia adentro (rotación interna de unos 15° a 30°).',
      'Sostén una mancuerna en la mano del lado activo y sujétate con la otra a una pared o soporte para dar firmeza.',
      'Mantén la rodilla recta/bloqueada y desciende el talón por debajo del escalón sintiendo el estiramiento en la cara externa de la pantorrilla.',
      'Impúlsate hacia arriba hasta la máxima extensión de puntillas, apretando 1 segundo arriba la cabeza lateral.'
    ]
  },
  {
    id: 'cal-lat-2',
    name: 'Elevación de Talones de Pie con Dos Mancuernas (Puntas hacia Adentro)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-lateral',
    equipment: 'dumbbells',
    instructions: [
      'Ponte de pie con las puntas de ambos pies apoyadas en un escalón, separadas al ancho de caderas y apuntando hacia el centro.',
      'Sostén dos mancuernas a los lados del cuerpo manteniéndote completamente erguido.',
      'Desciende lentamente ambos talones reteniendo el peso.',
      'Sube de forma potente apoyándote principalmente sobre el borde exterior/central del metatarso.'
    ]
  },
  {
    id: 'cal-lat-3',
    name: 'Elevación de Talones de Pie con Banda (Puntas hacia Adentro)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-lateral',
    equipment: 'bands',
    instructions: [
      'Pisa el centro de la banda elástica pesada con las puntas de los pies orientadas hacia el centro.',
      'Sostén los extremos de la liga a la altura de los hombros o el pecho para generar tensión.',
      'Mantén las piernas rectas y eleva los talones contra la resistencia elástica.',
      'Pausa 1-2 segundos arriba en la máxima extensión y baja despacio.'
    ]
  },
  {
    id: 'cal-lat-4',
    name: 'Elevación de Talones Unilateral en Escalón (Punta Inclinada)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-lateral',
    equipment: 'bodyweight',
    instructions: [
      'Apoya la parte delantera del pie en el borde de un escalón con la punta orientada hacia adentro y la rodilla extendida.',
      'Deja caer el talón profundamente en el aire para estirar la cabeza lateral.',
      'Empuja de forma fluida hacia arriba hasta la punta del pie sin dar impulsos con el torso.'
    ]
  },
  {
    id: 'cal-lat-5',
    name: 'Elevación de Talones de Pie en Máquina (Standing Calf Raise - Puntas Adentro)',
    muscleGroupId: 'calves',
    subzoneId: 'gastrocnemius-lateral',
    equipment: 'machines',
    instructions: [
      'Colócate en la máquina de gemelos apoyando las almohadillas sobre los hombros.',
      'Ubica las puntas de los pies sobre la plataforma con los dedos hacia el centro (rotación interna de 20° a 30°).',
      'Con las rodillas bloqueadas en extensión, baja los talones suavemente al máximo.',
      'Empuja hacia arriba elevando la carga con la parte externa del gemelo.'
    ]
  },

  // --- PANTORRILLAS: SÓLEO ---
  {
    id: 'cal-sol-1',
    name: 'Elevación de Talones Sentado con Mancuerna sobre los Muslos (Seated Dumbbell Calf Raise)',
    muscleGroupId: 'calves',
    subzoneId: 'soleus',
    equipment: 'dumbbells',
    instructions: [
      'Siéntate en la orilla de un banco apoyando las puntas de los pies (metatarsos) sobre un disco o bloque elevado, asegurando que las rodillas queden flexionadas exactamente a 90°.',
      'Sostén una mancuerna pesada (o dos) en posición vertical apoyada sobre la parte baja de los muslos (justo por encima de las rodillas), protegiendo la zona con una toalla o almohadilla.',
      'Deja caer los talones lentamente por debajo del nivel del bloque hasta sentir el estiramiento profundo del sóleo y el tendón de Aquiles.',
      'Pausa 1 segundo abajo y empuja la carga hacia arriba sobre las puntas de los pies hasta la máxima flexión plantar.'
    ]
  },
  {
    id: 'cal-sol-2',
    name: 'Elevación de Talones Sentado con Banda sobre las Rodillas',
    muscleGroupId: 'calves',
    subzoneId: 'soleus',
    equipment: 'bands',
    instructions: [
      'Siéntate en una silla firme con las rodillas dobladas a 90° y las puntas de los pies sobre un escalón o disco.',
      'Coloca una banda elástica de alta resistencia sobre la parte baja de los muslos (cerca de las rodillas) y pisa las puntas de la liga con ambos pies contra el suelo o anclala a la base de la silla.',
      'Sube los talones impulsando las rodillas hacia arriba contra la resistencia elástica.',
      'Desciende despacio controlando la tracción hacia abajo.'
    ]
  },
  {
    id: 'cal-sol-3',
    name: 'Elevación de Talones Sentado en Sentadilla Isométrica contra Pared (Wall Sit Calf Raise)',
    muscleGroupId: 'calves',
    subzoneId: 'soleus',
    equipment: 'bodyweight',
    instructions: [
      'Apoya la espalda contra una pared y desciende el torso hasta que los muslos queden paralelos al suelo con las rodillas flexionadas exactamente a 90°.',
      'Sostén la posición de sentadilla estática (isometría de cuádriceps) y eleva ambos talones despegándolos del piso tanto como sea posible.',
      'Sostén la contracción del sóleo 1-2 segundos arriba de puntillas antes de bajar los talones al suelo.'
    ]
  },
  {
    id: 'cal-sol-4',
    name: 'Elevación de Talones Sentado en Máquina Específica de Sóleo (Seated Calf Raise Machine)',
    muscleGroupId: 'calves',
    subzoneId: 'soleus',
    equipment: 'machines',
    instructions: [
      'Siéntate en la máquina de sóleo apoyando los metatarsos en la plataforma y coloca el cojín acolchado firmemente sobre la parte baja de los muslos.',
      'Quita la palanca de freno de seguridad y baja los talones de forma pausada hasta sentir la máxima elongación inferior.',
      'Mantén la pausa de 1 segundo en el punto bajo para eliminar la inercia del tendón.',
      'Empuja el cojín hacia arriba extendiendo las puntas de los pies y aprieta el sóleo en la cima durante 2 segundos.'
    ]
  },
  {
    id: 'cal-sol-5',
    name: 'Elevación de Talones Sentado con Barra (Seated Barbell Calf Raise)',
    muscleGroupId: 'calves',
    subzoneId: 'soleus',
    equipment: 'machines',
    instructions: [
      'Siéntate en la orilla de un banco con las puntas de los pies sobre un bloque o discos.',
      'Apoya una barra cargada y acolchada directamente sobre los muslos justo detrás de las rodillas.',
      'Ejecuta el rango completo (descenso controlado y elevación máxima) sosteniendo la barra con las manos para dar estabilidad.'
    ]
  }
];