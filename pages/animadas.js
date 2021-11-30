import React, {useState} from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import ANIMADAS from '../db/animadas';
import Head from 'next/head';


function animadas() {

    const [animadas, setAnimadas]=useState(ANIMADAS);

    return (
        <Layout>

            <Head>
                <title>Animadas</title>
            </Head>

            <ListaPeliculas arreglo={animadas} />
            
        </Layout>
    )
}

export default animadas
