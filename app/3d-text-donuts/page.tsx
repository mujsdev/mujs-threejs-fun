"use client";

import { useRef } from "react";
import { useThreeDTextDonuts } from "./useThreeDTextDonuts";

// TODO: NEED TO ADD THE HAUNTED HOUSE PROJECT
// ✅ TODO: NEED TO REPLACE ALL OF THE FILES IN THE mujs-threejs-fun project AS WELL AND THEN PUSH THE UPDATES ASAP
export default function ThreeDeeTextMinecraftDonuts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useThreeDTextDonuts(canvasRef);

  return (
    <>
      <title>3D Text and Minecraft Donuts</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍩</text></svg>"
      />
      <canvas ref={canvasRef} className="webgl"></canvas>;
    </>
  );
}
