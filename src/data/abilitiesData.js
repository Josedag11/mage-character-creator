export const ABILITY_CATEGORIES = {
  talents: {
    label: 'Talentos (Talents)',
    traits: [
      { id: 'alertness', name: 'Alerta (Alertness)', desc: 'Percepción instintiva del peligro y detalles del entorno.' },
      { id: 'art', name: 'Arte (Art)', desc: 'Expresión artística, música, pintura y ejecución creativa.' },
      { id: 'athletics', name: 'Atletismo (Athletics)', desc: 'Acondicionamiento físico, acrobacias y deportes.' },
      { id: 'awareness', name: 'Conciencia Sobrenatural (Awareness)', desc: 'Sentir vibraciones místicas, Resonance y magia activa.' },
      { id: 'brawl', name: 'Pelea (Brawl)', desc: 'Combate cuerpo a cuerpo sin armas, puñetazos y llaves.' },
      { id: 'empathy', name: 'Empatía (Empathy)', desc: 'Comprender emociones, intenciones y motivaciones ajenas.' },
      { id: 'expression', name: 'Expresión (Expression)', desc: 'Oratoria, escritura persuasiva y comunicación.' },
      { id: 'intimidation', name: 'Intimidación (Intimidation)', desc: 'Imponer presencia, amenazas físicas o psicológicas.' },
      { id: 'leadership', name: 'Liderazgo (Leadership)', desc: 'Inspirar, dirigir e influir en grupos de personas.' },
      { id: 'streetwise', name: 'Callejeo (Streetwise)', desc: 'Moverse en los bajos fondos, contactos urbanos y jerga.' },
      { id: 'subterfuge', name: 'Subterfugio (Subterfuge)', desc: 'Engañar, ocultar verdades y detectar mentiras.' }
    ]
  },
  skills: {
    label: 'Técnicas (Skills)',
    traits: [
      { id: 'crafts', name: 'Artesanía (Crafts)', desc: 'Crear, reparar y modificar objetos y estructuras.' },
      { id: 'drive', name: 'Conducir (Drive)', desc: 'Manejo experto de vehículos bajo situaciones de tensión.' },
      { id: 'etiquette', name: 'Etiqueta (Etiquette)', desc: 'Protocolo social, diplomacia y costumbres formales.' },
      { id: 'firearms', name: 'Armas de Fuego (Firearms)', desc: 'Manejo, puntería y mantenimiento de armas de fuego.' },
      { id: 'martialArts', name: 'Artes Marciales (Martial Arts)', desc: 'Técnicas disciplinares de combate sin armas o con armas tradicionales.' },
      { id: 'meditation', name: 'Meditación (Meditation)', desc: 'Enfoque mental, calma interior y canalización de energía.' },
      { id: 'melee', name: 'Armas Cuerpo a Cuerpo (Melee)', desc: 'Combate con espadas, cuchillos, bastones u objetos.' },
      { id: 'research', name: 'Investigación (Research)', desc: 'Búsqueda sistemática de datos, archivos y fuentes.' },
      { id: 'stealth', name: 'Sigilo (Stealth)', desc: 'Moverse sin ser visto ni escuchado, infiltración.' },
      { id: 'survival', name: 'Supervivencia (Survival)', desc: 'Sobrevivir en entornos hostiles, rastreo y refugio.' },
      { id: 'technology', name: 'Tecnología (Technology)', desc: 'Uso, reparación y diseño de maquinaria y electrónicos.' }
    ]
  },
  knowledges: {
    label: 'Conocimientos (Knowledges)',
    traits: [
      { id: 'academics', name: 'Académicos (Academics)', desc: 'Estudios de humanidades, historia, literatura y filosofía.' },
      { id: 'computer', name: 'Informática (Computer)', desc: 'Programación, hacking, sistemas operativos y redes.' },
      { id: 'cosmology', name: 'Cosmología (Cosmology)', desc: 'Conocimiento de los reinos de la Umbra y planos espirituales.' },
      { id: 'enigmas', name: 'Enigmas (Enigmas)', desc: 'Resolver acertijos, puzzles, paradojas y secretos.' },
      { id: 'esoterica', name: 'Esoterismo (Esoterica)', desc: 'Prácticas místicas, ocultismo tradicional y simbolismo.' },
      { id: 'investigation', name: 'Investigación Policial (Investigation)', desc: 'Análisis de escenas, deducción de pistas y peritaje.' },
      { id: 'law', name: 'Leyes (Law)', desc: 'Sistemas legales mundanos, normativas y procedimientos.' },
      { id: 'medicine', name: 'Medicina (Medicine)', desc: 'Anatomía, diagnóstico, tratamientos y primeros auxilios.' },
      { id: 'occult', name: 'Ocultismo (Occult)', desc: 'Estudio de seres sobrenaturales, monstruos y folclore.' },
      { id: 'politics', name: 'Política (Politics)', desc: 'Burocracia, maniobras de poder e instituciones.' },
      { id: 'science', name: 'Ciencias (Science)', desc: 'Física, química, biología y método científico.' }
    ]
  }
};

