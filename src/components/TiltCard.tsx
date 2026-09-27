import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max degrees, default 6
  glare?: boolean;
  scale?: number; // scale on hover, e.g. 1.02
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  glare = true,
  scale = 1.02,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position relative to center of card (-1 to 1)
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;

      const rotateX = -mouseY * maxTilt * 2;
      const rotateY = mouseX * maxTilt * 2;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, 1)`
      );

      if (glare) {
        setGlareStyle({
          x: ((e.clientX - rect.left) / width) * 100,
          y: ((e.clientY - rect.top) / height) * 100,
          opacity: 0.15,
        });
      }
    },
    [maxTilt, scale, glare]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
      }}
      className={`relative will-change-transform ${className}`}
      {...rest}
    >
      {/* Dynamic 3D Glare Light Reflection Overlay */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{ opacity: glareStyle.opacity }}
        >
          <div
            className="absolute inset-0 transition-transform duration-75"
            style={{
              background: `radial-gradient(circle 320px at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.28), rgba(211, 47, 47, 0.08) 50%, transparent 80%)`,
            }}
          />
        </div>
      )}

      {children}
    </div>
  );
};
