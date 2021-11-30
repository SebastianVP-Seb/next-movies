import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import ANIMADAS from '../db/animadas';

function animadas() {

    return (
        <Layout>

            <Head>
                <title>Animadas</title>
            </Head>

            <ListaPeliculas arreglo={ANIMADAS} />
            
        </Layout>
    )
}

export default animadas
