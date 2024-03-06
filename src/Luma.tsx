import { Object3DNode, extend, useFrame } from "@react-three/fiber";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import { useRef } from "react";
import { isMobile } from "./helpers";
// Make LumaSplatsThree available to R3F
extend({ LumaSplats: LumaSplatsThree });

// For typeScript support:
declare module "@react-three/fiber" {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>;
  }
}

const mask = isMobile()
  ? LumaSplatsSemantics.FOREGROUND
  : LumaSplatsSemantics.ALL;

export function Luma() {
  const lumaRef = useRef<LumaSplatsThree>(null);
  useFrame((_, delta) => {
    const { current } = lumaRef;
    if (!current) {
      return;
    }
    current.rotation.y += delta;
  });
  return (
    <lumaSplats
      ref={lumaRef}
      semanticsMask={mask}
      source="https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67"
      position={[0, 0, 0]}
      scale={1}
    />
  );
}
