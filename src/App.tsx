import { useCallback } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import AppScene from "./AppScene";
import { WebGLRenderer } from "three";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported

export default function App() {
  // prevent Canvas from rerendering on each reference change
  const initGl = useCallback((canvas: HTMLCanvasElement | OffscreenCanvas) => {
    const renderer = new WebGLRenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: false,
    });
    return renderer;
  }, []);
  return (
    <Canvas gl={initGl}>
      <AppScene />
    </Canvas>
  );
}
