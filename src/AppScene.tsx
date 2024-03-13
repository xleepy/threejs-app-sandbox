// import { Luma } from "./Luma";
import { OrbitControls, Stats } from "@react-three/drei";
import { Luma } from "./Luma";

export default function AppScene() {
  return (
    <mesh>
      <Luma />
      <OrbitControls />
      <Stats />
    </mesh>
  );
}
