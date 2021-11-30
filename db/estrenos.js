import { v4 as uuidv4 } from 'uuid';

const ESTRENOS=[
  {
    id: uuidv4(),
    title: 'Venom: Carnage liberado',
    imageUrl: '/accion/venom2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=F4Ygcigj0Gk',
    overview:'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady.',
    background:'/estrenos/bgvenom2.jpg',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'It: cap 2',
    imageUrl: '/terror/it_2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=woh3bk8DXVo',
    overview:'En el misterioso pueblo de Derry, un malvado payaso llamado Pennywise vuelve 27 años después para atormentar a los ya adultos miembros del Club de los Perdedores, que ahora están más alejados unos de otros.',
    background:'/estrenos/it2.jpg',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Historias de miedo',
    imageUrl: '/terror/Historias_de_miedo_para_contar_en_la_oscuridad.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=OwshkT4C3RM',
    overview:'La familia Bellows y su sombra ha aumentado en Mill Valley, ya que las historias de terror de la joven Sarah empiezan a cobrar realidad. Un grupo de adolescentes debe resolver el misterio que rodea a una serie de repentinas y macabras muertes que suceden en su pueblo.',
    background:'/estrenos/historiasbg.jpg',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'La purga por siempre',
    imageUrl: '/accion/La_Purga_Infinita.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=mtoH--n1jtE',
    overview: 'Adela y su marido, Juan, viven en Texas, donde él trabaja como peón de rancho para la adinerada familia Tucker. En la mañana después de la Purga, una banda de asesinos enmascarados ataca a los Tucker, obligando a ambas familias a unirse y luchar.',
    year: '2021',
    background:'/estrenos/Purga_infinita.jpeg'
  },
  {
    id: uuidv4(),
    title: 'Tiempo',
    imageUrl: '/ciencia-ficcion/tiempo.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=Yv3UERl1DA0',
    overview: 'Unas paradisíacas vacaciones se convierten en una pesadilla cuando una familia visita una playa donde, por alguna razón, envejecen rápidamente, reduciendo su vida entera a un solo día.',
    year: '2021',
    background:'/estrenos/tiempo.jpeg'
  },
  {
    id: uuidv4(),
    title: 'Escape Room 2: reto mortal',
    trailerUrl:'https://www.youtube.com/watch?v=zXA0nrukD0c',
    overview: 'Continuación del éxito de terror "Escape Room" sobre una edición mortal del divertido juego en el que los participantes tienen que librarse de acertijos en las habitaciones.',
    year: '2021',
    background:'/estrenos/escape2.jpg',
    imageUrl: '/ciencia-ficcion/scape_room2.jpg',
  },
  {
    id: uuidv4(),
    title: 'Un lugar en silencio 2',
    imageUrl: '/suspenso/Un-lugar-en-silencio-parte-2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=oTkl2wz-TnQ',
    overview: 'La familia Abbott ahora se enfrenta a los terrores del mundo exterior. Forzados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.',
    year: '2021',
    background:'/estrenos/lugar2.jpg'
  },
  {
    id: uuidv4(),
    title: 'No respires 2',
    imageUrl: '/suspenso/NORESPIRES2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=nzo29FyE1ps',
    overview: 'Un veterano ciego debe usar su entrenamiento militar para salvar a un joven huérfano de un grupo de matones que irrumpen en su casa.',
    year: '2021',
    background:'/estrenos/respires2.jpg'
  },

];

export default ESTRENOS;