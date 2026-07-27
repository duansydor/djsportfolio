'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import TechIndicator from './TechIndicator';

function ImageProject(props: any) {
    // Agora usando um booleano simples para controlar o modal
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* 1. O CARD (Mesma estrutura responsiva do projeto de código) */}
            <div className='flex justify-center h-full w-full '>
                <div className="flex flex-col h-full rounded-md border-2 border-gray-600 w-64 p-2 text-gray-200">
                    
                    {/* Container da miniatura */}
                    <div className="relative w-52 h-52 mx-auto mb-4 border-4 border-blue-950 rounded-full overflow-hidden z-0">
                        <Image
                            src={props.imgsrc}
                            alt={props.alt}
                            fill
                            className='object-cover'
                        />
                    </div>
                    
                    <h1 className='w-full text-center text-sm bg-blue-700 rounded-lg py-1'>{props.projname}</h1>
                    
                    <div className='flex-grow text-gray-800 p-2 rounded-md mt-2 text-sm'>
                        {props.projinfo}
                    </div>
                    
                    {/* Área de Ferramentas / Metadados */}
                    <div className='text-gray-200 p-2 text-sm mt-2 bg-slate-800 rounded-md'>
                        <h3>Ferramentas utilizadas:</h3>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "8px" }}>
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
                    
                    {/* O Botão agora não é um <a>, é um <button> que aciona o modal */}
                    <div className="mt-3 mb-1 flex flex-col items-center">
                        <button 
                            onClick={openModal} 
                            className='text-sm p-1 w-28 text-center bg-blue-950 hover:bg-blue-800 transition-colors font-bold rounded-md border-white border-2 cursor-pointer'
                        >
                            Ver Imagem
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. O MODAL (Só renderiza se isOpen for true) */}
            {isOpen && (
                /* Fundo escuro transparente (Overlay). O onClick aqui fecha o modal se clicar fora da imagem */
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity" 
                    onClick={closeModal}
                >
                    {/* Container da Imagem Ampliada */}
                    <div 
                        className="relative w-full max-w-5xl h-full max-h-[85vh] flex flex-col items-center justify-center" 
                        onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
                    >
                        {/* Botão Fechar (X) */}
                        <button 
                            onClick={closeModal} 
                            className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-gray-400 transition-colors z-50"
                            aria-label="Fechar"
                        >
                            &times;
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* props.fullImgSrc permite passar uma imagem em alta qualidade só para o modal, se quiser */}
                             <Image
                                src={props.fullImgSrc || props.imgsrc}
                                alt={props.alt}
                                fill
                                className="object-contain" 
                             />
                        </div>
                        
                        {/* Título opcional abaixo da imagem no modal */}
                        <p className="text-white mt-4 text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
                            {props.projname}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageProject;