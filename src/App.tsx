import ReactFlow, { Background, Controls } from 'reactflow';
import { RoomProvider } from './liveblocks.config';

function App() {
  return (
    <RoomProvider id='my-room' initialPresence={{}}>
      <div className='w-screen h-screen'>
        <ReactFlow>
          <Background/>
          <Controls/>
        </ReactFlow>
      </div>
    </RoomProvider>
  );
}

export default App;
