import React from 'react';
import { RoomProvider } from "liveblocks.config";
import { 
  addEdge,
  Background, 
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

function Playground(){
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [shouldPanOnDrag, setShouldPanOnDrag] = React.useState<boolean>(false);
  const [hasNodeInteraction, setHasNodeInteraction] = React.useState<boolean>(true);
  const [selectedNode, setSelectedNode] = React.useState<string>('');

  const nodeType = React.useMemo(() => ({square: Square, circle: Circle}),[]);
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
          nodesDraggable={hasNodeInteraction}
          selectNodesOnDrag={hasNodeInteraction}
          nodeOrigin={[0.5, 0.5]}
          deleteKeyCode={['Backspace', 'Delete']}
        >
          <Background/>
          <Controls/>
        </ReactFlow>

        <Toolbar 
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          setNodes={setNodes}
          setHasNodeInteraction={setHasNodeInteraction}
          setShouldPanOnDrag={setShouldPanOnDrag}
          hasNodeInteraction={hasNodeInteraction}
        />
      </div>
    </RoomProvider>
  )
}

export default Playground;