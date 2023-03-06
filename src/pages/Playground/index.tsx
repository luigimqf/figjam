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
  useNodesState
} from "reactflow";
import Square from 'components/nodes/Square';
import DefaultEdge from 'components/edges/Default';
import Toolbar from 'components/Toolbar';
import Circle from 'components/nodes/Circle';

function Playground(){
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [shouldPanOnDrag, setShouldPanOnDrag] = React.useState<boolean>(false);
  const [hasNodeInteraction, setHasNodeInteraction] = React.useState<boolean>(true);

  const nodeType = React.useMemo(() => ({square: Square, circle: Circle}),[]);
  const edgeType = React.useMemo(() => ({default: DefaultEdge}),[]);

  const onConnect = React.useCallback((connection: Connection) => {
    setEdges((prevEdges) => addEdge(connection, prevEdges));
  },[setEdges]);

  return (
    <RoomProvider id='my-room' initialPresence={{}}>
      <div className='w-screen h-screen'>
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={hasNodeInteraction ? onNodesChange : undefined}
          onEdgesChange={hasNodeInteraction ? onEdgesChange : undefined}
          onConnect={onConnect}
          connectionMode={ConnectionMode.Loose}
          nodeTypes={nodeType}
          edgeTypes={edgeType}
          panOnDrag={shouldPanOnDrag}
        >
          <Background/>
          <Controls/>
        </ReactFlow>

        <Toolbar 
          nodes={nodes}
          setNodes={setNodes}
          setHasNodeInteraction={setHasNodeInteraction}
          setShouldPanOnDrag={setShouldPanOnDrag}
        />
      </div>
    </RoomProvider>
  )
}

export default Playground;