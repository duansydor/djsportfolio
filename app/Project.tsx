'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import TechIndicator from './TechIndicator';

function Project(props: any) {
    let [dialog, setDialog] = useState("invisible")

    let openInfo = () => {
        setDialog("")
    }
    let closeInfo = () => {
        setDialog("invisible")
    }

    return (
        /* 1. h-full no container externo para ele esticar e preencher o espaço do Grid */
        <div className='flex justify-center h-full w-full '>
            {/* 2. flex, flex-col e h-full adicionados ao card principal */}
            <div className="flex flex-col h-full rounded-md border-2 border-gray-600 w-64 p-2 text-gray-200">
                
                <div>
                    <Image
                        width={150}
                        height={150}
                        src={props.imgsrc}
                        alt={props.alt}
                        className='project-img rounded-full border-4 border-blue-950 w-52 mb-4 mx-auto self-center z-0'
                    />
                </div>
                
                <h1 className='w-full text-center text-sm bg-blue-700 rounded-lg py-1'>{props.projname}</h1>
                
                {/* 3. flex-grow AQUI é o segredo! Ele faz a caixa de texto empurrar o que sobrar para o fundo */}
                <div className='flex-grow text-gray-800 p-2 rounded-md mt-2 text-sm'>
                    {props.projinfo}
                </div>
                
                {/* A parte das tecnologias e o botão agora ficarão sempre presos na parte inferior */}
                <div className='text-gray-200 p-2 text-sm mt-2 bg-slate-800 rounded-md'>
                    <h3>Tecnologias utilizadas:</h3>
                    <div style={{ display: "flex", gap: 20 }}>
                        {
                            props.technologies.map((tech: any) =>
                                <TechIndicator
                                    key={tech.id}
                                    name={tech.name}
                                    widthind={tech.width}
                                />
                            )
                        }
                    </div>
                </div>
                
                <div className="mt-3 mb-1 flex flex-col items-center">
                    <a className='text-sm p-1 w-28 text-center bg-blue-950 font-bold rounded-md border-white border-2' href={props.projlink} target="_blank" rel="noreferrer">
                        Confira!
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Project;