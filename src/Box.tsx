import { useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import type {
  BufferGeometry,
  Vector3,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

type BoxProps = {
  position?: Vector3;
};

export const Box = ({ position }: BoxProps) => {
  const [isHovered, setHover] = useState(false);

  const meshRef = useRef<Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  > | null>(null);

  const pointerOver = useCallback(() => {
    setHover(true);
  }, []);

  const pointerOut = useCallback(() => {
    setHover(false);
  }, []);

  useFrame((_, delta) => {
    const { current } = meshRef;
    if (!current) {
      return;
    }
    current.rotation.x += delta;
  });
  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
