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
import DefaultEdge from 'components/edges/DefaultEdge';
import * as Toolbar from '@radix-ui/react-toolbar';

const INITIAL_NODES = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    type:'square',
    data: '',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    type:'square',
    data: '',
  },
];

function Playground(){
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeType = React.useMemo(() => ({square: Square}),[]);
  const edgeType = React.useMemo(() => ({default: DefaultEdge}),[]);

  const onConnect = React.useCallback((connection: Connection) => {
    setEdges((prevEdges) => addEdge(connection, prevEdges));
  },[setEdges]);

  function addNewNode(){
    setNodes((prevNodes) => [
      ...prevNodes, 
      {
        id: crypto.randomUUID(),
        position: { x: 0, y: 0 },
        type:'square',
        data: '',
      }
    ])
  }

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
          panOnDrag={false}
        >
          <Background/>
          <Controls/>
        </ReactFlow>

        <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 w-3/12 h-[70px] bg-slate-50 border-2 rounded-xl shadow-xl flex justify-between px-8 py-4 overflow-hidden'>
          <Toolbar.Button
            onClick={addNewNode}
            className='w-[90px] h-[90px] bg-emerald-400 rounded hover:-translate-y-2 transition-transform'

          />
        </Toolbar.Root>
      </div>
    </RoomProvider>
  )
}

export default Playground;