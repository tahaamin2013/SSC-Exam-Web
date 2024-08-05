// components/MermaidChart.tsx
"use client";
import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
    chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure that mermaid only runs in the browser
        if (typeof window !== 'undefined' && chartRef.current) {
            mermaid.initialize({ startOnLoad: true });
            mermaid.render('mermaidChart', chart, (svgCode) => {
                if (chartRef.current) {
                    chartRef.current.innerHTML = svgCode;
                }
            });
        }
    }, [chart]);

    return <div ref={chartRef} />;
};

export default MermaidChart;