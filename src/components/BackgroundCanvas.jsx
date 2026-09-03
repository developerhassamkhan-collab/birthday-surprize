import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle classes for romantic background (rose petals + glowing sparkles)
    const petals = [];
    const petalCount = Math.min(Math.floor(width / 35), 35);

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 1 + 0.3,
        speedY: Math.random() * 0.9 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#f43f6e', '#fb7193', '#fdcdf9', '#d4af37', '#e8547a'][Math.floor(Math.random() * 5)]
      });
    }

    const sparkles = [];
    const sparkleCount = 45;
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        alphaSpeed: Math.random() * 0.02 + 0.005,
        color: '#ffd9e8'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw glowing sparkles
      sparkles.forEach((s) => {
        s.alpha += s.alphaSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.alphaSpeed = -s.alphaSpeed;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 240, ${Math.max(0, s.alpha * 0.7)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e8547a';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw floating petals
      petals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(232, 84, 122, 0.4)';
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
