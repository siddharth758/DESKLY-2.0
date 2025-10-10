import { useState, useCallback } from "react";
import { Plus } from "lucide-react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 100, y: 100 },
    data: { value: "" },
  },
];

const initialEdges = [];

// Custom node component
const TextUpdaterNode = ({ id, data, onAddNode }) => {
  const [value, setValue] = useState(data.value || "");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #000",
        borderRadius: "6px",
        padding: "6px",
        background: "#fff",
        position: "relative",
      }}
      className="text-updater-node"
    >
      <Handle type="target" position={Position.Top} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: "9px",
          fontSize: "14px",
          border: "1px solid #777777ff",
          borderRadius: "4px",
          width: "120px",
          outline: "none",
        }}
      />
      <div
        className="plus-icon"
        onClick={() => onAddNode(id)}
        style={{
          marginLeft: "6px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          opacity: 0,
          pointerEvents: "auto", // icon clickable
          transition: "opacity 0.2s",
        }}
      >
        <Plus size={18} color="black" />
      </div>
      <Handle type="source" position={Position.Bottom} />

      {/* CSS for hover visibility */}
      <style>{`
        .text-updater-node:hover .plus-icon {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default function MindMap() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // Add new node to the right of the clicked node
  const handleAddNode = useCallback(
    (parentId) => {
      setNodes((nds) => {
        const parent = nds.find((n) => n.id === parentId);
        if (!parent) return nds;

        const newId = `node-${nds.length + 1}`;
        const newNode = {
          id: newId,
          type: "textUpdater",
          position: {
            x: parent.position.x + 150,
            y: parent.position.y,
          },
          data: { value: "" },
        };

        return [...nds, newNode];
      });

      setEdges((eds) => [
        ...eds,
        {
          id: `e-${parentId}-${nodes.length + 1}`,
          source: parentId,
          target: `node-${nodes.length + 1}`,
        },
      ]);
    },
    [nodes.length]
  );

  const nodeTypes = {
    textUpdater: (props) => (
      <TextUpdaterNode {...props} onAddNode={handleAddNode} />
    ),
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background variant="lines" gap={14} size={0.5} color="#d1d1d1ff" />
        <MiniMap />
        <Controls
          style={{
            left: "10px",
            bottom: "1px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </ReactFlow>
    </div>
  );
}
