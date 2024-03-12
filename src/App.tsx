import { useCallback, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import AppScene from "./AppScene";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported

export default function App() {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | undefined
  >("never");

  // prevent Canvas from rerendering on each reference change
  const initGl = useCallback((canvas: HTMLCanvasElement | OffscreenCanvas) => {
    const renderer = new WebGPURenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: false,
    });
    renderer.init().then(() => {
      setFrameLoop("always");
    });
    return renderer;
  }, []);
  return (
    <Canvas frameloop={frameloop} gl={initGl} shadows>
      <AppScene />
    </Canvas>
  );
}
