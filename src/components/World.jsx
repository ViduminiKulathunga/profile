import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const World = (props) => {
  const { nodes, materials } = useGLTF("/models/world.gltf");
  const groupRef = useRef();

  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      y: "+=" + Math.PI * 2, // Full rotation
      duration: 73, // Adjust speed
      repeat: 0, // Infinite loop
      ease: "linear",
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={50000}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/world.gltf");

export default World;
