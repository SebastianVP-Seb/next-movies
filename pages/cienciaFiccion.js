import React, { useState } from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import CIENCIA_FICCION from '../db/ciencia-ficcion';

function cienciaFiccion() {

    const [ficcion, setFiccion]=useState(CIENCIA_FICCION);

    return (
        <Layout>

            <ListaPeliculas  arreglo={ficcion} />
            
        </Layout>
    )
}

export default cienciaFiccion
