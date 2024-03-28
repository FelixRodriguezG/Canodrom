
function Header({ headerDisplay }) {
  return (
    <>
      <header className="bg-purple-700 p-5 flex w-full items-center justify-between  ">
        <img src="./Icon.svg" alt="logo" className='w-[240px]' />
        <div>
          <p className={`text-white text-2xl ${headerDisplay}`}>Administrador</p>
          <a href="" className={`text-white  ${headerDisplay}`}>Tancar sessiò</a>
        </div>
      </header>
    </>
  );
}

export default Header;
