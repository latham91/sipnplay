"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html, Stage } from "@react-three/drei";
import CoffeeModel from "./CoffeeModel";

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} %</Html>;
}

export default function SceneTwo() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} resize={{ scroll: false }} className="relative">
      <ambientLight />

      <Suspense fallback={<Loader />}>
        <Stage environment="forest">
          <CoffeeModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
}
