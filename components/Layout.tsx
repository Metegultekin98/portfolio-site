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

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await engine.loadJSON("tsparticles", "../options/particles.json")
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
      <Head>
        <title>Mete Gultekin</title>
        <meta
          name="description"
          content="Portfolio site made by Mete Gültekin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
