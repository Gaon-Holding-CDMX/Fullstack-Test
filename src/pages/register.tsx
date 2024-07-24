"use client";

import { useState, useRef } from "react";
import axios from "axios";
import Layout from "@/components/common/Layout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import { handleKeyDown, handleEnter } from "@/utils";

export default function Login() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    axios
      .post("/api/auth/register", {
        email,
        password,
      })
      .then((res) => {
        window.location.href = "/login";
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
            <h2 className="text-xl font-bold">Registrarse en EVAUTH</h2>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <Label>Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 col-span-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    ref={passwordRef}
                    id="password"
                    type="password"
                    value={password}
                    onKeyDown={(e) => handleEnter(e, register)}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="•••••••••••"
                  />
                </div>
                <p className="text-xs text-slate-300 text-right">
                  minimo ocho caracteres
                </p>
              </div>
            </div>
            <Button id="register" onClick={register}>
              Registrarse
            </Button>
          </div>
          <div className="flex gap-2">
            <div className="text-slate-300">¿Ya tienes cuenta?</div>
            <a href="/login" className="text-blue-300 font-bold">
              Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

Login.Layout = Layout;
