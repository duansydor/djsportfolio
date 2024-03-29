import Image from 'next/image';
import React from 'react';

function SocialLinks(props: any) {
    return (
        <div className='flex-col justify-items-center items-center text-center'>
            <Image
                className='ml-auto mr-auto'
                alt=''
                width={50}
                height={50}
                src={"/" + props.nome + ".png"}
            />
            <h1 className='text-center font-bold mt-2 bg-blue-950 text-gray-300 p-1 rounded-lg text-sm'>
                <a href={props.linksrc} target='_about'>{props.nome}</a>
            </h1>
        </div>
    );
}

export default SocialLinks;