import React from 'react'
import * as Tool from '@radix-ui/react-toolbar';
import { IToolbarProps, NodesType } from './interfaces.structure';
import {AiOutlineDrag as DragIcon} from 'react-icons/ai';
import {BsCursor as CursorIcon} from 'react-icons/bs';


function Toolbar({setNodes,nodes,setHasNodeInteraction,setShouldPanOnDrag}:IToolbarProps){
  const [activeTool, setActiveTool] = React.useState<'drag' | 'cursor'>('cursor');

  const changeToolHashmap = {
    'drag': () => {
      setHasNodeInteraction(false);
      setShouldPanOnDrag(true);
    },
    'cursor': () => {
      setHasNodeInteraction(true);
      setShouldPanOnDrag(false);
    }
  }

  function addNewNode(type:NodesType = 'square'){
    setNodes((prevNodes) => [
      ...prevNodes, 
      {
        id: crypto.randomUUID(),
        position: { x: 0, y: 0 },
        type: type,
        data: '',
      }
    ])
  }

  function changeActiveTool(tool:'drag' | 'cursor'){
    setActiveTool(tool);

    return changeToolHashmap[tool]();
  }
  return (
    <Tool.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 w-3/12 h-[70px] bg-slate-50 border-2 rounded-xl shadow-xl flex justify-between items-center'>
      <div className='w-1/12 h-full rounded-tl-xl rounded-bl-xl border-r-2 border-zinc-900 flex-col justify-center items-center'>
        <Tool.Button 
          className={`w-full h-1/2 rounded-tl-xl flex justify-center items-center ${activeTool === 'drag' && 'bg-purple-700'} transition-all`}
          onClick={() => changeActiveTool('drag')}
        >
          <DragIcon className={`w-4 h-4 ${activeTool === 'drag' && 'text-white'} transition-all`}/>
        </Tool.Button>
        <Tool.Button 
          className={`w-full h-1/2 rounded-bl-xl flex justify-center items-center ${activeTool === 'cursor' && 'bg-purple-700'} transition-all`}
          onClick={() => changeActiveTool('cursor')}
        >
          <CursorIcon className={`w-4 h-4 ${activeTool === 'cursor' && 'text-white'} transition-all`}/>
        </Tool.Button>
      </div>

      <div className='w-4/5 h-full flex justify-evenly align-bottom overflow-hidden'>
        <Tool.Button
          onClick={() => addNewNode('square')}
          className={`w-[90px] h-[90px] border-gray-900 border-2 bg-emerald-400 rounded mt-5 hover:-translate-y-3 transition-transform`}
        />
        <Tool.Button
          onClick={() => addNewNode('circle')}
          className='w-[90px] h-[90px] border-gray-900 border-2 bg-emerald-400 rounded-full mt-4 hover:-translate-y-3 transition-transform'
        />
      </div>
  </Tool.Root>
  )
}

export default Toolbar;