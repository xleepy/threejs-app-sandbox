import { lazy } from "react";
import { Canvas } from "@react-three/offscreen";
import "./App.css";
import RenderWorker from "./worker?worker";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./AppScene"));

const worker = new RenderWorker();

export default function App() {
  return <Canvas fallback={<Scene />} worker={worker} shadows />;
}
