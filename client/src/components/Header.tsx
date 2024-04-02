import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [_currentUser, setCurrentUser] = useContext(AuthContext);
    const navigate = useNavigate();
    const user = localStorage.getItem('user'); 
    const data= JSON.parse(user)
    const handleLogOut = () => {
      localStorage.removeItem('token'); 
      localStorage.removeItem('user'); 
      setCurrentUser({ accessToken: '' });
        navigate('/');
    };
  

    return (
      <>
      <header className="bg-purple-700 p-5 flex w-full items-center justify-between  ">
        <img src="./Icon.svg" alt="logo" className='w-[240px]' />
        <div>
          <p className={`text-white text-2xl `}>{'Bienvenido/a! '+data.name }</p>
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
