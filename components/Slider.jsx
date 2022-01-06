import {Carousel} from 'antd';
import styles from '../styles/Home.module.css'
import ESTRENOS from '../db/estrenos';

function Slider() {

    return (
        <div className='contenedor_slider' >

            <Carousel autoplay >
                {
                    ESTRENOS.map((item)=>{
                        return (
                            <Movie key={item.id} movie={item} />
                            );
                        })
                    }
            </Carousel>
        </div>
    );
};

export default Slider;

function Movie({movie}) {
    const {id, title, overview, background, trailerUrl} =movie;

    return (
        <div>

            <div 
                style={{backgroundImage:`url('${background}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                
                    <div className={styles.slider_movie_info} >
                        {/* <div className={styles.slider_movie_datos}>
                            <h3 className={styles.h3} >{title}</h3>
                            <p>{overview}</p>
                        </div> */}
                    </div>
            </div>
        </div>
    )
}


