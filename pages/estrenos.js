import React, { useState } from 'react';
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import ESTRENOS from '../db/estrenos';
import Head from 'next/head';


export default function estrenos() {

    const [estrenos, setEstrenos]=useState(ESTRENOS);
    return (
        <Layout>
            <Head>
                <title>Estrenos</title>
            </Head>

            <ListaPeliculas arreglo={estrenos} />
            
        </Layout>
    )
}
