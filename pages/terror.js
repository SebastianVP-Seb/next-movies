import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import TERROR from '../db/terror';

function terror() {

    return (
        <Layout>
            <Head>
                <title>Terror </title>
            </Head>
        
            <ListaPeliculas arreglo={TERROR} />
            
        </Layout>
    )
}

export default terror
