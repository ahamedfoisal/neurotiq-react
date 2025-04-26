import React, { useEffect, useRef } from 'react';
import { Psychology } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

const sizes = [16, 32, 64, 192, 512];

export const LogoGenerator: React.FC = () => {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    sizes.forEach((size, index) => {
      const canvas = canvasRefs.current[index];
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Set canvas size
          canvas.width = size;
          canvas.height = size;

          // Create gradient background
          const gradient = ctx.createLinearGradient(0, 0, size, size);
          gradient.addColorStop(0, '#7FE7F3');
          gradient.addColorStop(1, '#ACB6E5');

          // Draw circle
          ctx.beginPath();
          ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Draw brain icon
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          const iconSize = size * 0.6;
          const iconX = (size - iconSize) / 2;
          const iconY = (size - iconSize) / 2;
          
          // You would need to draw the brain icon here
          // This is a simplified version
          ctx.font = `${iconSize}px "Material Icons"`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('', size/2, size/2);
        }
      }
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {sizes.map((size, index) => (
        <div key={size}>
          <canvas
            ref={(el: HTMLCanvasElement | null) => {
              canvasRefs.current[index] = el;
            }}
            width={size}
            height={size}
            style={{ border: '1px solid #ccc' }}
          />
          <p>Size: {size}x{size}</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const canvas = canvasRefs.current[index];
              if (canvas) {
                const link = document.createElement('a');
                link.download = `logo${size}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
              }
            }}
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
}; 