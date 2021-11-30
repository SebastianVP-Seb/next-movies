import Layout from '../components/Layout';
import Head from 'next/head';
import ListaPeliculas from '../components/ListaPeliculas';
import ROMANCE from '../db/romance';

function romance() {

    return (
        <Layout>
            <Head>
                <title>Romance</title>
            </Head>
            <ListaPeliculas arreglo={ROMANCE} />
        </Layout>
    )
}

export default romance
