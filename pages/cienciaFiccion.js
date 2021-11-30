import React, { useState } from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import CIENCIA_FICCION from '../db/ciencia-ficcion';
import Head from 'next/head';


function cienciaFiccion() {

    const [ficcion, setFiccion]=useState(CIENCIA_FICCION);

    return (
        <Layout>
            <Head>
                <title>Ciencia Ficción</title>
            </Head>

            <ListaPeliculas  arreglo={ficcion} />
            
        </Layout>
    )
}

export default cienciaFiccion
