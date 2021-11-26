import React, {useState} from 'react'
import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import SUSPENSO from '../db/suspenso';

function suspenso() {

    const [suspenso, setSuspenso]=useState(SUSPENSO);

    return (
        <Layout>

            <ListaPeliculas arreglo={suspenso} />
    
            
        </Layout>
    )
}

export default suspenso
