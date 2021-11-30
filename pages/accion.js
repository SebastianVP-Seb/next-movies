import React, { useState } from 'react';
import Layout from '../components/Layout';
import ACCION from '../db/accion';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';


function accion() {

    const [accion, setAccion]=useState(ACCION);

    return (
        <Layout>
            <Head>
                <title>Acción</title>
            </Head>

            

            <ListaPeliculas  arreglo={accion} />
            
        </Layout>
    );
};

export default accion;
