import { useEffect, useRef, useState } from 'react';
import styles from './SparkleCursor.module.css';

const SPARKLE_COLORS = [
  '#a855f7', // Soft purple
  '#06b6d4', // Electric blue
  '#ffffff', // White sparkle
  '#ec4899'  // Pink highlight
];

export default function SparkleCursor() {
  const canvasRef = useRef(null);
  
  // Custom cursor position state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Keep mouse tracking references for the animation frame loop
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, velocity: 0 });
  const particlesRef = useRef([]);

  // Handle mouse movements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate velocity
      const dx = x - mouseRef.current.lastX;
      const dy = y - mouseRef.current.lastY;
      mouseRef.current.velocity = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.lastX = x;
      mouseRef.current.lastY = y;
      
      setPosition({ x, y });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'OPTION' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('li') ||
        target.closest('select') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable') ||
        target.closest('[class*="roadmapNode"]') ||
        target.closest('[class*="satelliteNode"]') ||
        target.closest('[class*="conceptChip"]')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth trail follower animation
  useEffect(() => {
    let frameId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.14, // Slightly delayed trailing factor
          y: prev.y + dy * 0.14
        };
      });
      frameId = requestAnimationFrame(updateTrail);
    };
    frameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(frameId);
  }, [position]);

  // Particle Physics and Canvas Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId;

    const createParticle = (x, y, isHovered) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = isHovered ? Math.random() * 2.5 + 0.8 : Math.random() * 1.5 + 0.3;
      
      const particleTypes = ['star', 'diamond', 'dot', 'shimmer'];
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4, // float slightly upward
        size: isHovered ? Math.random() * 6 + 3 : Math.random() * 4 + 1.5,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        alpha: 1,
        decay: isHovered ? 0.015 + Math.random() * 0.01 : 0.02 + Math.random() * 0.015,
        shrink: 0.01 + Math.random() * 0.01,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        driftX: (Math.random() - 0.5) * 0.2,
        type
      };
    };

    const updateAndDrawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      
      // Spawn new particles based on velocity and hover state
      if (mouse.velocity > 1) {
        const spawnCount = hovered ? 3 : 1;
        for (let i = 0; i < spawnCount; i++) {
          // Add small position variance
          const offsetX = (Math.random() - 0.5) * 10;
          const offsetY = (Math.random() - 0.5) * 10;
          particlesRef.current.push(createParticle(mouse.x + offsetX, mouse.y + offsetY, hovered));
        }
      }
      
      // Hover ambient shimmers (spawn even if mouse is still)
      if (hovered && Math.random() < 0.15) {
        particlesRef.current.push(createParticle(mouse.x, mouse.y, true));
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx + p.driftX;
        p.y += p.vy;
        p.size = Math.max(0, p.size - p.shrink);
        p.alpha = Math.max(0, p.alpha - p.decay);
        p.rotation += p.rotationSpeed;
        
        if (p.alpha <= 0 || p.size <= 0) return false;
        
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        // Add soft glow shadow
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        
        // Draw particle shape
        if (p.type === 'star') {
          // Curved 4-pointed star
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(0, 0, p.size, 0);
          ctx.quadraticCurveTo(0, 0, 0, p.size);
          ctx.quadraticCurveTo(0, 0, -p.size, 0);
          ctx.quadraticCurveTo(0, 0, 0, -p.size);
          ctx.closePath();
          ctx.fill();
        } else if (p.type === 'diamond') {
          // Diamond vector
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.7, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.7, 0);
          ctx.closePath();
          ctx.fill();
        } else if (p.type === 'shimmer') {
          // Pulse cross
          ctx.beginPath();
          ctx.moveTo(-p.size * 0.5, 0);
          ctx.lineTo(p.size * 0.5, 0);
          ctx.moveTo(0, -p.size * 0.5);
          ctx.lineTo(0, p.size * 0.5);
          ctx.stroke();
        } else {
          // Soft circular dot
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
        return true;
      });

      // Decay velocity slowly
      mouse.velocity *= 0.9;
      
      animationFrameId = requestAnimationFrame(updateAndDrawParticles);
    };

    updateAndDrawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hovered]);

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvasOverlay} />
      <div
        className={`${styles.sparkleDot} ${hovered ? styles.hovered : ''} ${clicked ? styles.clicked : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`${styles.sparkleFollower} ${hovered ? styles.hovered : ''} ${clicked ? styles.clicked : ''}`}
        style={{ 
          left: `${trail.x}px`, 
          top: `${trail.y}px`,
          '--skill-color': hovered ? 'var(--skill-color, #6366f1)' : 'rgba(255, 255, 255, 0.3)'
        }}
      />
    </>
  );
}
