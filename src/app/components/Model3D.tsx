import { useGLTF } from "@react-three/drei";

type Props = {
  scale?: number;
};

export default function Model3D({ scale = 1 }: Props) {
  const { scene } = useGLTF("/models/space-planner.glb");

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -1, 0]}
    />
  );
}

// Preload for performance
useGLTF.preload("/models/space-planner.glb");
