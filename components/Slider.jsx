import React, { useState } from 'react';
import ESTRENOS from '../db/estrenos';
import Link from 'next/link';
import {Carousel} from 'antd';
import styles from '../styles/Home.module.css'


function Slider() {

    const [estrenos, setEstrenos]=useState(ESTRENOS);

    return (
        <Carousel autoplay className={styles.slider} >
            {
                estrenos.map((item)=>{
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
    const {id, title, overview, background} =movie;

    return (
        <div className='slider_movie' className={styles.slider}
             style={{backgroundImage:`url('${background}')`}} >
                 <div className='slider_movie-info' className={styles.slider_movie_info} >
                     <div className={styles.slider_movie_datos}>
                         <h3>{title}</h3>
                         <p>{overview}</p>
                     </div>
                 </div>
        </div>
    )
}


