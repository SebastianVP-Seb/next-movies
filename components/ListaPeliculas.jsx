import React from 'react';
import CardMovie from './CardMovie';
import styles from '../styles/Home.module.css'

function ListaPeliculas({arreglo}) {

    console.log(arreglo)

    return (
        <div className={styles.contenedorPeliculas}>
            {
                arreglo.map((item)=>{
                    return (
                        <div key={item.id}>
                            <CardMovie item={item} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ListaPeliculas;
