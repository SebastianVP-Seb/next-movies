import {Carousel} from 'antd';
import styles from '../styles/Home.module.css'
import ESTRENOS from '../db/estrenos';

function Slider() {

    return (
        <Carousel autoplay className={styles.slider} >
            {
                ESTRENOS.map((item)=>{
                    return (
                        <Movie key={item.id} movie={item}
                            
                        />
                    )
                })
            }
        </Carousel>
    );
};

export default Slider;

function Movie({movie}) {
    const {id, title, overview, background, trailerUrl} =movie;

    return (
        <div className={styles.slider}
             style={{backgroundImage:`url('${background}')`, backgroundRepeat: 'no-repeat', width: '100%', 
                    backgroundSize: 'cover', height: '100vh' }} >
                <div className={styles.slider_movie_info} >
                    <div className={styles.slider_movie_datos}>
                        <h3 className={styles.h3} >{title}</h3>
                        <p>{overview}</p>
                        <a href={trailerUrl}>Ver trailer</a>
                    </div>
                </div>
        </div>
    )
}


