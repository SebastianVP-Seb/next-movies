import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap" rel="stylesheet" />
<<<<<<< HEAD
                <link href="https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap" rel="stylesheet" />
=======
>>>>>>> ffc66ff89c3402ad2be5209356d58dac9d6eda6a
            </Head>

            <div className="nav">
                <Link href="/" exact>
                    <Image className='nav_img' src={`/assets/home.svg`} width={35} height={35} />
                </Link>
                <h2 className='nav_title' >Películas</h2>
                <label htmlFor='menu' className='nav_label' >
                    <Image className='nav_img' src={`/assets/gnome.svg`} width={35} height={35} />
                </label>
                <input type="checkbox" id='menu' className='nav_input' />

                <div className="nav_menu">
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
                        <a className={styles.navbar_a}>Ciencia Ficción</a>
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
            </div>
        </div>
    );
};

export default Navbar
