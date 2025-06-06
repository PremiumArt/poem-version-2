import { useEffect, useRef } from 'react';

export const BackgroundPattern = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPattern();
    };
    
    const drawPattern = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set pattern properties
      const tileSize = 60;
      const strokeColor = '#e5e7eb';
      const lineWidth = 0.5;
      
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      
      // Draw islamic geometric pattern
      for (let x = 0; x < canvas.width + tileSize; x += tileSize) {
        for (let y = 0; y < canvas.height + tileSize; y += tileSize) {
          // Draw star pattern
          ctx.beginPath();
          
          // Outer octagon
          const r = tileSize / 2 * 0.8;
          for (let i = 0; i < 8; i++) {
            const angle = Math.PI / 4 * i;
            const px = x + tileSize / 2 + Math.cos(angle) * r;
            const py = y + tileSize / 2 + Math.sin(angle) * r;
            
            if (i === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.closePath();
          ctx.stroke();
          
          // Inner star
          ctx.beginPath();
          const innerR = tileSize / 2 * 0.4;
          for (let i = 0; i < 8; i++) {
            const angle = Math.PI / 4 * i + Math.PI / 8;
            const px = x + tileSize / 2 + Math.cos(angle) * innerR;
            const py = y + tileSize / 2 + Math.sin(angle) * innerR;
            
            if (i === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};