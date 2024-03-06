import { Object3DNode, extend } from "@react-three/fiber";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
// Make LumaSplatsThree available to R3F
extend({ LumaSplats: LumaSplatsThree });

// For typeScript support:
declare module "@react-three/fiber" {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>;
  }
}

export function Luma() {
  return (
    <lumaSplats
      semanticsMask={LumaSplatsSemantics.FOREGROUND}
      source="https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67"
      position={[-1, 0, 0]}
      scale={1}
    />
  );
}
