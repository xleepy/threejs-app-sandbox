// import { useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Luma } from "./Luma";
import { Stats, OrbitControls } from "@react-three/drei";
import "./App.css";

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
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}

export default App;
