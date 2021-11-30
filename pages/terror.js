import React, { useState } from 'react'
import Layout from '../components/Layout';
import TERROR from '../db/terror';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';


function terror() {

    const [terror, setTerror]=useState(TERROR);

    return (
        <Layout>
            <Head>
                <title>Terror </title>
            </Head>
        
            <ListaPeliculas arreglo={terror} />
            
        </Layout>
    )
}

export default terror
