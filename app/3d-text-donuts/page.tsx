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
      <canvas ref={canvasRef} className="webgl"></canvas>;
    </>
  );
}
