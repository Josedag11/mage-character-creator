export const SPHERES_DATA = [
  { id: 'correspondence', name: 'Correspondencia (Correspondence)', desc: 'Conexión, distancia, espacio y percepción remota.' },
  { id: 'entropy', name: 'Entropía (Entropy)', desc: 'Probabilidad, suerte, caos, orden y decadencia.' },
  { id: 'forces', name: 'Fuerzas (Forces)', desc: 'Control elemental: fuego, electricidad, luz, gravedad y sonido.' },
  { id: 'life', name: 'Vida (Life)', desc: 'Influencia sobre organismos vivos, curación y metamorfosis.' },
  { id: 'matter', name: 'Materia (Matter)', desc: 'Transformación de sustancias inanimadas, objetos y estructuras.' },
  { id: 'mind', name: 'Mente (Mind)', desc: 'Telepatía, emociones, ilusiones, escudos mentales y control.' },
  { id: 'prime', name: 'Primado / Primal Utility (Prime)', desc: 'Canalización de Quintaesencia, energía pura e ilusión sintética.' },
  { id: 'spirit', name: 'Espíritu / Dimensional Science (Spirit)', desc: 'Viaje a la Umbra, contacto con entidades y ecología espiritual.' },
  { id: 'time', name: 'Tiempo (Time)', desc: 'Percepción temporal, precognición, aceleración y dilatación.' }
];

export const SPHERE_RATING_DESCRIPTIONS = {
  correspondence: {
    1: 'Rank 1 (Perception): Percibir conexiones espaciales y distancias exactas.',
    2: 'Rank 2 (Manipulation): Ver lugares distantes o tirar de objetos pequeños.',
    3: 'Rank 3 (Control): Teletransportarte a ti mismo a través del espacio local.'
  },
  entropy: {
    1: 'Rank 1 (Perception): Detectar puntos débiles y grietas en la probabilidad.',
    2: 'Rank 2 (Manipulation): Alterar el azar (tiradas de dados, ruletas, suerte).',
    3: 'Rank 3 (Control): Imponer decadencia directa o fortuna predecible.'
  },
  forces: {
    1: 'Rank 1 (Perception): Ver espectros de luz, calor, electricidad y sonido.',
    2: 'Rank 2 (Manipulation): Alterar sombras, apagar o reorientar pequeñas llamas.',
    3: 'Rank 3 (Control): Invocar ráfagas de viento, rayos o descargar fuego.'
  },
  life: {
    1: 'Rank 1 (Perception): Escanear salud, pulso, enfermedades y auras de vida.',
    2: 'Rank 2 (Manipulation): Curar heridas menores o alterar tu propia apariencia.',
    3: 'Rank 3 (Control): Curar traumas severos o alterar la biología celular.'
  },
  matter: {
    1: 'Rank 1 (Perception): Analizar la composición atómica y densidad de objetos.',
    2: 'Rank 2 (Manipulation): Transmutar sustancias simples (madera en agua).',
    3: 'Rank 3 (Control): Alterar la forma y durabilidad de estructuras complejas.'
  },
  mind: {
    1: 'Rank 1 (Perception): Leer emociones, auras y procesar datos velozmente.',
    2: 'Rank 2 (Manipulation): Proyectar impulsos mentales, empatía e ilusiones.',
    3: 'Rank 3 (Control): Telepatía directa, lectura de pensamientos y vínculo mental.'
  },
  prime: {
    1: 'Rank 1 (Perception): Sentir el flujo de Quintaesencia y resonancias máx.',
    2: 'Rank 2 (Manipulation): Infundir Quintaesencia en objetos e ilusiones.',
    3: 'Rank 3 (Control): Canalizar rayos de Quintaesencia pura o extraer energía.'
  },
  spirit: {
    1: 'Rank 1 (Perception): Ver a través de la Gauntlet e inspeccionar la Umbra.',
    2: 'Rank 2 (Manipulation): Tocar espíritus o influir levemente en la Gauntlet.',
    3: 'Rank 3 (Control): Cruzar físicamente la Celosía (Gauntlet) hacia la Umbra.'
  },
  time: {
    1: 'Rank 1 (Perception): Sentir el flujo temporal exacto y precognición vaga.',
    2: 'Rank 2 (Manipulation): Retrocoñición (ver el pasado) o retrasar eventos.',
    3: 'Rank 3 (Control): Acelerar o desacelerar tu velocidad personal.'
  }
};

