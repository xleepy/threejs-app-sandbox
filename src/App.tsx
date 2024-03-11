import { lazy, useCallback, useState } from "react";
import { Canvas } from "@react-three/offscreen";
import "./App.css";
import RenderWorker from "./worker?worker";
import { WebGLRenderer, WebGLRendererParameters } from "three";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./AppScene"));

const worker = new RenderWorker();

class WebGPURenderer extends WebGLRenderer {
  private context: any | null = null;
  constructor(params?: WebGLRendererParameters) {
    super(params);
    this.context = this.getContext();
  }

  public async init() {
    const adapter = await navigator.gpu.requestAdapter();

    const device = await adapter?.requestDevice();
    this.context = this.getContext();
    this.context.gpu = device;
  }
}

export default function App() {
  const [frameloop, setFrameLoop] = useState<
    "never" | "always" | "demand" | undefined
  >("never");

  // prevent Canvas from rerendering on each reference change
  const initGl = useCallback((canvas: HTMLCanvasElement | OffscreenCanvas) => {
    const renderer = new WebGPURenderer({
      canvas: canvas as HTMLCanvasElement,
    });
    renderer.init().then(() => {
      setFrameLoop("always");
    });
    return renderer;
  }, []);
  return (
    <Canvas
      gl={initGl}
      frameloop={frameloop}
      fallback={<Scene />}
      worker={worker}
      shadows
    />
  );
}
