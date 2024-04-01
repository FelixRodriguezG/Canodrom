import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {loginService}  from '../../services/AuthService';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeaderLogin } from '@/components/HeaderLogin';

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

	const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await loginService(username, password);
			navigate('/dashboard');
		} catch (error) {
			console.error('error', error);
		}
	};

	return (
    <>
    <HeaderLogin/>
    <form className="flex h-screen items-center justify-center" onSubmit={onSubmit}>
    <Card  className="h-[500px] w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl pt-4">Entra</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 pt-12">
        <Label htmlFor="email" className="text-xl">
          Nom d'usuari
        </Label>
        <Input
          	type='text'
            				name='username'
            				value={username}
            				onChange={onChangeUsername}
          
        />
        <Label htmlFor="password" className="text-xl pt-2">
          Contrasenya
        </Label>
        <Input
          		type='password'
              				name='password'
              				value={password}
              				onChange={onChangePassword}
          
        />
      </CardContent>
      <CardFooter className="flex justify-center pt-9">
        <Button  className="w-[40%] bg-teal-400" >
          Iniciar sessió
        </Button>
      </CardFooter>
    </Card>
    
  </form>
  </>
	);
}

		// <>
		// 		<form onSubmit={onSubmit} className="flex h-screen items-center justify-center">
		// 			<label htmlFor='username'>Username</label>
		// 			<input
		// 				type='text'
		// 				name='username'
		// 				value={username}
		// 				onChange={onChangeUsername}
		// 			/>
		// 			<label htmlFor='password'>Password</label>
		// 			<input
		// 				type='password'
		// 				name='password'
		// 				value={password}
		// 				onChange={onChangePassword}
		// 			/>
		// 			<button type='submit'  className="w-[40%] bg-teal-400">Login</button>
		// 		</form>
		// </>