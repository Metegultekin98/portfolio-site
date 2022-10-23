import { ReactElement, useCallback, useState } from "react";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";
// import { particleOptions } from "../options/particles";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

interface NextComponent {
  children?: ReactElement;
}

export default function Layout({ children }: NextComponent) {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const [playButton, setPlayButton] = useState("PAUSE");

  const bgToggle = () => {
    const animation = document.querySelector(
      ".synthwave-effect"
    ) as HTMLElement;
    const running = animation.style.animationPlayState || "running";
    animation.style.animationPlayState =
      running === "running" ? "paused" : "running";
    running === "running" ? setPlayButton("PLAY") : setPlayButton("PAUSE");
  };

  return (
    <div className="layout-container h-screen w-screen position-relative text-white">
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      /> */}
      <button
        type="button"
        onClick={bgToggle}
        className="tv-playback flex items-center absolute left-4 top-4 text-4xl"
      >
        {playButton}
        {playButton === "PLAY" ? (
          <IoPlaySharp color="white" />
        ) : (
          <IoPauseSharp color="white" />
        )}
      </button>

      <div className="synthwave position-absolute">
        <div className="synthwave-effect w-100 h-100"></div>
      </div>

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>

      <footer></footer>
    </div>
  );
}
