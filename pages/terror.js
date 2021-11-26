import React, { useState } from 'react'
import Layout from '../components/Layout';
import TERROR from '../db/terror';
import ListaPeliculas from '../components/ListaPeliculas';

function terror() {

    const [terror, setTerror]=useState(TERROR);

    return (
        <Layout>
        
            <ListaPeliculas arreglo={terror} />
            
        </Layout>
    )
}

export default terror
