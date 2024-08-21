'use client'

import { useEffect, useRef, useState } from 'react';

export default function VernierSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [drawVirtualDivs, setDrawVirtualDivs] = useState(false);
  const [zeroError, setZeroError] = useState(0);
  const [scale, setScale] = useState(1.25);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let ox = 20, oy = 20;
  
    const vernier = {
      x: 55,
      y: 80,
      w: 100,
      h: 50,
      t: 0.7 * 50,
      path: new Path2D(),
      createPath() {
        this.path = new Path2D();
        const p = this.path;
        p.moveTo(this.x, this.y);
        p.lineTo(this.x, this.y + 3 * this.t);
        p.lineTo(this.x + 0.3 * this.t, this.y + 2.7 * this.t);
        p.lineTo(this.x + this.t, this.y + this.t);
        p.lineTo(this.x + this.w, this.y + this.t);
        p.lineTo(this.x + this.w, this.y);
        p.lineTo(this.x, this.y);
      },
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgb(229,229,229)';
        ctx.fill(this.path);
        ctx.strokeStyle = 'black';
        ctx.stroke(this.path);
      }
    };
  
    vernier.createPath();
  
    const paint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(ox, oy);
      ctx.scale(scale, scale);
      ctx.fillStyle = 'rgb(210,210,210)';
      ctx.fill(vernier.path);
      vernier.draw(ctx);
      ctx.restore();
    };
  
    const mouseWheelMoved = (e: WheelEvent) => {
      e.preventDefault();
      setScale(prev => prev + (e.deltaY < 0 ? 0.1 : -0.1));
    };
  
    // Corrected event listener from "mousewheel" to "wheel"
    canvas.addEventListener('wheel', mouseWheelMoved);
    paint();
  
    return () => {
      canvas.removeEventListener('wheel', mouseWheelMoved);
    };
  }, [scale, zeroError, displayInfo, drawVirtualDivs]);
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="text-center">
        <h1 className="text-2xl font-light">Vernier Simulator</h1>
        <canvas
          ref={canvasRef}
          className="border border-gray-300"
          width="720"
          height="400"
        >
          Your browser does not support the HTML5 canvas tag.
        </canvas>
        <div className="mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={displayInfo}
              onChange={(e) => setDisplayInfo(e.target.checked)}
            />
            <span>Check here to display values</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={drawVirtualDivs}
              onChange={(e) => setDrawVirtualDivs(e.target.checked)}
            />
            <span>Check here to display virtual divisions</span>
          </label>
        </div>
        <div className="mt-4">
          <div>
            <span className="font-bold">Zero error:</span>
            <input
              type="range"
              min="-9"
              max="9"
              value={zeroError}
              onChange={(e) => setZeroError(parseInt(e.target.value))}
            />
          </div>
          <div className="mt-2">
            <span className="font-bold">Zoom:</span>
            <input
              type="range"
              min="10"
              max="1000"
              value={scale * 100}
              onChange={(e) => setScale(parseFloat(e.target.value) / 100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
