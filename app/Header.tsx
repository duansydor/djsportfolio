import React from 'react';

function Header(props: any) {
    return (
        <header className="z-50 fixed w-full top-0 flex items-center pl-8 pr-8 pt-4 bg-white drop-shadow-md">
            <h1 className="text-2xl">Duan</h1>
            <div className="flex ml-auto gap-2">
              <span>Projetos</span>
              <span>Contato</span>
              <span>Blog</span>
            </div>
        </header>
    );
}

export default Header;