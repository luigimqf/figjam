import React from 'react';
import { RoomProvider } from "liveblocks.config";
import { 
  addEdge,
  Background as ReactFlowBackground, 
  Connection, 
  ConnectionMode, 
  Controls,   
  ReactFlow, 
  useEdgesState,
  useNodesState,
} from "reactflow";
import Square from 'components/nodes/Square';
import Toolbar from 'components/Toolbar';
import Circle from 'components/nodes/Circle';
import Edge from 'components/Edge';
import StickyNote from 'components/nodes/StickyNote';

function Background(){
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [shouldPanOnDrag, setShouldPanOnDrag] = React.useState<boolean>(false);
  const [shouldSelectNode, setShouldSelectNode] = React.useState<boolean>(true);
  const [selectedNode, setSelectedNode] = React.useState<string>('');

  const nodeType = React.useMemo(() => ({square: Square, circle: Circle, sticky: StickyNote}),[]);
  const edgeType = React.useMemo(() => ({default: Edge}),[]);

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
          connectionMode={ConnectionMode.Loose}
          nodeTypes={nodeType}
          edgeTypes={edgeType}
          panOnDrag={shouldPanOnDrag} 
          nodesDraggable={shouldSelectNode}
          selectNodesOnDrag={shouldSelectNode}
          nodeOrigin={[0.5, 0.5]}
          deleteKeyCode={['Backspace', 'Delete']}
        >
          <ReactFlowBackground/>
          <Controls/>
        </ReactFlow>

        <Toolbar 
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          setNodes={setNodes}
          setShouldSelectNode={setShouldSelectNode}
          setShouldPanOnDrag={setShouldPanOnDrag}
        />
      </div>
    </RoomProvider>
  )
}

export default Background;