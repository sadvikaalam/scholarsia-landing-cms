'use client';
import { Box } from '@mantine/core';
import { ReactNode, CSSProperties } from 'react';

interface AuroraBackgroundProps {
  children: ReactNode;
  showRadialGradient?: boolean;
  style?: CSSProperties;
}

export function AuroraBackground({ children, showRadialGradient = true, style }: AuroraBackgroundProps) {
  const wrapperStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--mantine-color-gray-0)',
    transition: 'background-color 200ms ease',
    ...style
  };

  const auroraContainerStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  };

  const auroraEffectStyle: CSSProperties = {
    position: 'absolute',
    inset: '-10px',
    opacity: 0.5,
    pointerEvents: 'none',
    willChange: 'transform',
    filter: 'blur(10px)',
    maskImage: 'radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)',
  };

  const dotPatternStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(128, 128, 128, 0.1) 2px, transparent 0)',
    backgroundSize: '24px 24px',
    pointerEvents: 'none',
    zIndex: 1,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  };

  // Add keyframes for aurora animation
  const keyframesStyle = `
    @keyframes aurora {
      from {
        background-position: 50% 50%, 50% 50%;
      }
      to {
        background-position: 350% 50%, 350% 50%;
      }
    }
    
    [data-mantine-color-scheme="dark"] .aurora-wrapper {
      background-color: var(--mantine-color-dark-9);
    }
    
    .aurora-effect::before {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        100deg,
        #CE2D34 0%,
        #8A3FFC 30%,
        #FFC107 60%,
        #CE2D34 90%
      );
      background-size: 200%;
      animation: aurora 90s linear infinite;
    }
    
    .aurora-effect::after {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        100deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.2) 7%,
        transparent 10%,
        transparent 12%,
        rgba(255, 255, 255, 0.1) 16%
      );
      background-size: 300%;
      mix-blend-mode: soft-light;
      animation: aurora 10s linear infinite;
    }
    
    [data-mantine-color-scheme="dark"] .aurora-effect::after {
      background: repeating-linear-gradient(
        100deg,
        var(--mantine-color-dark-9) 0%,
        var(--mantine-color-dark-9) 7%,
        transparent 10%,
        transparent 12%,
        var(--mantine-color-dark-9) 16%
      );
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <Box className="aurora-wrapper" style={wrapperStyle}>
        <div style={auroraContainerStyle}>
          <div className="aurora-effect" style={auroraEffectStyle} />
        </div>
        <div style={dotPatternStyle} />
        <div style={contentStyle}>
          {children}
        </div>
      </Box>
    </>
  );
}