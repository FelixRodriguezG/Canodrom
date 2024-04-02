import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    setCurrentUser({ token: '' });
    navigate('/');
  };

  const user = localStorage.getItem('user'); 
  let data = '';
  if (user) {
    const userData = JSON.parse(user);
    data = userData.name;
  }
  
  return (
    <>
      <header className="bg-purple-700 p-5 flex w-full items-center justify-between  ">
        <img src="./Icon.svg" alt="logo" className='w-[240px]' />
        <div>
          <p className={`text-white text-2xl `}>{'Bienvenido/a! ' + data}</p>
          <button 
            type='button'
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      </header>
    </>
  );
}
