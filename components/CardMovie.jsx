import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

function CardMovie({item}) {

    // , url:{query:{id, title}}

    console.log(item);
    return (
        <div 
            onClick={(e)=>{
            Router.push('/peliculas/[id]', `/peliculas/${item.id}`)
        }}
        >
         <div className="contenedor-imagen-card">

            <Image src={item.imageUrl} width={250} height={270} alt='Imagen-Película'/> 
         </div>
             <h4>{item.title}</h4>
        </div>
    );
};

export default CardMovie;
