import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

function ListaPeliculas({arreglo}) {

    return (
        <div>
            {
                arreglo.map((item)=>{
                    return (
                        <div key={item.id} 
                            onClick={()=>{
                            Router.push('/peliculas/[id]', `/peliculas/${arreglo.id}`)
                        }}
                        >
                            <Image src={item.imageUrl} width={70} height={70} />
                            <h4>{item.title}</h4>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ListaPeliculas;
