import Image from 'next/image';
import React from 'react';

function SocialLinks(props: any) {
    return (
        <div className='flex-col justify-items-center items-center text-center'>
            <Image
                className=''
                alt=''
                width={100}
                height={100}
                src={"/" + props.nome + ".png"}
            />
            <h1 className='font-bold mt-2 bg-blue-950 text-gray-300 p-2 rounded-lg'>
                <a href={props.linksrc} target='_about'>{props.nome}</a>
            </h1>
        </div>
    );
}

export default SocialLinks;