import React from 'react';
import SearchBar from './SearchBar';

function Header({ headerDisplay }) {
  return (
    <>
      <header className="bg-purple-700 p-5 flex w-full items-center justify-between position: fixed">
        <img src="./Icon.svg" alt="logo" className='w-[240px]' />
        <SearchBar searchDisplay={headerDisplay} />
        <div>
          <p className={`text-white text-2xl ${headerDisplay}`}>Administrador</p>
          <a href="" className={`text-white  ${headerDisplay}`}>Tancar sessiò</a>
        </div>
      </header>
    </>
  );
}

export default Header;
