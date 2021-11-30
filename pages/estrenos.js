import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import ESTRENOS from '../db/estrenos';

export default function estrenos() {

    return (
        <Layout>
            <Head>
                <title>Estrenos</title>
            </Head>

            <ListaPeliculas arreglo={ESTRENOS} />
            
        </Layout>
    )
}
