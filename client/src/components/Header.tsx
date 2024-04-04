import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  
  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data/download', {
        responseType: 'blob' // Indica que la respuesta es un blob (archivo binario)
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tabla.xlsx'); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <>
      <header className="bg-purple-700 p-5 flex w-full items-center justify-between">
        <img src="./Icon.svg" alt="logo" className='w-[240px]' />
        <div className='flex gap-5 '>
          <Link to="../form"><img src="./fileSend.svg" alt="logo" className='w-[40px] ml-6' /><span className='font-semibold text-lg text-[#46FCD6]'>Formulario</span></Link>
          <Link to="../dashboard"><img src="./dahboard1.svg" alt="logo" className='w-[40px] ml-6' /><span className='font-semibold text-lg text-[#46FCD6]'>Dashboard</span></Link>
          <button onClick={handleDownload}><img src="./downloadl.svg" alt="logo" className='w-[40px] ml-6' /><span className='font-semibold text-lg text-[#46FCD6]'>Descargar</span></button>
        </div>
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
