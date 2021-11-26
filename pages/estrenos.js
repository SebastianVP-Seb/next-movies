import React, { useState } from 'react';
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import ESTRENOS from '../db/estrenos';

export default function estrenos() {

    const [estrenos, setEstrenos]=useState(ESTRENOS);
    return (
        <Layout>

            <ListaPeliculas arreglo={estrenos} />
            
        </Layout>
    )
}
