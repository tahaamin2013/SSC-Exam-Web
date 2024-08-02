import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Main Concept' },
    position: { x: 400, y: 50 },
  },
  {
    id: '2',
    data: { label: 'Left Topic' },
    position: { x: 100, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Center Topic' },
    position: { x: 400, y: 150 },
  },
  {
    id: '4',
    data: { label: 'Right Topic' },
    position: { x: 700, y: 150 },
  },
  {
    id: '5',
    data: { label: 'Left Detail' },
    position: { x: 100, y: 250 },
  },
  {
    id: '6',
    data: { label: 'Center Detail' },
    position: { x: 400, y: 250 },
  },
  {
    id: '7',
    data: { label: 'Right Detail' },
    position: { x: 700, y: 250 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
];

function ReactFlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowPage;