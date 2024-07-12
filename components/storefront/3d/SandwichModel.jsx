import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

useGLTF.preload("/club_sandwich_pile.glb");

export default function SandwichModel() {
  const group = useRef(null);
  const { scene } = useGLTF("/club_sandwich_pile.glb");

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
