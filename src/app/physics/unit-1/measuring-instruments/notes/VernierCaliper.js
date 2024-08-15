'use client'

import React, { useEffect, useRef, useState } from 'react';

const VernierSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayValues, setDisplayValues] = useState(false);
  const [displayVirtualDivs, setDisplayVirtualDivs] = useState(false);
  const [zeroError, setZeroError] = useState(0);
  const [zoom, setZoom] = useState(125);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize variables
    let ox = 20, oy = 20;
    let isdragging = false;
    let isMainDragging = false;
    const MMTOPIXELFACTOR = 10;
    const msd = 10;
    const vsd = 9;
    let vernier;
    const mainscaleHeight = 80;
    const mainscaleWidth = 500;
    const vernierscaleHeight = 50;
    const vernierscaleWidth = 100;
    const mainscaleZero = 0;
    let vernierscaleZero = 0;
    const numDiv = 30;
    let Xoffset = 55;
    let Yoffset = 45;
    let path;
    let msReading = 0;
    let vsReading = 0;
    let scale = zoom / 100;

    // Function definitions (createmainscalePath, paint, drawLine, outString, drawMainScale, etc.)
    // ... (copy all the function definitions from the original JavaScript)


    
    // Event listeners
    canvas.addEventListener('wheel', mouseWheelMoved);
    canvas.addEventListener('mousemove', mouseDragged);
    canvas.addEventListener('mousedown', mousePressed);
    canvas.addEventListener('mouseup', mouseReleased);
    canvas.addEventListener('touchstart', myTouchStart, false);
    canvas.addEventListener('touchmove', myTouchMove, false);
    canvas.addEventListener('touchend', myTouchEnd, false);
    window.addEventListener('keydown', onKeyEvent, false);

    // Initialize and paint
    init();
    paint();

    // Cleanup
    return () => {
      canvas.removeEventListener('wheel', mouseWheelMoved);
      canvas.removeEventListener('mousemove', mouseDragged);
      canvas.removeEventListener('mousedown', mousePressed);
      canvas.removeEventListener('mouseup', mouseReleased);
      canvas.removeEventListener('touchstart', myTouchStart);
      canvas.removeEventListener('touchmove', myTouchMove);
      canvas.removeEventListener('touchend', myTouchEnd);
      window.removeEventListener('keydown', onKeyEvent);
    };
  }, [displayValues, displayVirtualDivs, zeroError, zoom]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 font-light">
      <canvas
        ref={canvasRef}
        width={720}
        height={400}
        className="border border-gray-300"
      />
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={displayValues}
            onChange={(e) => setDisplayValues(e.target.checked)}
          />
          <span className="ml-2">Check here to display values</span>
        </label>
      </div>
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={displayVirtualDivs}
            onChange={(e) => setDisplayVirtualDivs(e.target.checked)}
          />
          <span className="ml-2">
            Check here to display virtual divisions (you may need to zoom in to see them clearly)
          </span>
        </label>
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <span className="mr-2 font-bold">Zero error:</span>
          <input
            type="range"
            min="-9"
            max="9"
            value={zeroError}
            onChange={(e) => setZeroError(parseInt(e.target.value))}
            className="form-range"
          />
          <span className="ml-2">{zeroError}</span>
        </label>
      </div>
      <div className="mt-2">
        <label className="inline-flex items-center">
          <span className="mr-2 font-bold">Zoom:</span>
          <input
            type="range"
            min="10"
            max="1000"
            value={zoom}
            onChange={(e) => setZoom(parseInt(e.target.value))}
            className="form-range"
          />
          <span className="ml-2">{zoom}%</span>
        </label>
      </div>
    </div>
  );
};

export default VernierSimulator;