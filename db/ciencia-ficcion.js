import { v4 as uuidv4 } from 'uuid';

const CIENCIA_FICCION=[
  {
    id: uuidv4(),
    title: 'Desafío Total',
    imageUrl: '/ciencia-ficcion/total.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=qJEgIxPkdB4',
    overview: 'El obrero Douglas Quaid necesita unas vacaciones de su vida ordinaria y visita Rekall, una compañía que puede transformar los sueños en recuerdos reales. Pensando que esos recuerdos como súper-espía son su boleto, Quaid se somete al procedimiento, pero las cosas salen mal.',
    year: '2012',
    background: '/ciencia-ficcion/total.jpg'
  },
  {
    id: uuidv4(),
    title: 'In Time - El Precio Del Mañana',
    imageUrl: '/accion/time.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=cf7UMfYAcoc',
    overview: 'El hallazgo de una fórmula contra el envejecimiento trae consigo no sólo superpoblación, sino también la transformación del tiempo en moneda de cambio. Los ricos pueden vivir para siempre, pero los demás tendrán que negociar cada minuto de vida.',
    year: '2011',
    background: '/accion/time.jpg'
  },
  {
    id: uuidv4(),
    title: 'Sin rumbo',
    imageUrl: '/ciencia-ficcion/rumbo.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=Uu8-bt3cjrU',
    overview: 'Tras sufrir un traumático accidente, Adrienne se encuentra desorientada en una especie de limbo, atrapada en el tiempo y observando pasar la vida desde la distancia.',
    year: '2020',
    background: '/ciencia-ficcion/rumbo.jpg'
  },
  {
    id: uuidv4(),
    title: 'Al filo del mañana',
    imageUrl: '/ciencia-ficcion/Al_filo_del_ma.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=j2pcppI4HBg',
    overview: 'En un futuro no muy lejano, una raza de alienígenas invade la Tierra y ninguna fuerza militar es capaz de impedirlo. Al comandante William Cage, quien nunca ha entrado en combate, le encargan una misión casi suicida en la que pierde la vida.',
    year: '2014'
  },
  {
    id: uuidv4(),
    title: 'Battle Angel: la última guerrera',
    imageUrl: '/ciencia-ficcion/alita.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=LUg0yNkIIQA',
    overview: 'En el 2563, trescientos años después de la Caída, el doctor Dyson Ido encuentra entre la chatarra la cabeza de una ciborg. Aunque la mayor parte de su cibercuerpo ya no existe, su cerebro, completamente humano, está milagrosamente intacto.',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Chaos walking',
    imageUrl: '/ciencia-ficcion/Chaos_Walking.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=2PC3sAcblr8',
    overview: 'Cuenta el aterrizaje accidentado de una nave en un planeta que fue colonizado décadas atrás. La única superviviente, Viola descubre que solo hay hombres en el planeta y que por un extraño fenómeno que solo les afecta a ellos, se pueden oir y ver sus pensamientos.',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'Maze Runner: correr o morir',
    imageUrl: '/ciencia-ficcion/Maze_runner1.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=KNYPRt6SfrE',
    overview: 'Thomas es un adolescente cuya memoria fue borrada y que ha sido encerrado junto a otros chicos de su edad en un laberinto plagado de monstruos y misterios. Para sobrevivir, tendrá que adaptarse a las normas y a los demás habitantes del laberinto.',
    year: '2014'
  },
  {
    id: uuidv4(),
    title: 'Maze Runner: prueba de fuego',
    imageUrl: '/ciencia-ficcion/Prueba_de_Fuego.png',
    trailerUrl:'https://www.youtube.com/watch?v=Q6DSVZ-SEZE',
    overview: 'Tras escapar de El Laberinto, Thomas y sus compañeros llegan en helicóptero a un recinto desconocido que está siendo atacado por los raros o humanos infectados. Allí los recibe el señor Janson, quien les anuncia que es el director del lugar, un refugio en el que estarán protegidos de CRUEL.',
    year: '2015'
  },
  {
    id: uuidv4(),
    title: 'Maze Runner: la cura mortal',
    imageUrl: '/ciencia-ficcion/maze_runner3.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=9KfGomlty0A',
    overview: 'Thomas no puede confiar en CRUEL. La organización le borró los recuerdos y lo encerró en el Laberinto. Después lo dejó al borde de la muerte, en el Desierto.',
    year: '2018'
  },
  {
    id: uuidv4(),
    title: 'El hombre invisible',
    imageUrl: '/ciencia-ficcion/hombre_invisible.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=3jAV6po6cIA',
    overview: 'Un científico loco finge su suicidio y luego utiliza su invisibilidad para aterrorizar a su expareja, quien decide enfrentar al hombre invisible ella misma luego de que la policía no creyera su historia.',
    year: '2020'
  },
  // {
  //   id: uuidv4(),
  //   title: 'In time',
  //   imageUrl: '',
  //   trailerUrl:''
  // },
  {
    id: uuidv4(),
    title: 'Escape Room: sin salida',
    imageUrl: '/ciencia-ficcion/escape1.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=TghZEB2kfjM',
    overview: 'Seis personas, sin ninguna relación entre sí, reciben un misterioso paquete. Su interior contiene un mensaje que promete al propietario una oportunidad para alejarse de su vida rutinaria: participar en un "escape room".',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Escape Room 2: reto mortal',
    imageUrl: '/ciencia-ficcion/scape_room2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=zXA0nrukD0c',
    overview: 'Continuación del éxito de terror "Escape Room" sobre una edición mortal del divertido juego en el que los participantes tienen que librarse de acertijos en las habitaciones.',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'Línea Mortal',
    imageUrl: '/ciencia-ficcion/FLATLINERS.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=gUDV0CUzG0k',
    overview: 'Cinco estudiantes de medicina, con la esperanza de desentrañar el misterio de lo que aguarda más allá de los confines de la vida, emprenden un atrevido y peligroso experimento. A base de detener su corazón durante un breve lapso de tiempo, cada uno de ellos sufre una experiencia cercana a la muerte clínica.',
    year: '2017'
  },
  // {
  //   id: uuidv4(),
  //   title: 'Koma',
  //   imageUrl: '',
  //   trailerUrl:''
  // },
  {
    id: uuidv4(),
    title: 'La quinta ola',
    imageUrl: '/ciencia-ficcion/quinta_ola.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=0UNYlUXSCc0',
    overview: 'En una Tierra en la que prácticamente no quedan supervivientes humanos tras las cuatro oleadas de una planificada invasión extraterrestre, la joven Cassie Sullivan trata de sobrevivir entre el miedo y la desconfianza.',
    year: '2016'
  },
  {
    id: uuidv4(),
    title: 'La guerra del mañana',
    imageUrl: '/ciencia-ficcion/guerra_manana.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=pbyJSTQlf5I',
    overview: 'Un grupo de viajeros en el tiempo se transporta desde el año 2051 para entregar un mensaje urgente: la humanidad está perdiendo la guerra mundial contra unos alienígenas. La única esperanza es que los ciudadanos del presente se unan a la lucha.',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'La gran muralla',
    imageUrl: '/ciencia-ficcion/gran_muralla.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=Vv1bF_djMAY',
    overview: 'Tras seis meses recorriendo China para intentar encontrar la pólvora negra que convierte el aire en fuego y mata a una docena de hombres de una sola vez, unos mercenarios europeos son atacados por un extraño ser.',
    year: '2016'
  },
  {
    id: uuidv4(),
    title: 'Divergente',
    imageUrl: '/ciencia-ficcion/divergente.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=IioBZ0rJdyI',
    overview: 'En una sociedad futura, la gente se divide en facciones según sus virtudes personales. Después de que la joven Tris sea declarada divergente y, por tanto, nunca encajará en ningún grupo, ella descubre un complot para destruir a quienes son como ella.',
    year: '2014'
  },
  {
    id: uuidv4(),
    title: 'Divergente 2: Insurgente',
    imageUrl: '/ciencia-ficcion/insurgente.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=SSAyV836dfk',
    overview: 'Tris y Cuatro se convierten en fugitivos que tratan de eludir la persecución de Jeanine, la líder de los eruditos. Los dos buscarán entre las ruinas de Chicago qué es lo que la familia de Tris defendió con tanto sacrificio.',
    year: '2015'
  },
  {
    id: uuidv4(),
    title: 'Divergente 3: Leal',
    imageUrl: '/ciencia-ficcion/leal.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=C9XiAqQGJf4',
    overview: 'Tras la muerte de Jeanine, Evelyn maneja la ciudad con puño de hierro, los muros siguen cerrados y los miembros de Erudición que trabajaban con la antigua líder están siendo ejecutados. Mientras, Tris y Cuatro planean acceder al mundo exterior.',
    year: '2016'
  },
  {
    id: uuidv4(),
    title: 'Matrix',
    imageUrl: '/ciencia-ficcion/Matrix.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=OM0tSTEQCQA',
    overview: 'El programador informático Thomas Anderson, más conocido en el mundo de los "hacker" como Neo, está en el punto de mira del temible agente Smith. Otros dos piratas informáticos, Trinity y Morfeo, se ponen en contacto con Neo para ayudarlo a escapar. Matrix te posee. Sigue al conejo blanco.',
    year: '1999'
  },
  {
    id: uuidv4(),
    title: 'Matrix: Recargado',
    imageUrl: '/ciencia-ficcion/Matrix2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=kYzz0FSgpSU',
    overview: '250.000 centinelas del Ejército de las Máquinas se dirigen hacia la ciudad oculta de Sión, último enclave de supervivencia de los humanos. Morfeo, Trinity y Neo disponen de 72 horas hasta que las máquinas lleguen al santuario humano. Las hermanas Lilly y Lana Wachowski alcanzarán una repercusión inesperada.',
    year: '2003'
  },
  {
    id: uuidv4(),
    title: 'Matrix: Revoluciones',
    imageUrl: '/ciencia-ficcion/Matrix_Revolutions3.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=pc1IhO2szrc',
    overview: 'Neo sigue adquiriendo nuevos poderes. Ahora, algo más cansado, ha llegado a la tierra de nadie, un tranquilo lugar entre Matrix y el mundo de las máquinas. Trinity vela el cuerpo en coma de Neo, mientras Morfeo se enfrenta a una revelación.',
    year: '2003'
  },
  {
    id: uuidv4(),
    title: 'Mentes poderosas',
    imageUrl: '/ciencia-ficcion/mentes_poderosas.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=5W1y5Fgx1u8',
    overview: 'Después de que una enfermedad matase al 98 por ciento de los niños y jóvenes de los Estados Unidos, el 2 por ciento que consiguió sobrevivir ha desarrollado superpoderes, pero se les ha encerrado en campos de internamiento al ser declarados una amenaza.',
    year: '2018'
  },
  {
    id: uuidv4(),
    title: 'Tiempo',
    imageUrl: '/ciencia-ficcion/tiempo.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=Yv3UERl1DA0',
    overview: 'Unas paradisíacas vacaciones se convierten en una pesadilla cuando una familia visita una playa donde, por alguna razón, envejecen rápidamente, reduciendo su vida entera a un solo día.',
    year: '2021'
  },
  // {
  //   id: uuidv4(),
  //   title: 'Jurassic world: Reino caído',
  //   imageUrl: '',
  //   trailerUrl:''
  // },
  {
    id: uuidv4(),
    title: 'Aniquilación',
    imageUrl: '/ciencia-ficcion/Aniquilacion.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=VGRaBxmdLbQ',
    overview: 'Lena, bióloga y antigua soldado, se une a la misión que busca a su esposo, desaparecido en una región de acceso restringido. Mientras recorren el área, comprueban que está poblada por criaturas terroríficas, tan hermosas como mortíferas.',
    year: '2018'
  },
  // {
  //   id: uuidv4(),
  //   title: 'Groenlandia',
  //   imageUrl: '',
  //   trailerUrl:''
  // },
];

export default CIENCIA_FICCION;