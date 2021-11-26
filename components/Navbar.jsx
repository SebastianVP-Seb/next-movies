import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Navbar() {
    return (
        <div className='navbar' className={styles.navbar}>

<           Link href="/" exact>
                <a >Home</a>
            </Link>

            <Link href="/estrenos">
                <a >Estrenos</a>
            </Link>
            <Link href="/accion">
                <a >Acción</a>
            </Link>
            <Link href="/animadas">
                <a >Animadas</a>
            </Link>
            <Link href="/cienciaFiccion">
                <a >Ciencia Ficción</a>
            </Link>
            <Link href="/romance">
                <a >Romance</a>
            </Link>
            <Link href="/suspenso">
                <a >Suspenso</a>
            </Link>
            <Link href="/terror">
                <a >Terror</a>
            </Link>
  

        </div>
    )
}

export default Navbar
