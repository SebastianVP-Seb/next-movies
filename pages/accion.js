import React, { useState } from 'react';
import Layout from '../components/Layout';
import ACCION from '../db/accion';
import ListaPeliculas from '../components/ListaPeliculas';

function accion() {

    const [accion, setAccion]=useState(ACCION);

    return (
        <Layout>

            <ListaPeliculas  arreglo={accion} />
            
        </Layout>
    );
};

export default accion;
