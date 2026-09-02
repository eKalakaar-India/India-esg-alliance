import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground(props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "#fff",
          },
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#1B6D24",
          },
          links: {
            enable: props.link ,
            color: "rgba(0, 69, 13, 1)",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
            // outModes: { default: "bounce" },
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 1,
          },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
}