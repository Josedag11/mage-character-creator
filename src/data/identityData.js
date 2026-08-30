// 1. Conceptos Oficiales M20
export const SAMPLE_CONCEPTS = [
  { id: 'activist', name: 'Activista (Activist)', desc: 'Periodista, blogger, activista político o reformador.' },
  { id: 'artist', name: 'Artista (Artist)', desc: 'Pintor, músico, escritor, bailarín o creador visual.' },
  { id: 'athlete', name: 'Atleta (Athlete)', desc: 'Deportista, entrenador, acróbata o buscador de adrenalina.' },
  { id: 'caretaker', name: 'Cuidador (Caretaker)', desc: 'Médico, enfermero, trabajador social o maestro.' },
  { id: 'criminal', name: 'Criminal (Criminal)', desc: 'Hacker de calle, ladrón, contrabandista o mafioso.' },
  { id: 'executive', name: 'Ejecutivo (Executive)', desc: 'Empresario, banquero, gestor o estratega corporativo.' },
  { id: 'guardian', name: 'Guardián (Guardian)', desc: 'Policía, guardia de seguridad, detective o vigilante.' },
  { id: 'intellectual', name: 'Intelectual (Intellectual)', desc: 'Académico, investigador, filósofo o científico.' },
  { id: 'mystic', name: 'Místico (Mystic)', desc: 'Ocultista, chamán, sacerdote o buscador espiritual.' },
  { id: 'rebel', name: 'Rebelde (Rebel)', desc: 'Punk, marginado, disidente o revolucionario.' },
  { id: 'technician', name: 'Técnico (Technician)', desc: 'Ingeniero, mecánico, informático o artesano.' },
  { id: 'warrior', name: 'Guerrero (Warrior)', desc: 'Soldado, mercenario, veterano o luchador.' }
];

// 2. Sub-facciones M20 (Tradiciones, Convenciones y Dispares)
export const SUB_FACTIONS = {
  traditions: [
    { id: 'akashayana', name: 'Akashayana', sphere: 'Mind', desc: 'Maestros del equilibrio mental, la meditación y el combate sin armas.' },
    { id: 'celestial_chorus', name: 'Coro Celestial', sphere: 'Prime', desc: 'Cantores de la Primavera Divina y la Sagrada Canción de la Creación.' },
    { id: 'cult_of_ecstasy', name: 'Culto del Éxtasis', sphere: 'Time', desc: 'Trascendencia a través de sensaciones intensas, música y estados alterados.' },
    { id: 'dreamspeakers', name: 'Habitantes del Sueño', sphere: 'Spirit', desc: 'Chamanes y mediadores entre el mundo material y los espíritus de la Umbra.' },
    { id: 'euthanatos', name: 'Eutanatos', sphere: 'Entropy', desc: 'Guardianes del Gran Ciclo, la muerte piadosa y la Rueda del Karma.' },
    { id: 'order_of_hermes', name: 'Orden de Hermes', sphere: 'Forces', desc: 'Magos eruditos de alta hechicería, sellos arcanos y nombres de poder.' },
    { id: 'society_of_ether', name: 'Hijos del Éter', sphere: 'Matter', desc: 'Científicos visionarios, inventores victorianos y tecnología fantástica.' },
    { id: 'verbena', name: 'Verbena', sphere: 'Life', desc: 'Brujos primigenios, magia de sangre, ciclos paganos y fuerzas vivas.' },
    { id: 'virtual_adepts', name: 'Adeptos Virtuales', sphere: 'Correspondence', desc: 'Hackers de la realidad, exploradores de la Red Digital y cibernética.' }
  ],
  technocracy: [
    { id: 'iteration_x', name: 'Iteración X', sphere: 'Forces / Matter', desc: 'Perfeccionadores de la cibernética, robótica y la biomecánica de precisión.' },
    { id: 'new_world_order', name: 'Nuevo Orden Mundial (NWO)', sphere: 'Mind', desc: 'Custodios del orden social, vigilancia global y control psicológico.' },
    { id: 'progenitors', name: 'Progenitores', sphere: 'Life', desc: 'Ingenieros genéticos, farmacólogos y maestros de la evolución orgánica.' },
    { id: 'syndicate', name: 'El Sindicato', sphere: 'Primal Utility / Entropy', desc: 'Arquitectos del mercado global, las finanzas, el comercio y el valor.' },
    { id: 'void_engineers', name: 'Ingenieros del Vacío', sphere: 'Dimensional Science', desc: 'Exploradores del espacio profundo, las dimensiones Umbrales y fronteras.' }
  ],
  disparates: [
    { id: 'ahl_i_batin', name: 'Ahl-i-Batin', sphere: 'Correspondence / Mind', desc: 'Buscadores sutiles de la Unidad Divina escondidos en las sombras.' },
    { id: 'bataa', name: 'Bata\'a', sphere: 'Life / Spirit', desc: 'Practicantes de Vudú y tradiciones místicas afrocaribeñas.' },
    { id: 'hollow_ones', name: 'Huecos (Hollow Ones)', sphere: 'Libre Elección', desc: 'Románticos góticos rebeldes que combinan retazos de todas las artes.' },
    { id: 'kopa_loei', name: 'Kopa Loei', sphere: 'Forces / Life', desc: 'Navegantes polinesios y sabios de los reinos marinos y elementales.' },
    { id: 'taftani', name: 'Taftani', sphere: 'Forces / Prime', desc: 'Magos persas tejedores de milagros ostentosos y convocadores de genios.' },
    { id: 'wu_lung', name: 'Wu Lung', sphere: 'Spirit / Dragon Magick', desc: 'Burocratas celestiales del Imperio del Dragón y ritos ancestrales.' },
    { id: 'orphans', name: 'Huérfanos (Orphans)', sphere: 'Variable', desc: 'Magos autodespertados sin educación formal en ninguna secta.' }
  ]
};

