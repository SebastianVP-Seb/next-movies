import Layout from '../../components/Layout';
import ACCION from '../../db/accion';
import ROMANCE from '../../db/romance';
import CIENCIA_FICCION from '../../db/ciencia-ficcion';
import ANIMADAS from '../../db/animadas';
import SUSPENSO from '../../db/suspenso';
import TERROR from '../../db/terror'
import styles from '../../styles/Home.module.css';
import ESTRENOS from '../../db/estrenos';
import Head from 'next/head';

function movieProfile({query}) {

    const final=[...ACCION, ...CIENCIA_FICCION, ...ANIMADAS, ...SUSPENSO, ...TERROR, ...ROMANCE, ...ESTRENOS];

    const filtro=final.find(movie=>movie.id===query.id);

    console.log(filtro);
    
    return (
        <Layout>
            {/* style={{backgroundImage: `url(${filtro.imageUrl})`}} */}

            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bad+Script&family=Cormorant+Garamond:ital,wght@1,300&family=Island+Moments&family=Licorice&family=Pushster&family=Shizuru&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap" rel="stylesheet"/>
            </Head>

            <div className={styles.contenedorImagen} >
                {/* <div className={styles.div_imagen} >
                    {/* <Image className={styles.imagen_sola} src={`${filtro.imageUrl}`} alt='Imagen-Película'
                            width='100%' height='100%' /> */}

                {/* </div> */}
                {/* <div className={styles.imagen_datos}> */}
                    <h2 className='h2' >{filtro.title}</h2>
                    <h3 className='h3' >{filtro.year}</h3>
                    <p className='p' >{filtro.overview}</p>
                    <a href={filtro.trailerUrl} target='_blank' rel="noreferrer"
                        className={styles.trailer_style}
                    >Ver trailer</a>
                {/* </div> */}
            </div>
        </Layout>
    );
};

export default movieProfile;

// export async function getStaticProps(context) {
//     return {
//       props:{data} // will be passed to the page component as props
//     }
//   }

movieProfile.getInitialProps = ({query}) => {
    return {query}
}

// movieProfile.getInitialProps = (context) => {
//     return {
//         props: {
//             resourceId:context.params.id, //esto mismo se regresa a esta misma función, esto es para probar 
//             resource: data
//         }
//     }
// }
