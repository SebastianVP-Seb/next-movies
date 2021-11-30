import { v4 as uuidv4 } from 'uuid';

const ACCION=[
    {
      id: uuidv4(),
      title: 'Venom: Carnage liberado',
      imageUrl: '/accion/venom2.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=F4Ygcigj0Gk',
      overview: 'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady.',
      year: '2021'
    },
      {
        id: uuidv4(),
        title: 'Agentes CIPOL',
        imageUrl: '/accion/cipol.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=EuQ4CmjpTPc',
        overview: 'Los agentes secretos Napoleon Solo y la sensual rusa Illya Kuryakin luchan contra una organización criminal internacional.',
        year: '2015'
      },
      // {
      //   id: uuidv4(),
      //   title: 'Ciudad de ladrones',
      //   imageUrl: '',
      //   trailerUrl:''
      // },
      {
        id: uuidv4(),
        title: 'Asesino del futuro',
        imageUrl: '/accion/asesino_del_futuro.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=mpUeCUxRgMw',
        overview: 'En el 2072, los asesinatos están prohibidos y los viajes en el tiempo existen, pero solo para aquellos que pueden pagarlos en el mercado negro. La mafia envía a sus víctimas al año 2042 para que unos sicarios, llamados loopers, los eliminen. Uno de estos loopers se lleva una sorpresa cuando le encargan asesinar a su yo de dentro de 30 años.',
        year: '2012'
      },
      {
        id: uuidv4(),
        title: 'Baby driver',
        imageUrl: '/accion/Baby_Driver.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=z2z857RSfhk',
        overview: 'Baby es un chofer especializado en fugas que, enamorado, pretende dejar la vida criminal y empezar de cero con la mujer que ama. Cuando el jefe de una banda de gánsters le obliga a trabajar para él y la operación fracasa, su vida y la de su chica pasan a estar en peligro.',
        year: '2017'
      },
      {
        id: uuidv4(),
        title: 'Código sombra',
        imageUrl: '/accion/codigo_sombra.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=ZtsJJMYYdcA',
        overview: 'Un oligarca ruso va a poner en marcha un acto terrorista financiero que podría hacer caer a EEUU. Mientras, en Wall Street, el agente de la CIA Jack Ryan, está a punto de que le encarguen su primera misión de campo, llena de la acción más peligrosa.',
        year: '2014'
      },
      {
        id: uuidv4(),
        title: 'Black widow',
        imageUrl: '/accion/black-widow.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=HlB_8y3cmUg',
        overview: 'Una peligrosa conspiración, relacionada con su pasado, persigue a Natasha Romanoff, también conocida como Viuda Negra. La agente tendrá que lidiar con las consecuencias de haber sido espía, así como con las relaciones rotas, para sobrevivir.',
        year: '2021'
      },
      {
        id: uuidv4(),
        title: 'Deadpool',
        imageUrl: '/accion/deadpool1.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=0JnRdfiUMa8',
        overview: 'Wade Wilson, tras ser sometido a un cruel experimento científico, adquiere poderes especiales que le convierten en Deadpool. Armado con sus nuevas habilidades y un retorcido sentido del humor tratará de dar caza al hombre que casi destruye su vida.',
        year: '2016'
      },
      {
        id: uuidv4(),
        title: 'Deadpool 2',
        imageUrl: '/accion/Deadpool_2.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=GEViXLNHFdA',
        overview: 'Deadpool trabaja ahora a escala internacional, eliminando a asesinos de masas, gánsteres, traficantes de personas y demás indeseables. Se creen intocables, pero Deadpool sabe cómo deshacerse de ellos de la forma más complicada, desmedida y sangrienta posible.',
        year: '2018'
      },
      // {
      //   id: uuidv4(),
      //   title: 'Bourne',
      //   imageUrl: '',
      //   trailerUrl:''
      // },
      // {
      //   id: uuidv4(),
      //   title: 'El legado Bourne',
      //   imageUrl: '',
      //   trailerUrl:''
      // },
      {
        id: uuidv4(),
        title: 'Drive',
        imageUrl: '/accion/drive.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=LrvTE9cYypM',
        overview: 'Un misterioso conductor especialista de cine y mecánico en un taller, por la noche se convierte en un talentoso chófer para delincuentes. Su jefe, Shannon le busca trabajos en películas de Hollywood o fugas para criminales.',
        year: '2012'
      },
      // {
      //   id: uuidv4(),
      //   title: 'End Game',
      //   imageUrl: '/accion/.jpg',
      //   trailerUrl:''
      // },
      {
        id: uuidv4(),
        title: 'Escuadrón suicida',
        imageUrl: '/accion/Escuadron_Suicida1.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=CmRih_VtVAs',
        overview: 'La oficial del departamento de inteligencia de los EE.UU., Amanda Waller, ha convocado a un grupo de individuos dispares y viles que no tienen nada que perder.',
        year: '2016'
      },
      {
        id: uuidv4(),
        title: 'Escuadrón suicida 2',
        imageUrl: '/accion/Escuadron_suicida2.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=45Q9OBF21vg',
        overview: 'Con tal de salir de una prisión infernal, los supervillanos más peligrosos del mundo aceptan una misión del Gobierno: viajar a una remota isla, enemiga de los Estados Unidos y repleta de soldados, para destruir un laboratorio de alta tecnología.',
        year: '2021'
      },
      {
        id: uuidv4(),
        title: 'John Wick 1',
        imageUrl: '/accion/John_Wick_1.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=C0BMx-qxsP4',
        overview: 'John Wick, un exasesino a sueldo, se enfrenta al mafioso Viggo Tarazov, quien ofrece una recompensa a aquel que logre acabar con la vida de Wick.',
        year: '2014'
      },
      {
        id: uuidv4(),
        title: 'John Wick 2',
        imageUrl: '/accion/John_Wick_2.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=gr-KEvuW6So',
        overview: 'El legendario asesino John Wick se ve obligado a salir de su retiro por culpa de un exsocio que intenta controlar un siniestro grupo internacional de asesinos. Obligado a ayudarle por un juramento de sangre, John viaja a Roma para enfrentarse a algunos de los asesinos más letales del mundo.',
        year: '2017'
      },
      {
        id: uuidv4(),
        title: 'John Wick 3',
        imageUrl: '/accion/John_wick_3.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=30R7Io_DmyU',
        overview: 'John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.',
        year: '2019'
      },

      {
        id: uuidv4(),
        title: 'Fast&Furious 1',
        imageUrl: '/accion/f&f1.jpg',
        trailerUrl:'',
        overview: 'Cada noche, Los Ángeles es testigo de alguna carrera de coches. Últimamente ha aparecido un nuevo corredor, todos saben que es duro y que es rápido, pero lo que no saben es que es un detective con la determinación de salir victorioso.',
        year: '2001'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious 2',
        imageUrl: '/accion/f&f2.jpg',
        trailerUrl:'',
        overview: 'Brian O Conner ayuda a la policía de Miami y se infiltra en el mundo de las carreras ilegales, esperando así redimirse ante sus superiores.',
        year: '2003'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious 4',
        imageUrl: '/accion/f&f4.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=mUXekPixdNo',
        overview: 'El ex convicto Dominic Toretto se une a su viejo adversario, Brian O Conner, que ahora trabaja para el FBI en Los Ángeles, con el fin de infiltrarse en una organización criminal que se dedica a introducir heroína en la ciudad.',
        year: '2009'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious 5',
        imageUrl: '/accion/f&f5.jpg',
        trailerUrl:'',
        overview: 'Los viejos amigos Dominic y Mia Toretto y Brian O Conner se encuentran ahora en Río de Janeiro, donde pretenden dar un último golpe con el fin de obtener su libertad. Para ello reúnen a un grupo de élite de pilotos experimentados.',
        year: '2011'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious 6',
        imageUrl: '/accion/f&f6.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=h21C_UlOryw',
        overview: 'Desde que el robo de Dom y Brian en Río los dejó a ellos y a su equipo con mucho dinero, ellos se dispersan por todo el mundo; sin embargo, ellos tienen que vivir como fugitivos, incapaces de regresar con sus familias. Mientras tanto, el agente Hobbs ha estado persiguiendo a unos conductores mercenarios cuyo segundo al mando es alguien que Don conoce.',
        year: '2013'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious 7',
        imageUrl: '/accion/f&f7.jpg',
        trailerUrl:'',
        overview: 'Hace un año que Dominic y Brian fueron indultados y pudieron regresar a los Estados Unidos. Después de su llegada desean adaptarse a su nueva vida dentro de la legalidad, pero las cosas no son tan fáciles. Dom quiere acercarse a Letty y Brian se acostumbra a la vida en una urbanización con Mia y su hijo.',
        year: '2015'
      },

      {
        id: uuidv4(),
        title: 'Fast&Furious 9',
        imageUrl: '/accion/f&f9.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=ElLP7HAwUAw',
        overview: 'Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom.',
        year: '2021'
      },
      {
        id: uuidv4(),
        title: 'Fast&Furious-Hobbs&Shaw',
        imageUrl: '/accion/f&fH&S.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=10R6Nku7DrI',
        overview: 'En el pasado, Hobbs encarceló a Shaw después de que este intentara matarlo. Ahora deben aliarse para combatir al terrorista Brixton, que tiene una fuerza sobrenatural.',
        year: '2019'
      },
      {
        id: uuidv4(),
        title: 'Fury',
        imageUrl: '/accion/fury.jpg',
        trailerUrl:'',
        overview: 'Al mando del veterano sargento Wardaddy, una brigada de cinco soldados americanos a bordo de un tanque, luchan contra un ejército nazi al borde de la desesperación ya que los alemanes sabían que su derrota estaba ya cantada por aquel entonces.',
        year: '2014'
      },
      {
        id: uuidv4(),
        title: 'Godzilla vs King Kong',
        imageUrl: '/accion/Godzilla_vs_Kong.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=PXLGGqEHQ-U',
        overview: 'Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad.',
        year: '2021'
      },
      {
        id: uuidv4(),
        title: 'Guardianes de altamar',
        imageUrl: '/accion/guardianes_altamar.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=alpBWy1yzLs',
        overview: 'Tras perder a su equipo en un trágico accidente en alta mar, el legendario miembro de la Guardia Costera norteamericana, Ben Randall, es enviado como instructor de nuevos reclutas del equipo de rescate profesional.',
        year: '2006'
      },
      // {
      //   id: uuidv4(),
      //   title: 'Jack Reacher 1',
      //   imageUrl: '',
      //   trailerUrl:''
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Jack Reacher 2',
      //   imageUrl: '',
      //   trailerUrl:''
      // },
      {
        id: uuidv4(),
        title: 'Kingsman',
        imageUrl: '/accion/kingsman.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=B57W1IX86Ck',
        overview: 'Gary "Eggsy" Unwin, cuyo fallecido padre trabajó calladamente para una agencia de espionaje ultrasecreta, vive en una urbanización del sur de Londres y parece dirigirse hacia las rejas. Sin embargo, el elegante agente Harry Hart reconoce el potencial del muchacho y lo recluta para ser un aprendiz en el servicio secreto. ',
        year: '2015'
      },
      {
        id: uuidv4(),
        title: 'La gran estafa',
        imageUrl: '/accion/La_gran_estafa.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=YNBBj47zx44',
        overview: 'El plan está listo. Las reglas son claras. Si todo les sale bien a los bandidos de Danny Ocean, la estafa que planean les dará la recompensa es de $150 millones de dólares. Haz la cuenta.',
        year: '2001'
      },
      {
        id: uuidv4(),
        title: 'La nueva gran estafa',
        imageUrl: '/accion/Ocean_Twelve_2004.jpg',
        trailerUrl:'',
        overview: 'Justo después de salir de prisión en libertad condicional, Danny Ocean planea su próximo robo. En este caso, el carismático ladrón quiere robar 150 millones de dólares de tres casinos de Las Vegas.',
        year: '2004'
      },
      {
        id: uuidv4(),
        title: 'Las estafadoras',
        imageUrl: '/accion/Oceans_8.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=MKWNZqvs3-s',
        overview: 'Debbie Ocean, la hermana de Danny, pretende cometer el atraco del siglo durante la gala Met que se celebra en Nueva York: quiere robar un collar valorado en más de 150 millones de dólares. Debbie embarca en la misión a siete ladronas expertas.',
        year: '2018'
      },
      {
        id: uuidv4(),
        title: 'Los 7 magníficos',
        imageUrl: '/accion/siete_magnificos.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=x1ILKoZIbrI',
        overview: 'El pueblo de Rose Creek se encuentra bajo el control devastador del industrial Bartholomew Bogue, así que sus desesperados habitantes solicitan la protección de siete forajidos cazarrecompensas.',
        year: '2016'
      },
      {
        id: uuidv4(),
        title: 'Los domésticos',
        imageUrl: '/accion/domesticos.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=IrcQhTm2h2I',
        overview: 'En un mundo post-apocalíptico controlado por bandas sanguinarias, una pareja intenta buscar refugio donde ocultarse. Una de estas pandillas de salvajes asesinos pone a la pareja en su punto de mira, por lo que ellos harán lo que nunca hubieran imaginado para sobrevivir.',
        year: '2018'
      },
      {
        id: uuidv4(),
        title: 'Hombres de negro: Internacional',
        imageUrl: '/accion/mib_international.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=88GbIpWayEU',
        overview: 'En esta entrega, los Hombres de Negro, que siempre han protegido la Tierra, deben descubrir un topo dentro de la organización MIB. Para luchar contra unos nuevos malévolos aliens camuflados como humanos utilizarán una gran tecnología.',
        year: '2019'
      },
      {
        id: uuidv4(),
        title: 'La Noche De La Expiación',
        imageUrl: '/accion/purga1.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=69YJMqxKSfI',
        overview: 'Año 2022. En una futura sociedad despótica, el régimen político, llamado Nueva Fundación de los padres de América, ha decidido implantar una medida catártica: la purga anual, según la cual una noche al año se puede cometer cualquier clase de crimen, sin tener que responder ante la justicia.',
        year: '2013'
      },
      {
        id: uuidv4(),
        title: '12 horas para sobrevivir',
        imageUrl: '/accion/purga2.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=_-zpx7i8uOU',
        overview: 'Durante una noche de caos sancionada por el gobierno, la misión de un hombre para vengar a su hijo muerto se transforma en una búsqueda para proteger a unos desconocidos de unos asaltantes violentos.',
        year: '2014'
      },
      {
        id: uuidv4(),
        title: '12 horas para sobrevivir: el año de la elección',
        imageUrl: '/accion/purga3.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=nk-ZdQ-0guk',
        overview: 'Hace 18 años, Charlie Roan presenció el asesinato de su familia durante la noche de la Purga. En el presente, Charlie es candidata a la presidencia y quiere acabar con el régimen impuesto hace 20 años, que utiliza este día para eliminar a los más pobres y recortar el gasto público, pero antes deberá sobrevivir a doce horas de terror absoluto.',
        year: '2016'
      },
      {
        id: uuidv4(),
        title: '12 horas para sobrevivir: el inicio',
        imageUrl: '/accion/purga4.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=LqF4Z3Nf8Wc',
        overview: 'La crisis social y económica que atenaza a Estados Unidos ha llevado al poder al partido populista Nuevos Padres Fundadores de América y a su discurso del miedo. Una de sus primeras medidas será un experimento: una noche de crimen legalizado en la zona de Staten Island. ¡Que comience la purga!',
        year: '2018'
      },
      {
        id: uuidv4(),
        title: 'La purga por siempre',
        imageUrl: '/accion/La_Purga_Infinita.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=mtoH--n1jtE',
        overview: 'Adela y su marido, Juan, viven en Texas, donde él trabaja como peón de rancho para la adinerada familia Tucker. En la mañana después de la Purga, una banda de asesinos enmascarados ataca a los Tucker, obligando a ambas familias a unirse y luchar.',
        year: '2021'
      },
      {
        id: uuidv4(),
        title: 'Proyecto Géminis',
        imageUrl: '/accion/proyecto_geminis.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=6OONW4k1izs',
        overview: 'Henry Bogan, un asesino a sueldo, pretende retirarse porque se siente viejo. Sin embargo, hay alguien que no está dispuesto a permitírselo porque tiene la misión de matarlo: un clon suyo más joven, más rápido y más fuerte.',
        year: '2019'
      },
      {
        id: uuidv4(),
        title: 'Sin escape',
        imageUrl: '/accion/Sin_Escape.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=1BzM_ijzTk4',
        overview: 'Jack Dwyer, un hombre de negocios norteamericano, y su familia se ven atrapados en medio de un violento golpe de estado en un país del Sudeste Asiático que iba a ser su nuevo hogar.',
        year: '2015'
      },
      {
        id: uuidv4(),
        title: 'Operación Valkiria',
        imageUrl: '/accion/Valkiriaop.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=iewO3GceGYQ',
        overview: 'El coronel Claus Von Stauffenberg, un aristócrata alemán, regresa de África gravemente herido en combate y, tras unirse a la resistencia alemana, se convierte en el cerebro de la Operación Valkiria, cuyo objetivo es derrocar el régimen nazi.',
        year: '2008'
      },
      {
        id: uuidv4(),
        title: 'Terminator: destino oculto',
        imageUrl: '/accion/terminator2019.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=EQemVwDKDyg',
        overview: 'Un nuevo tipo de Terminator llega desde el futuro a la Ciudad de México para asesinar a una joven llamada Dani Ramos. Sin embargo, también viaja al presente desde el futuro Grace, un híbrido entre cyborg y humano que debe, con la ayuda de Sarah Connor, proteger a Ramos del aparentemente indestructible robot asesino.',
        year: '2019'
      },
      {
        id: uuidv4(),
        title: 'Spider man: Lejos de casa',
        imageUrl: '/accion/spiderman-lejos-de-casa.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=m4DVLBdHiG0',
        overview: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
        year: '2019'
      },
      {
        id: uuidv4(),
        title: 'Titanes del Pacífico 1',
        imageUrl: '/accion/Titanes_del_Pacifico_1.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=jpyPOlbsSwk',
        overview: 'Hace mucho tiempo, legiones de criaturas monstruosas llamados Kaiju surgen del mar, llevando consigo una guerra. Para pelear a los Kaiju, la humanidad desarrolla robots gigantes llamados Jaegers, diseñados para ser piloteados por dos humanos. Sin embargo, ni los Jaegers son suficientes para vencer a los Kaiju, y la humanidad está al borde de la derrota.',
        year: '2013'
      },
      {
        id: uuidv4(),
        title: 'Titanes del Pacífico 2',
        imageUrl: '/accion/Titanes_del_Pacifico_2.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=nL0BX30LftI',
        overview: 'Una raza alienígena intenta destruir la Tierra. A la humanidad solo le queda una esperanza, que Jake Pendergast, un prometedor piloto del programa de defensa que abandonó su carrera para dedicarse al crimen, acepte el reto de salvar el planeta.',
        year: '2018'
      },

      {
        id: uuidv4(),
        title: 'Misión imposible: Fallout',
        imageUrl: '/accion/mi_fallout.jpg',
        trailerUrl:'https://www.youtube.com/watch?v=rWGeWUJ17ek',
        overview: 'El espía Ethan Hunt recibe en Belfast un mensaje secreto: los autodenominados "Apóstoles", seguidores del anarquista Solomon Lane, capturado por Hunt hace dos años, están intentando hacerse con tres núcleos de plutonio para crear potentes armas nucleares muy fáciles de transportar.',
        year: '2018'
      },
];

export default ACCION;