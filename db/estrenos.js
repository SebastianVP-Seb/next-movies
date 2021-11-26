import { v4 as uuidv4 } from 'uuid';

const ESTRENOS=[
  {
    id: uuidv4(),
    title: 'It: 2017',
    imageUrl: '/terror/It-2017.jpg',
    trailerUrl:'',
    overview:'Resumen de la peli',
    background:'/estrenos/Purga_infinita.jpeg'
  },
  {
    id: uuidv4(),
    title: 'It: cap 2',
    imageUrl: '/terror/it_2.jpg',
    trailerUrl:'',
    overview:'Resumen de la peli',
    background:'/estrenos/Purga_infinita.jpeg'
  },
  {
    id: uuidv4(),
    title: 'Historias de miedo',
    imageUrl: '/terror/Historias_de_miedo_para_contar_en_la_oscuridad.jpg',
    trailerUrl:'',
    overview:'Resumen de la peli',
    background:'/estrenos/Purga_infinita.jpeg'
  },

];

export default ESTRENOS;