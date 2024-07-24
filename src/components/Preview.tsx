"use client";

import { useEffect } from "react";

export default function Preview() {
  useEffect(() => {
    // @ts-ignore
    VANTA.TRUNK({
      el: "#back",
      color: "#566aaf",
      backgroundColor: "#272d4d",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      chaos: 6.0,
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] w-full relative">
      <div id="back" className="h-full w-full absolute"></div>
      <div className="h-full w-full absolute flex justify-center items-center flex-col gap-5">
        <h1 className="text-5xl font-semibold">EVAUTH</h1>
        <h3 className="text-2xl text-center">
          EVAUTH es una plataforma de autorización para eventos.
        </h3>
      </div>
      <script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
      ></script>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js"
      ></script>
    </div>
  );
}
