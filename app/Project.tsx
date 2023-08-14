'use client'
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
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
        <div className=' flex-col justify-items-center items-center mb-6'>
            <Image
                width={250}
                height={250}
                src={props.imgsrc}
                alt={props.alt}
                className='project-img rounded-full border-4 border-blue-950 w-52 h-52 mb-4 ml-auto mr-auto self-center'
            />
            <a className='button flex text-center justify-center p-3 bg-blue-950 text-gray-100 rounded-md' onClick={openInfo}>
                {props.projname}
            </a>
            <div className=''>
                <div className={"inset-center bg-blue-950 w-80 p-6 ml-1 mr-1 text-gray-200 " + dialog}>
                    <a className='float-right -mr-4 -mt-4' onClick={closeInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <h1>{props.projname}</h1>
                    <div>
                        {props.projinfo}
                    </div>
                    <br />
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
                    <div className="mt-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span>Que tal dar uma olhada?</span>
                        <a className='bg-slate-400 p-2 w-28 text-center mt-2 text-blue-950 font-bold rounded-sm' href={props.projlink} target="_blank">Confira!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;