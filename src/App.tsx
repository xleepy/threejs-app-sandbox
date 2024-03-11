import { lazy } from "react";
import { Canvas } from "@react-three/offscreen";
import "./App.css";

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import("./AppScene"));

const worker = new Worker(new URL("./worker.tsx", import.meta.url));

export default function App() {
  return <Canvas fallback={<Scene />} worker={worker} shadows />;
}
