import { Luma } from "./Luma";
import { Stats, OrbitControls } from "@react-three/drei";

export default function AppScene() {
  return (
    <mesh>
      {/* <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />
      */}
      <Luma />
      <OrbitControls />
      <Stats />
    </mesh>
  );
}
