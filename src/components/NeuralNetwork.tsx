"use client";

import { useEffect, useRef } from "react";

/**
 * NeuralNetwork — SVG-based neural network animation with floating nodes
 * connected by animated lines. Nodes move slowly with organic motion.
 */
export function NeuralNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes: Array<{
      el: SVGCircleElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
    }> = [];

    const lines: SVGLineElement[] = [];
    const nodeCount = 12;
    const width = 300;
    const height = 400;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = 40 + Math.random() * (width - 80);
      const y = 40 + Math.random() * (height - 80);

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", String(x));
      circle.setAttribute("cy", String(y));
      circle.setAttribute("r", String(2 + Math.random() * 3));
      circle.setAttribute("fill", `rgba(124, 58, 237, ${0.3 + Math.random() * 0.4})`);
      svg.appendChild(circle);

      nodes.push({
        el: circle,
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseX: x,
        baseY: y,
      });
    }

    // Create connecting lines
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("stroke", "rgba(124, 58, 237, 0.08)");
        line.setAttribute("stroke-width", "0.5");
        svg.insertBefore(line, svg.firstChild);
        lines.push(line);
      }
    }

    let animationId: number;

    const animate = () => {
      nodes.forEach((node) => {
        // Gentle spring back to base position
        node.vx += (node.baseX - node.x) * 0.001;
        node.vy += (node.baseY - node.y) * 0.001;
        // Random drift
        node.vx += (Math.random() - 0.5) * 0.02;
        node.vy += (Math.random() - 0.5) * 0.02;
        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        node.x += node.vx;
        node.y += node.vy;

        node.el.setAttribute("cx", String(node.x));
        node.el.setAttribute("cy", String(node.y));
      });

      // Update lines
      let lineIndex = 0;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const line = lines[lineIndex++];
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          line.setAttribute("x1", String(nodes[i].x));
          line.setAttribute("y1", String(nodes[i].y));
          line.setAttribute("x2", String(nodes[j].x));
          line.setAttribute("y2", String(nodes[j].y));

          const opacity = dist < 120 ? 0.12 * (1 - dist / 120) : 0;
          line.setAttribute(
            "stroke",
            `rgba(124, 58, 237, ${opacity})`
          );
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      // Cleanup SVG children
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      viewBox="0 0 300 400"
      aria-hidden="true"
    />
  );
}
