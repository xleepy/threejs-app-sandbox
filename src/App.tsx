import { lazy, useCallback, useState } from "react";
import { Canvas } from "@react-three/offscreen";
import "./App.css";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./AppScene"));

const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
  type: "module",
});

export default function App() {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | undefined
  >("never");
  // prevent Canvas from rerendering on each reference change
  const initGl = useCallback((canvas: HTMLCanvasElement | OffscreenCanvas) => {
    const renderer = new WebGPURenderer({
      canvas: canvas as HTMLCanvasElement,
    });
    renderer.init().then(() => setFrameLoop("always"));
    return renderer;
  }, []);
  return (
    <Canvas
      frameloop={frameloop}
      gl={initGl}
      fallback={<Scene />}
      worker={worker}
      shadows
    />
  );
}
