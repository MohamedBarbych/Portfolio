import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: 'transparent', // Make sure the particles background is transparent
          },
        },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          links: {
            enable: true,
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure it is behind other content
      }}
    />
  );
};

export default ParticlesBackground;
