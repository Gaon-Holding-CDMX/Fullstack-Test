"use client";

import { useState, useRef } from "react";
import { LayoutWithoutLogin } from "@/components/common/Layout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import axios from "axios";
import { handleKeyDown, handleEnter } from "@/utils";

export default function Login() {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function login() {
    axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then((_) => {
        window.location.href = "/home";
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Contraseña</Label>
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleEnter(e, login)}
                  placeholder="•••••••••••"
                  required
                />
              </div>
            </div>
            <Button id="login" onClick={login}>
              Iniciar Sesión
            </Button>
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

Login.Layout = LayoutWithoutLogin;
