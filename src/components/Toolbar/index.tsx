import * as Tool from '@radix-ui/react-toolbar';
import { IToolbarProps } from './interfaces.structure';


function Toolbar({setNodes,nodes}:IToolbarProps){

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
    <Tool.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 w-3/12 h-[70px] bg-slate-50 border-2 rounded-xl shadow-xl flex justify-between px-8 py-4 overflow-hidden'>
      <Tool.Button
        onClick={addNewNode}
        className='w-[90px] h-[90px] bg-emerald-400 rounded hover:-translate-y-2 transition-transform'

      />
  </Tool.Root>
  )
}

export default Toolbar;