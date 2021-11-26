import React, {useState} from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import ANIMADAS from '../db/animadas';

function animadas() {

    const [animadas, setAnimadas]=useState(ANIMADAS);

    return (
        <Layout>

            <ListaPeliculas arreglo={animadas} />
            
        </Layout>
    )
}

export default animadas
