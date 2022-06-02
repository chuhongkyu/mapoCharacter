import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF(`${env.PUBLIC_URL}/RYan.glb`);

  useFrame(() => {
    model.current.rotation.y += 0.01;
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