export const BACKGROUNDS_DATA = [
  { id: 'avatar', name: 'Avatar / Genius', desc: 'La fuerza de tu alma Despertada. Determina tu reserva inicial de Quintaesencia.' },
  { id: 'node', name: 'Nodo (Node)', desc: 'Lugar de poder místico bajo tu control que genera Quintaesencia y Tass.' },
  { id: 'resources', name: 'Recursos (Resources)', desc: 'Riqueza, propiedades, ingresos mensuales y poder financiero.' },
  { id: 'mentor', name: 'Mentor', desc: 'Un mago experimentado que te guía, aconseja y protege.' },
  { id: 'contacts', name: 'Contactos (Contacts)', desc: 'Red de informantes en la sociedad mortal, gobierno o bajos fondos.' },
  { id: 'allies', name: 'Aliados (Allies)', desc: 'Amigos leales dispuestos a prestarte ayuda en situaciones de riesgo.' },
  { id: 'wonder', name: 'Maravilla / Dispositivo (Wonder)', desc: 'Artefacto o fetiche místico con efectos mágicos propios.' },
  { id: 'sanctum', name: 'Santuario / Laboratorio (Sanctum)', desc: 'Espacio de trabajo seguro donde la magia es coincidente.' },
  { id: 'library', name: 'Biblioteca (Library)', desc: 'Colección de tomos grimoires o bases de datos arcanas.' },
  { id: 'arcane', name: 'Arcano (Arcane)', desc: 'Aura mística que hace que la gente y cámaras te olviden fácilmente.' },
  { id: 'destiny', name: 'Destino (Destiny)', desc: 'Marcado por el Hado para cumplir una gran proeza cósmica.' }
];

export const BACKGROUND_RATING_DESCRIPTIONS = {
  avatar: {
    1: '1 dot: Intuición leve (1 Quintaesencia máx. por turno).',
    2: '2 dots: Presencia interior clara (2 Quintaesencia máx.).',
    3: '3 dots: Voz mística poderosa (3 Quintaesencia máx.).',
    4: '4 dots: Entidad casi independiente (4 Quintaesencia máx.).',
    5: '5 dots: Chispa divina deslumbrante (5 Quintaesencia máx.).'
  },
  node: {
    1: '1 dot: Manantial menor (1 pt. de Quintaesencia/Tass por semana).',
    2: '2 dots: Fuente mística local (2 pts. semanales).',
    3: '3 dots: Santuario de poder significativo (3 pts. semanales).',
    4: '4 dots: Nodo mayor apetecido por facciones (4 pts. semanales).',
    5: '5 dots: Vórtice de poder cósmico legendario (5 pts. semanales).'
  },
  resources: {
    1: '1 dot: Pequeños ahorros / Empleo básico.',
    2: '2 dots: Clase media acomodada; propiedades menores.',
    3: '3 dots: Bastante holgado; estilo de vida profesional.',
    4: '4 dots: Rico; grandes inversiones y propiedades.',
    5: '5 dots: Multimillonario; influencia económica masiva.'
  },
  mentor: {
    1: '1 dot: Un Neófito con un poco más de experiencia.',
    2: '2 dots: Adepto respetado en su tradición.',
    3: '3 dots: Maestro poderoso con valiosas conexiones.',
    4: '4 dots: Mago de gran renombre y sabiduría arcana.',
    5: '5 dots: Archimago o líder de Convención.'
  },
  contacts: {
    1: '1 dot: 1 contacto útil en un área específica.',
    2: '2 dots: 2 contactos en diferentes círculos.',
    3: '3 dots: Red informativa local sólida.',
    4: '4 dots: Contactos regionales en instituciones clave.',
    5: '5 dots: Red de inteligencia global.'
  },
  allies: {
    1: '1 dot: 1 amigo leal mortal.',
    2: '2 dots: 2 amigos o un socio influyente.',
    3: '3 dots: Pequeño grupo dedicado a ayudarte.',
    4: '4 dots: Organización local o escuadrón de confianza.',
    5: '5 dots: Red de aliados con recursos significativos.'
  },
  wonder: {
    1: '1 dot: Amuleto o Gadget menor (Efecto de Rank 1).',
    2: '2 dots: Artefacto útil o Talismán (Efecto de Rank 2).',
    3: '3 dots: Dispositivo/Maravilla potente (Efecto de Rank 3).',
    4: '4 dots: Reliquia mística de gran poder (Efecto de Rank 4).',
    5: '5 dots: Maravilla legendaria capaz de alterar la realidad.'
  },
  sanctum: {
    1: '1 dot: Habitación o taller personal adecuado.',
    2: '2 dots: Casa o laboratorio bien equipado.',
    3: '3 dots: Complejo seguro y aislado con equipamiento de nivel.',
    4: '4 dots: Fortalecimiento místico con protecciones avanzadas.',
    5: '5 dots: Bastión impenetrable equipado para alta magia.'
  },
  library: {
    1: '1 dot: Un par de libros raros o archivos digitales.',
    2: '2 dots: Colección decente sobre temas específicos.',
    3: '3 dots: Archivo arcano respetable.',
    4: '4 dots: Biblioteca extensa con secretos olvidados.',
    5: '5 dots: Repositorio místico de valor inestimable.'
  },
  arcane: {
    1: '1 dot: La gente tiende a olvidar tu rostro.',
    2: '2 dots: Difícil de rastrear en registros oficiales.',
    3: '3 dots: Las fotos tuyas salen borrosas; rastro desvanecido.',
    4: '4 dots: Los recuerdos sobre ti se borran en días.',
    5: '5 dots: Prácticamente un fantasma para el mundo mortal.'
  },
  destiny: {
    1: '1 dot: Destino menor (puedes recuperar 1 Willpower en crisis).',
    2: '2 dots: Tu presencia importa al Hado.',
    3: '3 dots: Estás destinado a proezas notables.',
    4: '4 dots: Tu nombre resonará en la historia.',
    5: '5 dots: Figura central en la Ascension War.'
  }
};