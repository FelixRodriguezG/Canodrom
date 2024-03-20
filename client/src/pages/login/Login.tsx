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


function Login() {

  return (
    <div className="flex h-screen items-center justify-center">
      <Card  className="h-[500px] w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl pt-4">Entra</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 pt-12">
          <Label htmlFor="email" className="text-xl">
            Nom d'usuari
          </Label>
          <Input
            
            
          />
          <Label htmlFor="password" className="text-xl pt-2">
            Contrasenya
          </Label>
          <Input
            
            
          />
        </CardContent>
        <CardFooter className="flex justify-center pt-9">
          <Button  className="w-[40%] bg-teal-400">
            Iniciar sessió
          </Button>
        </CardFooter>
      </Card>
      
    </div>
  );
}

export default Login;