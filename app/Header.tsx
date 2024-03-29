import React from 'react';

function Header(props: any) {
    return (
        <header className="z-50 fixed w-full top-0 flex items-center pl-8 pr-8 pt-4 bg-white drop-shadow-md">
            <h1 className="text-2xl">Duan</h1>
            <div className="flex ml-auto gap-2">
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
              <a href="https://djsydor.hashnode.dev/" target='_BLANK'>Blog</a>
            </div>
        </header>
    );
}

export default Header;