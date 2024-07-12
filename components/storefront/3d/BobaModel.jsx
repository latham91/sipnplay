import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

useGLTF.preload("/bubble_tea_and_cookies.glb");

export default function BobaModel() {
  const group = useRef(null);
  const { scene } = useGLTF("/bubble_tea_and_cookies.glb");

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} position={[2, -1, 1]}>
      <OrbitControls />
      <primitive object={scene} />
    </group>
  );
}
