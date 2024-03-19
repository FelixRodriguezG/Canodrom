import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  password: string;
}

const Users: User[] = [
  {
    name: "Felix",
    password: "elhp",
  },
  {
    name: "Isiah",
    password: "ramoncin",
  },
];

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = Users.find(
      (user) => user.name === userName && user.password === password
    );

    if (user) {
      navigate("/dashboard");
    } else {
      setError("L'usuari o la contrasenya són incorrectes");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card onSubmit={handleSubmit} className="h-[500px] w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl pt-4">Entra</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 pt-12">
          <Label htmlFor="email" className="text-xl">
            Nom d'usuari
          </Label>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Label htmlFor="password" className="text-xl pt-2">
            Contrasenya
          </Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-center pt-9">
          <Button type="submit" className="w-[40%] bg-teal-400">
            Iniciar sessió
          </Button>
        </CardFooter>
      </Card>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;