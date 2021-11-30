import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import ACCION from '../db/accion';

function accion() {

    return (
        <Layout>
            <Head>
                <title>Acción</title>
            </Head>

            <ListaPeliculas  arreglo={ACCION} />
            
        </Layout>
    );
};

export default accion;
