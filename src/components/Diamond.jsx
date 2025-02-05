import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  MeshRefractionMaterial,
} from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Diamond = (props) => {
  const ref = useRef();
  const { nodes } = useGLTF("/models/dflat.glb");

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  // Apply GSAP rotation animation
  useGSAP(() => {
    gsap.to(ref.current.rotation, {
      y: "+=" + Math.PI * 2, // Full rotation
      duration: 28, // Adjust speed
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <mesh
            ref={ref}
            geometry={nodes.Diamond_1_0.geometry}
            rotation={[0, 0, -Math.PI / 2]}
            {...props}
          >
            <MeshRefractionMaterial
              envMap={texture}
              bounces={3}
              aberrationStrength={0.01}
              ior={2.75}
              fresnel={1}
              color="white"
              toneMapped={false}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
};

export default Diamond;
