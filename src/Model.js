import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF("/RYan.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // model.current.rotation.x = 2.3;
    // model.current.rotation.z = 4.6;
    // model.current.rotation.y = 1.6;
  });

  return (
    <group
      ref={model}
      {...props}
      dispose={null}
      scale={1}
      position={[0, -30, 0]}
    >
      <mesh geometry={nodes.ryan.geometry} material={materials.ryan} />
    </group>
  );
};

export default Model;
