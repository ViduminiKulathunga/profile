import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";

const Hero = () => {
  const controls = useControls("HackerRoom", {
    positionX: {
      value: 0.0,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.3,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: -2.1,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 25.1,
      min: -10,
      max: 70,
    },
    rotationY: {
      value: 15.7,
      min: -10,
      max: 70,
    },
    rotationZ: {
      value: 37.7,
      min: -10,
      max: 70,
    },
    scale: {
      value: 15.7,
      min: 0.1,
      max: 70,
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Vidumini Kulathunga <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 10, 20]} />
            <HackerRoom
              // scale={30}
              // position={[0, 0, 0]}
              // rotation={[0, Math.PI, 0]}
              scale={[controls.scale, controls.scale, controls.scale]}
              position={[
                controls.positionX,
                controls.positionY,
                controls.positionZ,
              ]}
              rotation={[
                controls.rotationX,
                controls.rotationY,
                controls.rotationZ,
              ]}
            />

            <ambientLight intensity={7} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
