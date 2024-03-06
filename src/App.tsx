// import { useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Luma } from "./Luma";
import { Stats } from "@react-three/drei";
import "./App.css";

// type BoxProps = {
//   position?: Vector3;
// };

// const Box = ({ position }: BoxProps) => {
//   const [isHovered, setHover] = useState(false);

//   const meshRef = useRef<Mesh<
//     BufferGeometry<NormalBufferAttributes>,
//     Material | Material[],
//     Object3DEventMap
//   > | null>(null);

//   const pointerOver = useCallback(() => {
//     setHover(true);
//   }, []);

//   const pointerOut = useCallback(() => {
//     setHover(false);
//   }, []);

//   useFrame((_, delta) => {
//     const { current } = meshRef;
//     if (!current) {
//       return;
//     }
//     current.rotation.x += delta;
//   });
//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       onPointerOver={pointerOver}
//       onPointerOut={pointerOut}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// };

function App() {
  return (
    <Canvas className="three-root">
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
      <Stats />
    </Canvas>
  );
}

export default App;
