// src/pages/index.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // параллакс движения мыши
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      if(containerRef.current) {
        containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // анимация частиц и линий
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2 + 1,
    }));

    const lines = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 200 + 100,
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() - 0.5) * 0.02,
    }));

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,220,255,0.8)";
        ctx.shadowColor = "rgba(0,220,255,1)";
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      lines.forEach(l => {
        l.angle += l.speed;
        const x2 = l.x + Math.cos(l.angle) * l.length;
        const y2 = l.y + Math.sin(l.angle) * l.length;

        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(0,180,255,0.35)";
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "rgba(0,180,255,0.6)";
        ctx.shadowBlur = 10;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <img
        src="/background.jpg"
        alt="SkyNest background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-cyan-300 mb-6 drop-shadow-lg tracking-wide">
          SkyNest
        </h1>
        <p className="text-xl md:text-2xl text-cyan-100/90 max-w-2xl leading-relaxed">
          Пространство будущего. Дом, который парит в облаках.
          Энергия, свобода, автономия — всё в одном месте.
        </p>
      </motion.div>
    </div>
  );
}
