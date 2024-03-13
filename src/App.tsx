import { useCallback, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import AppScene from "./AppScene";
import { WebGLRenderer, WebGLRendererParameters } from "three";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported

class WebGPU extends WebGLRenderer {
  private context: any | null = null;
  constructor(params?: WebGLRendererParameters) {
    super(params);
  }

  public async init() {
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();
    this.context = this.getContext();
    console.log("before", this.getContext());
    this.context.gpu = device;
    console.log(this.context);
  }
}

export default function App() {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | undefined
  >("never");

  // prevent Canvas from rerendering on each reference change
  const initGl = useCallback((canvas: HTMLCanvasElement | OffscreenCanvas) => {
    const renderer = new WebGPU({
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
