"use client";

import { useHauntedHouse } from "./useHauntedHouse";
import { useRef } from "react";

export default function ThreeDeeTextMinecraftDonuts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useHauntedHouse(canvasRef);

  return (
    <>
      <title>Haunted House</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👻</text></svg>"
      />
      <canvas ref={canvasRef} className="webgl"></canvas>;
    </>
  );
}
