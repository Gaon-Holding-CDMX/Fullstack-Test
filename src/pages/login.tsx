import Layout from "@/components/common/Layout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-6rem)] flex justify-center items-center w-full">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-5 max-md:container w-[600px] p-7">
          <div className="flex flex-col gap-10 bg-background p-10 rounded-md">
            <h2 className="text-xl font-bold">Iniciar Sesión en EVAUTH</h2>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <Label>Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="•••••••••••"
                  required
                />
              </div>
            </div>
            <Button id="login">Iniciar Sesión</Button>
          </div>
          <div className="flex gap-2">
            <div className="text-slate-300">¿No tienes cuenta?</div>
            <a href="/register" className="text-blue-300 font-bold">
              Regístrate
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

Login.Layout = Layout;