// 3. Esencias del Avatar M20
export const AVATAR_ESSENCES = [
  { id: 'dynamic', name: 'Dinámico (Dynamic)', desc: 'Fuerza apasionada de cambio constante, innovación e impulso aventurero sin ataduras.' },
  { id: 'pattern', name: 'Patrón / Estático (Pattern)', desc: 'Espíritu de estructura, lógica, orden, estabilidad y principios firmes.' },
  { id: 'primordial', name: 'Primordial (Primordial)', desc: 'Impulso ancestral, instintos antiguos, misterios de la noche y profundidad oculta.' },
  { id: 'questing', name: 'Buscador (Questing)', desc: 'Viajero incansable hacia la iluminación, la exploración y nuevos horizontes.' }
];

// 4. Arquetipos Completos Oficiales para Naturaleza y Conducta M20 (Core Book + Book of Secrets)
export const ARCHETYPES = [
  { id: 'activist', name: 'Activista (Activist)', desc: 'Luchas por reparar las injusticias y transformar un mundo roto.' },
  { id: 'architect', name: 'Arquitecto (Architect)', desc: 'Construyes estructuras duraderas y proyectos estables con visión de futuro.' },
  { id: 'artist', name: 'Artista (Artist)', desc: 'Expresas verdades ocultas y belleza a través del arte y la creatividad.' },
  { id: 'benefactor', name: 'Benefactor', desc: 'Tienes el poder o los recursos para ayudar a otros y asumes esa responsabilidad.' },
  { id: 'bon_vivant', name: 'Gozador (Bon Vivant)', desc: 'Disfrutas del placer, la buena vida y el presente sin inhibiciones.' },
  { id: 'caregiver', name: 'Cuidador (Caregiver / Caretaker)', desc: 'Tu vocación es velar por la protección y bienestar de los demás.' },
  { id: 'child', name: 'Niño (Kid / Child)', desc: 'Inocente, curioso o dependiente; inspiras a otros a cuidarte o guiarte.' },
  { id: 'conformist', name: 'Conformista (Conformist)', desc: 'Prefieres adaptarte al grupo, ser un jugador de equipo y apoyar la estabilidad.' },
  { id: 'conniver', name: 'Manipulador (Conniver)', desc: 'Consigues tus metas mediante astucia, persuasión y buscando el camino más inteligente.' },
  { id: 'contrary', name: 'Contrario (Contrary)', desc: 'Inviertes el orden y las expectativas para revelar verdades más profundas.' },
  { id: 'crusader', name: 'Cruzado (Crusader)', desc: 'Luchador incansable de primera línea por un futuro mejor o una causa noble.' },
  { id: 'director', name: 'Director', desc: 'Te gusta asumir el mando, tomar decisiones y organizar eficientemente.' },
  { id: 'entertainer', name: 'Entretenedor (Entertainer)', desc: 'Buscas conmover, divertir y ser el centro de atención para alegrar a otros.' },
  { id: 'fanatic', name: 'Fanático / Celote (Fanatic / Zealot)', desc: 'Guiado e inspirado por una causa sagrada o ideología inquebrantable.' },
  { id: 'guardian', name: 'Guardián (Guardian)', desc: 'Proteges ferozmente un lugar, grupo, secreto o ideal de cualquier amenaza.' },
  { id: 'hacker', name: 'Hacker', desc: 'Mejoras las cosas desarmándolas, entendiendo su código y reconfigurándolas.' },
  { id: 'heretic', name: 'Hereje (Heretic)', desc: 'Desafías los dogmas establecidos para buscar tu propia verdad personal.' },
  { id: 'idealist', name: 'Idealista (Idealist)', desc: 'Crees firmemente en una gran verdad superior que guía tus actos.' },
  { id: 'innovator', name: 'Innovador (Innovator)', desc: 'Tu imaginación e inventiva constante son el motor del progreso.' },
  { id: 'loner', name: 'Solitario (Loner)', desc: 'Prefieres trabajar de forma independiente sin depender de nadie más.' },
  { id: 'machine', name: 'Máquina (Machine)', desc: 'Frío, eficiente y enfocado; consideras la debilidad emocional algo prescindible.' },
  { id: 'mad_scientist', name: 'Científico Loco (Mad Scientist)', desc: '¡La búsqueda del conocimiento verdadero no conoce límites ni frenos morales!' },
  { id: 'martyr', name: 'Mártir (Martyr)', desc: 'Te sacrificas gustosamente por el bien de los demás o de una causa superior.' },
  { id: 'mentor', name: 'Mentor', desc: 'Tu vocación es enseñar, guiar e inspirar a la siguiente generación.' },
  { id: 'monster', name: 'Monstruo (Monster)', desc: 'Personificas la sombra y la villanía de forma abierta y sin disculpas.' },
  { id: 'prophet', name: 'Profeta (Prophet)', desc: 'Proclamas verdades cruciales e incómodas a un mundo que necesita despertar.' },
  { id: 'rebel', name: 'Rebelde (Rebel)', desc: 'Desafías la autoridad y las reglas impuestas por principio.' },
  { id: 'rogue', name: 'Pícaro (Rogue)', desc: 'La independencia y la rebelión astuta son tu código personal.' },
  { id: 'romantic', name: 'Romántico (Romantic)', desc: 'Buscas la pasión intensa, la belleza ideal y las grandes emociones trascendentes.' },
  { id: 'sensualist', name: 'Sensualista (Sensualist)', desc: 'La experiencia sensorial directa es tu droga y camino de vida.' },
  { id: 'survivor', name: 'Superviviente (Survivor)', desc: 'Pase lo que pase, superas las crisis y tu prioridad es perdurar.' },
  { id: 'traditionalist', name: 'Tradicionalista (Traditionalist)', desc: 'Las viejas costumbres y la sabiduría ancestral son la mejor guía.' },
  { id: 'trickster', name: 'Embaucador (Trickster)', desc: 'Haces del mundo tu juguete y usas el humor para desarmar la solemnidad.' },
  { id: 'tycoon', name: 'Magnate (Tycoon)', desc: 'Acumulas riqueza, influencia y recursos para dominar tu entorno.' },
  { id: 'vigilante', name: 'Vigilante', desc: 'Impones tu propia justicia donde las leyes convencionales han fallado.' },
  { id: 'visionary', name: 'Visionario (Visionary)', desc: 'Ves más allá de lo evidente y persigues un futuro elevado para todos.' }
];

