import React, {useState} from 'react'
import Layout from '../components/Layout';
import ROMANCE from '../db/romance';
import Head from 'next/head';


import ListaPeliculas from '../components/ListaPeliculas';

function romance() {

    const [romance, setRomance]=useState(ROMANCE);

    return (
        <Layout>
            <Head>
                <title>Romance</title>
            </Head>
            <ListaPeliculas arreglo={romance} />
        </Layout>
    )
}

export default romance
