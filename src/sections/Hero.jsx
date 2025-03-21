import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import ReactLogo from "../components/ReactLogo";
import Diamond from "../components/Diamond";
import { OrbitControls } from "@react-three/drei";
import World from "../components/World";

import Button from "../components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSamll = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSamll, isMobile, isTablet);

  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 0.0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.3,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: -2.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 25.1,
  //     min: -10,
  //     max: 70,
  //   },
  //   rotationY: {
  //     value: 15.7,
  //     min: -10,
  //     max: 70,
  //   },
  //   rotationZ: {
  //     value: 37.7,
  //     min: -10,
  //     max: 70,
  //   },
  //   scale: {
  //     value: 15.7,
  //     min: 0.1,
  //     max: 70,
  //   },
  // });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Vidumini Kulathunga <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Software Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas
          className="w-full h-full"
          camera={{ position: [-5, 0.5, 5], fov: 45 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 1.5, 20]} />

            <HackerRoom
              scale={isTablet ? 5 : isMobile ? 2.8 : 5.6}
              // scale={isTablet ? 8.7 : isMobile ? 8.7 : 13.6}
              position={
                isTablet
                  ? [0, -7, -2.1]
                  : isMobile
                  ? [0, -2.8, -2.1]
                  : [0, -8, -3.1]
              }
              rotation={[0, Math.PI, 0]}

              // scale={sizes.deskScale}
              // position={sizes.deskPosition}
              // rotation={[0, Math.PI, 0]}

              // scale={[controls.scale, controls.scale, controls.scale]}
              // position={[
              //   controls.positionX,
              //   controls.positionY,
              //   controls.positionZ,
              // ]}
              // rotation={[
              //   controls.rotationX,
              //   controls.rotationY,
              //   controls.rotationZ,
              // ]}
            />

            <group>
              <ReactLogo
                position={
                  isTablet ? [0, 3, -3] : isMobile ? [0, 5, -3] : [0, 3, -3]
                }
              />

              <Diamond
                autoRotate
                autoRotateSpeed={1}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                rotation={[0, 0, 0.715]}
                position={
                  isTablet
                    ? [-4.8, 1.8 + 0.5, 0]
                    : isMobile
                    ? [-3.1, 1.8 + 0.5, 0]
                    : [-9.1, 1.8 + 0.5, 0]
                }
              />
              <World
                scale={isTablet ? 0.01 : isMobile ? 0.007 : 0.0105}
                position={
                  isTablet
                    ? [0, -3, -3.1]
                    : isMobile
                    ? [0, 0, -3.1]
                    : [0, -3, -3.1]
                }
              />
            </group>

            <ambientLight intensity={7} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            {!isMobile ? <OrbitControls enableZoom={false} /> : <></>}
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
