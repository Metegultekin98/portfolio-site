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
    <div className="h-screen text-white bg-white dark:bg-slate-800">
      

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
