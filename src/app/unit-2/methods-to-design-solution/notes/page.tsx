'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FlowchartSection = ({ title, children } :any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-indigo-100 hover:bg-indigo-200 transition-colors"
      >
        <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

const FlowchartStep = ({ title, description, shape }: any) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
    <div className="flex-1">
      <h5 className="text-lg font-semibold text-indigo-700">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="w-32 h-32 flex items-center justify-center">
      {shape === 'oval' && (
        <div className="w-full h-20 bg-indigo-500 rounded-[100%]" />
      )}
      {shape === 'parallelogram' && (
        <div className="w-full h-20 bg-indigo-500 transform skew-x-12" />
      )}
      {shape === 'rectangle' && (
        <div className="w-full h-20 bg-indigo-500" />
      )}
      {shape === 'diamond' && (
        <div className="w-24 h-24 bg-indigo-500 transform rotate-45" />
      )}
    </div>
  </div>
);

const FlowchartConceptMap = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Flowcharts and Concept Maps</h1>
      
      <FlowchartSection title="2.8.1 Flowcharts">
        <p className="text-gray-700 mb-4">
          A flowchart is a diagrammatic representation of an algorithm. It describes what operations are required to solve a given problem.
        </p>
        
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-2">Importance of flowcharts in solving a problem:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Illustrates the sequence of operations to be performed</li>
            <li>Provides an easy way to analyze and find solutions to problems</li>
            <li>Facilitates writing computer programs</li>
            <li>Helps in communicating the problem-solving method to others</li>
          </ul>
        </div>
        
        <div className="bg-green-100 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-4">Steps for drawing a flowchart:</h4>
          <FlowchartStep
            title="1. Start of the flowchart"
            description="Every flowchart should start with a trigger. The graphical representation of start of flowchart is oval shape."
            shape="oval"
          />
          <FlowchartStep
            title="2. Input to the flowchart"
            description="The flowchart designer must identify the input from the problem statement. The input is represented by a parallelogram."
            shape="parallelogram"
          />
          <FlowchartStep
            title="3. Processing in the flowchart"
            description="A flowchart designer chooses the math needed for each step. In the flowchart, a rectangle shows where calculations happen."
            shape="rectangle"
          />
          <FlowchartStep
            title="4. Decision making in flowchart"
            description="The flowchart designer picks the right logic pattern. This decision point looks like a diamond in the flowchart."
            shape="diamond"
          />
          <FlowchartStep
            title="5. Output"
            description="The flowchart must provide the required output. The output is represented with a parallelogram symbol as well."
            shape="parallelogram"
          />
          <FlowchartStep
            title="6. End of flowchart"
            description="The flowchart should have a defined end. For end of flowchart the oval symbol is used."
            shape="oval"
          />
        </div>
      </FlowchartSection>
      
      <FlowchartSection title="2.8.2 Concept Maps">
        <p className="text-gray-700 mb-4">
          A concept map is a graphical tool that represents concepts and relationships between them.
        </p>
        
        <div className="bg-yellow-100 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-2">Key features of concept maps:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Concepts are represented as boxes or circles</li>
            <li>Relationships are shown with lines or arrows</li>
            <li>Lines are labeled with linking words and phrases</li>
            <li>Used to represent connections between concepts</li>
          </ul>
        </div>
        
        <p className="text-gray-600 mb-4">
          Software tools for concept mapping include CmapTools and Mind Manager.
        </p>
      </FlowchartSection>
      
      <FlowchartSection title="Software Tools for Flowchart Designing">
        <p className="text-gray-700 mb-4">
          Various software tools are available for designing flowcharts, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Microsoft Visio</li>
          <li>LARP (Logics of Algorithms and Resolution of Problems)</li>
        </ul>
      </FlowchartSection>
    </div>
  );
};

export default FlowchartConceptMap;