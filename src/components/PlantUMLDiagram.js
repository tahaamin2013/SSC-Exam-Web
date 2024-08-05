// components/PlantUMLDiagram.js
import React from 'react';
import plantumlEncoder from 'plantuml-encoder';

const PlantUMLDiagram = ({ code }) => {
  const encoded = plantumlEncoder.encode(code);
  const url = `http://www.plantuml.com/plantuml/svg/${encoded}`;

  return <img src={url} alt="PlantUML Diagram" />;
};

export default PlantUMLDiagram
  ;