// 5. Paradigmas Oficiales Completos M20
export const PARADIGMS = [
  { id: 'mechanistic', name: 'Un Cosmos Mecanicista (A Mechanistic Cosmos)', desc: 'El universo es una máquina con leyes precisas. El caos es solo una simetría no comprendida.' },
  { id: 'gods_monsters', name: 'Un Mundo de Dioses y Monstruos (A World of Gods and Monsters)', desc: 'Entidades antiguas, deidades o fuerzas sobrenaturales moldean el destino del mundo.' },
  { id: 'golden_age', name: '¡Restaurar la Edad de Oro! (Bring Back the Golden Age!)', desc: 'Existió una era perfecta de sabiduría sagrada que fue quebrantada y debemos recuperar.' },
  { id: 'divine_alive', name: 'La Creación es Divina y Viva (Creation’s Divine and Alive)', desc: 'Toda la naturaleza posee conciencia, aliento sagrado y espíritu interconectado.' },
  { id: 'divine_order', name: 'Orden Divino y Caos Terrenal (Divine Order and Earthly Chaos)', desc: 'El plano superior posee el orden perfecto; el mundo material debe adaptarse a esa voluntad.' },
  { id: 'everything_chaos', name: 'Todo es Caos (Everything is Chaos)', desc: 'No existe un destino o plan predeterminado; solo la Voluntad impone sentido al azar.' },
  { id: 'everything_data', name: 'Todo es Información (Everything is Data)', desc: 'La realidad es un código digital, matriz o simulación que puede reprogramarse.' },
  { id: 'illusion_prison', name: 'Todo es una Ilusión, Prisión o Error (Everything’s an Illusion/Prison)', desc: 'El mundo físico es una celda material u oropel del que debemos despertar o escapar.' },
  { id: 'have_faith', name: 'Todo está Bien: Ten Fe (It’s All Good – Have Faith!)', desc: 'Confianza absoluta en el plan armónico del universo o en una fuerza benévola superior.' },
  { id: 'might_right', name: 'El Poder otorga el Derecho (Might is Right)', desc: 'La evolución o la fuerza pura dictan quién prevalece; los más fuertes moldean la realidad.' },
  { id: 'oblivion_trip', name: 'Viaje sin Retorno al Olvido (One-Way Trip to Oblivion)', desc: 'Todo está condenado al colapso inminente; debemos actuar con fuerza antes del fin.' },
  { id: 'tech_answers', name: 'La Tecnología tiene todas las Respuestas (Tech Holds All Answers)', desc: 'La ciencia y el progreso industrial son la única herramienta fiable para la Ascensión.' },
  { id: 'aliens_made_us', name: 'Los Alienígenas nos hacen lo que Somos (Aliens Make Us What We Are)', desc: 'La "magia" es ciencia extraterrestre avanzada. Seres de las estrellas guían nuestra evolución.' },
  { id: 'power_from_gods', name: 'Todo Poder Proviene de Dios / Dioses (All Power Comes from God(s))', desc: 'Los milagros provienen directamente de la devoción y obediencia a la divinidad.' },
  { id: 'world_stage', name: 'Todo el Mundo es un Escenario (All the World’s a Stage)', desc: 'La realidad es un guión o representación teatral donde podemos reescribir nuestros papeles.' },
  { id: 'ancient_wisdom', name: 'La Sabiduría Ancestral es la Clave (Ancient Wisdom is the Key)', desc: 'Las civilizaciones perdidas (Mu, Atlántida) poseían el conocimiento místico más puro.' },
  { id: 'consciousness_reality', name: 'La Conciencia es la Única Realidad (Consciousness is True Reality)', desc: 'El mundo físico es solo una construcción de nuestras percepciones e intenciones.' },
  { id: 'embrace_threshold', name: 'Abraza el Umbral (Embrace the Threshold)', desc: 'Trascender los límites humanos mediante estados extremos, cibernética y transhumanismo.' },
  { id: 'holographic_reality', name: 'Una Realidad Holográfica (A Holographic Reality)', desc: 'La materia es energía condensada en un holograma; todo está interconectado en la Unidad.' },
  { id: 'transcend_limits', name: 'Trasciende tus Límites (Transcend Your Limits)', desc: 'No existen fronteras reales excepto las limitaciones que nosotros mismos elegimos aceptar.' },
  { id: 'keys_to_reality', name: 'Girar las Llaves de la Realidad (Turning the Keys to Reality)', desc: 'El Creador dejó fórmulas y llaves místicas para que los iniciados elegidos dirijan el cosmos.' },
  { id: 'meant_wild', name: 'Estamos Destinados a ser Salvajes (We are Meant to be Wild)', desc: 'La civilización es una trampa sofocante. La verdad y el poder residen en el instinto primario.' },
  { id: 'not_men', name: '¡NO Somos Hombres! (We Are NOT Men!)', desc: 'Superar y descartar la condición biológica o social humana convencional.' },
  { id: 'gods_in_disguise', name: 'Todos Somos Dios(es) Disfrazados (We’re All God(s) in Disguise)', desc: 'La separación es una ilusión. Cada alma despierta es un fragmento de la divinidad viva.' }
];

