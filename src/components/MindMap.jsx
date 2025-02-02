import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/slice';
import ReactFlow, { Controls, MiniMap, Background } from 'react-flow-renderer';
import dagre from 'dagre';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@mui/material'; // Import Button from MUI

// Layout configuration
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });
};

function MindMap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  // Convert data to nodes and edges
  const nodes = data.map((post, index) => ({
    id: post.id.toString(),
    data: { label: post.title },
    position: { x: 0, y: 0 }, // Initial position (will be updated by layout)
    type: 'default',
  }));

  const edges = data.map((post, index) => ({
    id: `e${post.id}-body`,
    source: post.id.toString(),
    target: data[index + 1] ? data[index + 1].id.toString() : data[0].id.toString(), // Connect to next node or loop back
  }));

  // Apply layout to nodes and edges
  const layoutedNodes = getLayoutedElements(nodes, edges);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Button to go back to the table */}
      <Button
        variant="contained"
        onClick={() => navigate('/')} // Navigate to the table view
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000, // Ensure the button is above the mindmap
        }}
      >
        Go Back to Table
      </Button>

      {/* Mindmap */}
      <ReactFlow
        nodes={layoutedNodes}
        edges={edges}
        fitView
        attributionPosition="top-right"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default MindMap;