import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ACCION from '../../db/accion';
import ROMANCE from '../../db/romance';
import CIENCIA_FICCION from '../../db/ciencia-ficcion';
import ANIMADAS from '../../db/animadas';
import SUSPENSO from '../../db/suspenso';
import TERROR from '../../db/terror'
import styles from '../../styles/Home.module.css';
import ESTRENOS from '../../db/estrenos';
import Image from 'next/dist/client/image';
function movieProfile({query}) {

    const final=[...ACCION, ...CIENCIA_FICCION, ...ANIMADAS, ...SUSPENSO, ...TERROR, ...ROMANCE, ...ESTRENOS];

    const filtro=final.find(movie=>movie.id===query.id);

    console.log(filtro);
    
    return (
        <Layout>
            {/* style={{backgroundImage: `url(${filtro.imageUrl})`}} */}

            <div className={styles.contenedorImagen} >
                <div className={styles.div_imagen} className='contenedor-imagen-card' >
                    {/* <Image className={styles.imagen_sola} src={`${filtro.imageUrl}`} alt='Imagen-Película'
                            width='100%' height='100%' /> */}

                </div>
                <div className={styles.imagen_datos}>
                    <h3>{filtro.title}</h3>
                    <h4>{filtro.year}</h4>
                    <p>{filtro.overview}</p>
                    <a href={filtro.trailerUrl} target='_blank' rel="noreferrer">Ver trailer</a>
                </div>
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
