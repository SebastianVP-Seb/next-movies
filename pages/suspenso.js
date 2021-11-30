import React, {useState} from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import SUSPENSO from '../db/suspenso';
import Head from 'next/head';


function suspenso() {

    const [suspenso, setSuspenso]=useState(SUSPENSO);

    return (
        <Layout>
            <Head>
                <title>Suspenso</title>
            </Head>

            <ListaPeliculas arreglo={suspenso} />
    
            
        </Layout>
    )
}

export default suspenso
