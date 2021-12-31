import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
// import {ReactComponent as ReactLogo} from '..';

function Navbar() {
    return (
        <div className={styles.navbar}>

            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap" rel="stylesheet" />
            </Head>
            

            <Link href="/" exact>
                <a className={styles.navbar_a}>Home</a>
            </Link>

            <Link href="/estrenos">
                <a className={styles.navbar_a}>Estrenos</a>
            </Link>
            <Link href="/accion">
                <a className={styles.navbar_a}>Acción</a>
            </Link>
            <Link href="/animadas">
                <a className={styles.navbar_a}>Animadas</a>
            </Link>
            <Link href="/cienciaFiccion">
                <a className={styles.navbar_a}>CienFicc</a>
            </Link>
            <Link href="/romance">
                <a className={styles.navbar_a}>Romance</a>
            </Link>
            <Link href="/suspenso">
                <a className={styles.navbar_a}>Suspenso</a>
            </Link>
            <Link href="/terror">
                <a className={styles.navbar_a}>Terror</a>
            </Link>
  
        </div>
    )
}

export default Navbar
