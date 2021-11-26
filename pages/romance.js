import React, {useState} from 'react'
import Layout from '../components/Layout';
import ROMANCE from '../db/romance';

import ListaPeliculas from '../components/ListaPeliculas';

function romance() {

    const [romance, setRomance]=useState(ROMANCE);

    return (
        <Layout>
            <ListaPeliculas arreglo={romance} />
        </Layout>
    )
}

export default romance