// 6. Prácticas Mágicas Oficiales Completas M20
export const PRACTICES = [
  { id: 'alchemy', name: 'Alquimia (Alchemy)', desc: 'Transmutación de materia, elixires químicos y purificación de sustancias.' },
  { id: 'art_of_desire', name: 'El Arte del Deseo / Hipereconomía', desc: 'Manipulación del flujo de dinero, riqueza, estatus e influencia social.' },
  { id: 'martial_arts', name: 'Artes Marciales / Do (Martial Arts)', desc: 'Canalización de energía vital (Chi/Ki) mediante rigor y disciplina física.' },
  { id: 'bardism', name: 'Bardismo / Arte Místico (Bardism)', desc: 'Música, poesía, actuación y canciones de poder que alteran el entorno.' },
  { id: 'witchcraft', name: 'Brujería / Arte Pagano (Witchcraft)', desc: 'Pociones, hierbas, fases lunares, calderos y la Rueda del Año.' },
  { id: 'shamanism', name: 'Chamanismo / Trabajo de Espíritus', desc: 'Trances, ritmos de tambor, viajes astrales y mediación con espíritus.' },
  { id: 'weird_science', name: 'Ciencia Extraña / Mad Science', desc: 'Inventos extravagantes, generadores de rayos y ciencia incomprendida.' },
  { id: 'cybernetics', name: 'Cibernética (Cybernetics)', desc: 'Mejora tecnológica del cuerpo mediante implantes biomecánicos y prótesis.' },
  { id: 'dominion', name: 'Dominio / Dominación (Dominion)', desc: 'Jerarquía formal, órdenes de mando y autoridad sobre la voluntad ajena.' },
  { id: 'elementalism', name: 'Elementalismo (Elementalism)', desc: 'Conexión y canalización de las fuerzas primarias (fuego, agua, tierra, aire).' },
  { id: 'faith', name: 'Fe / Devoción (Faith)', desc: 'Invocación de milagros divinos mediante oración, santidad y fervor religioso.' },
  { id: 'high_magick', name: 'Alta Magia Ritual (High Ritual Magick)', desc: 'Invocaciones arcanas, círculos de protección, nombres sagrados y sellos.' },
  { id: 'gutter_magick', name: 'Magia Callejera (Gutter Magick)', desc: 'Misticismo urbano improvisado con grafiti, símbolos y objetos cotidianos.' },
  { id: 'chaos_magick', name: 'Magia del Caos (Chaos Magick)', desc: 'Experimentación sincrética, uso de símbolos mezclados y voluntad pura.' },
  { id: 'maleficia', name: 'Maleficia / Magia Negra (Maleficia)', desc: 'Maldiciones, mal de ojo, ataduras oscuras y pactos prohibidos.' },
  { id: 'medicine_work', name: 'Medicina Mística / Curanderismo', desc: 'Remedios tradicionales, anatomía holística y purificación de la carne.' },
  { id: 'mediumship', name: 'Mediumnidad / Espiritismo', desc: 'Comunicación con los muertos, nigromancia y canalización de fantasmas.' },
  { id: 'psionics', name: 'Psiónica / Poderes Mentales (Psionics)', desc: 'Entrenamiento de la mente para generar telepatía, telequinesis y ESP.' },
  { id: 'craftwork', name: 'Realización Artesanal (Craftwork)', desc: 'Forja, orfebrería, creación manual y grabado de objetos de poder.' },
  { id: 'reality_hacking', name: 'Hacking de la Realidad (Reality Hacking)', desc: 'Reprogramación del código del universo mediante computadoras y datos.' },
  { id: 'crazy_wisdom', name: 'Sabiduría Loca (Crazy Wisdom)', desc: 'Ruptura de paradigmas mediante paradojas, provocación y lo absurdo.' },
  { id: 'voudoun', name: 'Vudú / Voudoun (Voudoun)', desc: 'Posesión de Loas, tambores, sacrificios y conexión con los ancestros.' },
  { id: 'yoga', name: 'Yoga y Ascetismo (Yoga)', desc: 'Control de los flujos de energía (Prana), chacras y disciplina meditativa.' }
];