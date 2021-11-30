import Layout from '../components/Layout';
import ListaPeliculas from '../components/ListaPeliculas';
import Head from 'next/head';
import CIENCIA_FICCION from '../db/ciencia-ficcion';

function cienciaFiccion() {

    return (
        <Layout>
            <Head>
                <title>Ciencia Ficción</title>
            </Head>

            <ListaPeliculas  arreglo={CIENCIA_FICCION} />
            
        </Layout>
    )
}

export default cienciaFiccion
