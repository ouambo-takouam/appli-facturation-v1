"use client";
import React, { useEffect, useRef } from "react";

const replaceColor = (svgString, newColor) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="${newColor}"`;
  return svgString.replace(regex, replacement);
};

export const Icon = ({
  name,
  width,
  height,
  color = "rgb(141, 144, 150)",
  ...props
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = async () =>
      await import(`@public/images/svg/${name}.svg`);

    svgElement().catch((e) => {
      console.error("<strong>On loading the SVG</strong>", e);
    });

    svgElement().then((svg) => {
      svgRef.current &&
        (svgRef.current.innerHTML = replaceColor(svg.default, color));
    });
  }, [name, color]);

  return <svg width={width} height={height} ref={svgRef} {...props}></svg>;
};
