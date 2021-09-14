import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useUserAgent } from 'next-useragent';

const colorParticle = '#ff9500';
const spacing = 2560; //px
const sizes = [4, 3, 2, 1];
const times = [60, 120, 180, 200];
const particlesMax = [1000, 900, 800, 500, 1100, 1200, 700];

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const _particles = (max: number): string => {
  let css = `0px 0px ${colorParticle},`;
  for (let i = 0; i < max; i++) {
    const ending = i < max - 1 ? ',' : ';';
    css += ` ${random(1, spacing)}px ${random(1, spacing)}px ${colorParticle}${ending}`;
  }
  return css;
};

const particles = (max: number, size: number): string => {
  let css = 'box-shadow: ' + _particles(max) + ';\n';
  css += 'border-radius: 50%;\n';
  css += `height: ${size}px;\n`;
  css += `width: ${size}px;\n`;
  return css;
};

const particleClasses = (): string => {
  let css = '';
  for (let i = 0; i < times.length; i++) {
    css += `.particle-${i} {\n`;
    css += `animation: animParticle ${times[i]}s linear infinite;\n`;
    css += particles(particlesMax[i], sizes[i]);
    css += '}\n';

    css += `.particle-${i}:after {\n`;
    css += particles(particlesMax[i + 1], sizes[i]);
    css += '}\n';
  }

  return css;
};

const GlobalParticles = createGlobalStyle`
.animation-wrapper {
  position: relative;
  height: 0;
  z-index: 0;
}

@keyframes animParticle {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-${spacing}px);
  }
}

${particleClasses()}
`;

const PageParticles = ({ uaString }: { uaString: string }) => {
  const ua = useUserAgent(uaString);
  if (!ua.isDesktop) {
    return <div />;
  }

  return (
    <>
      <GlobalParticles />
      <div className="animation-wrapper">
        {times.map((value: number, index: number) => (
          <div key={index} className={`particle particle-${index}`} />
        ))}
      </div>
    </>
  );
};

export default PageParticles;
