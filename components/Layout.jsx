import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

function Layout(props) {
    return (
        <>
        <Head>
            <title>Peliculas</title>
        </Head>

        <Navbar />
            {props.children}
        </>
    )
}

export default Layout