// Descripciones oficiales por nivel de Habilidad (M20 pp. 275-296)
export const ABILITY_RATING_DESCRIPTIONS = {
  // TALENTS
  alertness: {
    1: 'Novice: "Tengo un mal presagio sobre esto..."',
    2: 'Practiced: Se te eriza la piel al primer indicio de peligro.',
    3: 'Skillful: Captas la amenaza oculta detrás de un susurro.'
  },
  art: {
    1: 'Novice: Aficionado entusiasta.',
    2: 'Practiced: Artista local o intérprete capacitado.',
    3: 'Skillful: Artista profesional respetado.'
  },
  athletics: {
    1: 'Novice: Entusiasta del gimnasio o corredor recreativo.',
    2: 'Practiced: Atleta destacado o competidor dedicado.',
    3: 'Skillful: Semiprofesional o campeón regional.'
  },
  awareness: {
    1: 'Novice: Tienes un don para detectar verdades ocultas.',
    2: 'Practiced: La magia existe y a menudo sientes su presencia.',
    3: 'Skillful: Puedes ver auras y comprender el significado de sus colores.'
  },
  brawl: {
    1: 'Novice: Has estado en un par de peleas de callejón.',
    2: 'Practiced: Sabes dar un buen golpe y encajar impactos.',
    3: 'Skillful: Nivel de luchador de calle o gorila experimentado.'
  },
  empathy: {
    1: 'Novice: Sabes cuándo un amigo está pasando por un mal día.',
    2: 'Practiced: Captas cambios sutiles en el ánimo y lenguaje corporal.',
    3: 'Skillful: Lees los estados emocionales como un libro abierto.'
  },
  expression: {
    1: 'Novice: Escribes ensayos razonables o hablas ante grupos pequeños.',
    2: 'Practiced: Tus discursos y escritos cautivan a la audiencia.',
    3: 'Skillful: Orador, autor o intérprete convincente.'
  },
  intimidation: {
    1: 'Novice: Miradas fijas y voz firme.',
    2: 'Practiced: Haces que la gente se lo piense dos veces antes de cruzarse contigo.',
    3: 'Skillful: Presencia genuinamente aterradora cuando te enfadas.'
  },
  leadership: {
    1: 'Novice: Capitán de equipo o presidente de club.',
    2: 'Practiced: Gerente o líder de escuadrón; la gente sigue tu dirección.',
    3: 'Skillful: Líder inspirador que inspira lealtad y respeto.'
  },
  streetwise: {
    1: 'Novice: Sabes dónde encontrar problemas básicos.',
    2: 'Practiced: Conoces bien el vecindario local.',
    3: 'Skillful: Estás bien conectado en los bajos fondos de la ciudad.'
  },
  subterfuge: {
    1: 'Novice: Chico lindo e inocente.',
    2: 'Practiced: Estafador de poca monta.',
    3: 'Skillful: Abogado exitoso o manipulador hábil.'
  },

  // SKILLS
  crafts: {
    1: 'Novice: Más o menos sabes lo que estás haciendo.',
    2: 'Practiced: Las habilidades básicas han dado paso a un conocimiento práctico.',
    3: 'Skillful: ¡Eres bastante bueno, francamente!'
  },
  drive: {
    1: 'Novice: Puedes conducir sin calar el motor.',
    2: 'Practiced: Navegas mal tiempo o tráfico denso con fluidez.',
    3: 'Skillful: Persecuciones a alta velocidad y maniobras complejas.'
  },
  etiquette: {
    1: 'Novice: Sabes qué tenedor usar y dices "por favor" y "gracias".',
    2: 'Practiced: Te desenvuelves con gracia en cenas formales o eventos corporativos.',
    3: 'Skillful: Las galas de la alta sociedad y los protocolos diplomáticos son tu especialidad.'
  },
  firearms: {
    1: 'Novice: Manejas y apuntas una pistola de forma segura.',
    2: 'Practiced: La práctica regular en campo de tiro te hace un tirador confiable.',
    3: 'Skillful: Tiro táctico y desenfunde rápido bajo presión.'
  },
  martialArts: {
    1: 'Novice: Cinturón amarillo/naranja; posturas y golpes básicos.',
    2: 'Practiced: Cinturón verde/azul; buena experiencia en combate controlado.',
    3: 'Skillful: Cinturón negro; altamente competente en aplicaciones reales.'
  },
  meditation: {
    1: 'Novice: Puedes mantener la calma y el enfoque durante períodos cortos.',
    2: 'Practiced: La práctica regular ha profundizado y extendido tus habilidades.',
    3: 'Skillful: Incluso bajo distracciones intensas, sabes encontrar tu centro.'
  },
  melee: {
    1: 'Novice: Blandes un garrote o hoja sin cortarte a ti mismo... mucho.',
    2: 'Practiced: Un poco de técnica... suficiente para una pelea real.',
    3: 'Skillful: Eres un tipo bastante rudo con armas blancas.'
  },
  research: {
    1: 'Dabbler: Sabes usar catálogos de bibliotecas y motores de búsqueda con eficacia.',
    2: 'Student: Cruzas fuentes y compilas expedientes detallados.',
    3: 'Scholar: Archivista experto; ningún registro oscuro se te escapa.'
  },
  stealth: {
    1: 'Novice: Caminas de puntillas sin hacer crujir el piso.',
    2: 'Practiced: Sigues a alguien a distancia o te infiltras en áreas restringidas.',
    3: 'Skillful: Especialista en infiltración; difícil de ver aunque te busquen.'
  },
  survival: {
    1: 'Novice: Campista de fin de semana; sabes armar una carpa y hacer fuego.',
    2: 'Practiced: Excursionista; sabes navegar por naturaleza y buscar alimento.',
    3: 'Skillful: Rastreador experimentado; sobrevives en entornos hostiles.'
  },
  technology: {
    1: 'Novice: La tecnología doméstica habitual es pan comido para ti.',
    2: 'Practiced: Mantenimiento y reparaciones de TI, hogar y automóviles son sencillos.',
    3: 'Skillful: Bastante destreza para reparar casi todo y crear tecnomagia básica.'
  },

  // KNOWLEDGES
  academics: {
    1: 'Dabbler: Educación primaria y secundaria básica.',
    2: 'Student: Educación universitaria inicial (2 años).',
    3: 'Scholar: Grado universitario completo (4 años).'
  },
  computer: {
    1: 'Dabbler: Habilidades informáticas básicas de la era digital.',
    2: 'Student: Has estudiado sistemas de TI y sabes programar básico.',
    3: 'Scholar: El estudio y la experiencia te hacen competente con sistemas complejos.'
  },
  cosmology: {
    1: 'Dabbler: Sabes que existe la Gauntlet y qué es la Umbra a nivel general.',
    2: 'Student: Comprendes la Penumbra, Near Umbra y reinos espirituales básicos.',
    3: 'Scholar: Navegas caminos espirituales y reconoces jerarquías mayores.'
  },
  enigmas: {
    1: 'Dabbler: Disfrutas de crucigramas y acertijos sencillos.',
    2: 'Student: Detectas patrones y resuelves acertijos lógicos complejos.',
    3: 'Scholar: Las paradojas arcanas y los cifrados antiguos te revelan sus secretos.'
  },
  esoterica: {
    1: 'Dabbler: Has hojeado libros New Age o tomado cursos informales.',
    2: 'Student: Has dedicado tiempo y energía a estudiar temas esotéricos.',
    3: 'Scholar: Esoterista dedicado con años de conocimiento práctico.'
  },
  investigation: {
    1: 'Dabbler: Policía de patrulla.',
    2: 'Student: Detective de policía.',
    3: 'Scholar: Fiscal o jefe de investigación criminal.'
  },
  law: {
    1: 'Dabbler: Conoces tus derechos básicos y normativas de tránsito.',
    2: 'Student: Nivel asistente legal; familiarizado con procedimientos y contratos.',
    3: 'Scholar: Abogado litigante; hábil en argumentos de tribunal.'
  },
  medicine: {
    1: 'Dabbler: Conoces primeros auxilios básicos y RCP.',
    2: 'Student: Puedes tratar traumas menores y enfermedades comunes.',
    3: 'Scholar: Formación médica que te permite realizar tratamientos y diagnósticos complejos.'
  },
  occult: {
    1: 'Dabbler: Crees saber quién fue Crowley y tienes libros de folclore.',
    2: 'Student: Algo de lo que has leído sobre lo sobrenatural es realmente cierto.',
    3: 'Scholar: Tienes experiencia de primera mano en el mundo de las sombras.'
  },
  politics: {
    1: 'Dabbler: Sigues las noticias y las elecciones locales.',
    2: 'Student: Activista local; comprendes las mecánicas de partido.',
    3: 'Scholar: Cabildero experimentado o analista de maniobras de poder.'
  },
  science: {
    1: 'Dabbler: Base científica de escuela secundaria.',
    2: 'Student: Nivel universitario inicial en física, química o biología.',
    3: 'Scholar: Nivel de Maestría/Doctorado en investigación de laboratorio.'
  },
};

export const SECONDARY_ABILITIES = [
  { id: 'acrobatics', name: 'Acrobacia (Acrobatics)', category: 'talents', desc: 'Acrobacias físicas, piruetas y equilibrio superior.' },
  { id: 'carousing', name: 'Juerga (Carousing)', desc: 'Resistencia en fiestas, contactos nocturnos y soltar lenguas.' },
  { id: 'blatancy', name: 'Ostentación Disimulada (Blatancy)', desc: 'Habilidad para hacer pasar efectos mágicos como coincidencias.' },
  { id: 'fast_talk', name: 'Pico de Oro (Fast-Talk)', category: 'talents', desc: 'Persuasión rápida y labia para confundir antes de razonar.' },
  { id: 'hacking', name: 'Hacking Digital', category: 'skills', desc: 'Infiltración avanzada en sistemas informáticos y redes.' },
  { id: 'esoterica', name: 'Esoterismo Específico', category: 'knowledges', desc: 'Estudios en cabala, alquimia, runas o geomancia.' },
  { id: 'finance', name: 'Finanzas (Finance)', category: 'knowledges', desc: 'Análisis de mercados, inversiones y flujos de capital.' }
];