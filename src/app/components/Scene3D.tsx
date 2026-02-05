import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model3D from "./Model3D";

export default function Scene3D() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100">
      
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <Model3D scale={1.5} />

        {/* Controls */}
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
        />

        {/* Environment reflections */}
        <Environment preset="city" />

      </Canvas>

    </div>
  );
}
