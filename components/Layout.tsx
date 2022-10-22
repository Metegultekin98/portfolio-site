import Head from "next/head";
import { ReactElement, useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particleOptions } from "../options/particles"

interface NextComponent {
  children?: ReactElement;
}

export default function Layout({ children }: NextComponent) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  
  return (
    <div className="layout-container h-screen w-screen position-relative text-white">

      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      /> */}
      <div className="synthwave position-absolute">
        <div className="synthwave-effect w-100 h-100"></div>
      </div>
      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
