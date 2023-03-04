import React from 'react';
import { RoomProvider } from "liveblocks.config";
import { 
  addEdge,
  applyEdgeChanges, 
  applyNodeChanges, 
  Background, 
  Connection, 
  Controls, 
  Edge, 
  EdgeChange, 
  Node, 
  NodeChange, 
  ReactFlow 
} from "reactflow";

const INITIAL_NODES = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: '',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: '',
  },
];

function Playground(){
  const [nodes, setNodes] = React.useState<Node[]>(INITIAL_NODES);
  const [edges, setEdges] = React.useState<Edge[]>([]);

  const onNodesChange = React.useCallback((changes: NodeChange[]) => {
    setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
  },[setNodes]);

  const onEdgesChange = React.useCallback((changes: EdgeChange[]) => {
    setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges));
  },[setEdges]);

  const onConnect = React.useCallback((connection: Connection) => {
    setEdges((prevEdges) => addEdge(connection, prevEdges));
  },[setEdges]);

  return (
    <RoomProvider id='my-room' initialPresence={{}}>
      <div className='w-screen h-screen'>
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background/>
          <Controls/>
        </ReactFlow>
      </div>
    </RoomProvider>
  )
}

export default Playground;