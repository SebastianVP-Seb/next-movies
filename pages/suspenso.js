import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import SUSPENSO from '../db/suspenso';

function suspenso() {

    return (
        <Layout>
            <Head>
                <title>Suspenso</title>
            </Head>

            <ListaPeliculas arreglo={SUSPENSO} />
    
        </Layout>
    )
}

export default suspenso
