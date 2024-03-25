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
        <div className='flex items-center'>
            <div>
            <Image
                width={150}
                height={150}
                src={props.imgsrc}
                alt={props.alt}
                className='project-img rounded-full border-4 border-blue-950 w-52 mb-4 ml-auto mr-auto self-center z-0'
            />
            <span className='button flex text-center justify-center p-3 bg-blue-950 text-gray-100 rounded-md cursor-pointer'>
                {props.projname}
            </span>
            </div>

                <div className={" bg-gray-500 rounded-md border-2 border-gray-600 w-64 p-1 ml-1 mr-1 text-gray-200"}>
                    
                    <h1 className='w-full text-center text-sm bg-blue-700 rounded-lg'>{props.projname}</h1>
                    <div className='text-gray-200 p-2 bg-slate-800 rounded-md mt-2 text-sm'>
                        {props.projinfo}
                    </div>
                    <div className='text-gray-200 p-2 text-sm mt-1 bg-slate-800 rounded-md'>
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
                    <div className="mt-1" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <a className=' text-sm p-1 w-28 text-center mt-1 bg-blue-950 font-bold rounded-md border-white border-2' href={props.projlink} target="_blank">Confira!</a>
                    </div>
                </div>
            </div>
    );
}

export default Project;