import { v4 as uuidv4 } from 'uuid';

const TERROR=[
  {
    id: uuidv4(),
    title: 'Actividad paranormal: el familiar más cercano',
    imageUrl: '/terror/paranormal.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=SHlO1Xdq_5U',
    overview: 'Margot, se dirige a una comunidad amish aislada con la esperanza de saber algo de su madre y su familia perdida hace tiempo. Tras una serie de extraños sucesos y descubrimientos, se da cuenta de que esta comunidad puede no ser lo que parece.',
    year: '2021',
    background: '/terror/paranormal.jpg'
  },
  {
    id: uuidv4(),
    title: 'Annabelle 1',
    imageUrl: '/terror/Annabelle1.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=paFgQNPGlsg',
    overview: 'John Form encuentra el regalo perfecto para Mia, su mujer embarazada: una preciosa muñeca vintage llamada Annabelle. Una noche, una secta satánica les ataca brutalmente. Además, provocan que un ente maligno se apodere de Annabelle.',
    year: '2014'
  },
  {
    id: uuidv4(),
    title: 'Annabelle 2: la creación',
    imageUrl: '/terror/annabelle2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=FIdzGOMbVss',
    overview: 'Doce años después de la muerte de su hija y aún tremendamente doloridos por su perdida, un fabricante de muñecas y su mujer acogen en su casa a una monja y a seis niñas huérfanas. Allí, la muñeca Annabelle, poseída por un espíritu, ataca a las niñas huérfanas.',
    year: '2017'
  },
  {
    id: uuidv4(),
    title: 'Annabelle 3: vuelve a casa',
    imageUrl: '/terror/annabelle3.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=KUnKWjeQA9A',
    overview: 'Ed y Lorraine Warren tratan de encerrar bajo llave a Annabelle, una muñeca poseída. Como demonólogos la colocaran en una vitrina bendecida como medida de seguridad, sin embargo, una noche terrorífica Annabelle despertará a otros espíritus malignos que se encuentran en la habitación y que tendrán una nueva fijación: la hija pequeña del matrimonio y sus amigos.',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Cementerio maldito',
    imageUrl: '/terror/Cementerio_maldito.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=t-eSNuv28XQ',
    overview: 'El Dr. Louis Creed descubre un cementerio extraño en un bosque cercano a su nueva casa. Cuando el gato de la familia muere atropellado, Louis lo entierra en ese inquietante cementerio y, lo que ocurre después, le aterra tanto como le fascina.',
    year: '2019'
  },
  // {
  //   id: uuidv4(),
  //   title: 'Aplicación diabólica',
  //   imageUrl: '/terror/.jpg',
  //   trailerUrl:''
  // },
  // {
  //   id: uuidv4(),
  //   title: '300 días después',
  //   imageUrl: '',
  //   trailerUrl:''
  // },
  {
    id: uuidv4(),
    title: 'El conjuro',
    imageUrl: '/terror/el_conjuro1.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=oUyHULb7xDI',
    overview: 'Basada en hechos reales. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70.',
    year: '2013'
  },
  {
    id: uuidv4(),
    title: 'El conjuro 2',
    imageUrl: '/terror/conjuro2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=cuDBjj_Gs0M',
    overview: 'Ed y Lorraine Warren, renombrados demonólogos e investigadores de lo paranormal, se enfrentan de nuevo a las fuerzas infernales. En esta ocasión, viajan hasta el norte de Londres para tratar de ayudar a una madre y sus cuatro hijos, quienes habitan en una casa plagada de espíritus malignos.',
    year: '2016'
  },
  {
    id: uuidv4(),
    title: 'El conjuro 3',
    imageUrl: '/terror/Elconjuro3.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=S8nlMJfE6pc',
    overview: 'Los investigadores de fenómenos paranormales Ed y Lorraine Warren se enfrentan a un nuevo caso: el de un hombre acusado de un terrible asesinato, que asegura haber sido poseído por un demonio.',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'El resplandor',
    imageUrl: '/terror/el_resplandor.jpg',
    trailerUrl:'',
    overview: 'Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.',
    year: '1980'
  },
  {
    id: uuidv4(),
    title: 'Doctor sueño',
    imageUrl: '/terror/Doctor_Sue_o.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=gIjWO7tWgoo',
    overview: 'Dan, alcohólico y traumatizado por lo que le pasó siendo un niño en el hotel Overlook, conoce a Abra, una adolescente que posee el mismo don que él. Dan tratará de salvar a Abra de un grupo de siniestros personajes que ansían la inmortalidad y aspiran alcanzarla alimentándose de los poderes psíquicos de gente como ellos.',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'El legado del diablo',
    imageUrl: '/terror/El_Legado_Del_Diablo.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=8_eJ-568tJw',
    overview: 'Después de la muerte de la matriarca de la familia Graham, su hija, Annie, se muda a la casa con su familia. Annie espera olvidar los problemas que tuvo en su infancia allá, pero todo se tuerce cuando su hija empieza a ver figuras fantasmales.',
    year: '2018'
  },          {
    id: uuidv4(),
    title: 'Ruega por nosotros',
    imageUrl: '/terror/Ruega_por_nosotros.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=oxxPde95ajw',
    overview: 'Un periodista con poca suerte descubre una serie de milagros en un pueblo de Nueva Inglaterra. Después de investigar los acontecimientos con el objetivo de volver al estrellado descubre que el pueblo esconde algo muy oscuro.',
    year: '2021'
  },          
  // {
  //   id: uuidv4(),
  //   title: 'Halloween',
  //   imageUrl: '',
  //   trailerUrl:''
  // },          
  {
    id: uuidv4(),
    title: 'Halloween: Kills',
    imageUrl: '/terror/halloween_kills.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=PVWa3UrGD1w',
    overview: 'La saga de Michael Myers y Laurie Strode continúa en el próximo capítulo emocionante de la serie de Halloween.',
    year: '2021'
  },
  {
    id: uuidv4(),
    title: 'It: capítulo 1',
    imageUrl: '/terror/It-2017.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=fP4BBZ76DGg',
    overview: 'Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.',
    year: '2017'
  },
  {
    id: uuidv4(),
    title: 'It: capítulo 2',
    imageUrl: '/terror/it_2.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=woh3bk8DXVo',
    overview: 'En el misterioso pueblo de Derry, un malvado payaso llamado Pennywise vuelve 27 años después para atormentar a los ya adultos miembros del Club de los Perdedores, que ahora están más alejados unos de otros.',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Historias de miedo para contar en la oscuridad',
    imageUrl: '/terror/Historias_de_miedo_para_contar_en_la_oscuridad.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=OwshkT4C3RM',
    overview: 'La familia Bellows y su sombra ha aumentado en Mill Valley, ya que las historias de terror de la joven Sarah empiezan a cobrar realidad. Un grupo de adolescentes debe resolver el misterio que rodea a una serie de repentinas y macabras muertes que suceden en su pueblo.',
    year: '2019'
  },
  {
    id: uuidv4(),
    title: 'Los remanentes',
    imageUrl: '/terror/the_remains.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=7Q1NkbGCmas',
    overview: 'Tras su reciente mudanza, los miembros de una familia son poseídos por un espíritu malévolo tras encontrar unas antigüedades en el ático de su nueva casa. El espíritu, a medida que los posee, se vuelve cada vez más poderoso.',
    year: '2016'
  },
  {
    id: uuidv4(),
    title: 'Déjanos entrar',
    imageUrl: '/terror/letusin.jpg',
    trailerUrl:'https://www.youtube.com/watch?v=QhBPB9BUzKs',
    overview: 'Una enérgica niña de doce años y su mejor amigo buscan descubrir las repentinas desapariciones de varios adolescentes perdidos en su pequeña ciudad. Al darse cuenta de que podría estar ocurriendo algo más profundo, Emily y Christopher podrían enfrentarse a fuerzas que ni siquiera pueden imaginar.',
    year: '2021'
  },
];

export default TERROR;