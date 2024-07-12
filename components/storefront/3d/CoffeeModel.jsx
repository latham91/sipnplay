import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

useGLTF.preload("/cafe_latte_with_art.glb");

export default function CoffeeModel() {
  const group = useRef(null);
  const { scene } = useGLTF("/cafe_latte_with_art.glb");

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });
  return (
    <group ref={group} position={[0.0, -0.2, 4]} rotation={[0, 0, 0.5]}>
      <primitive object={scene} />
    </group>
  );
}
