import React from 'react'
import * as Tool from '@radix-ui/react-toolbar';
import { IToolbarProps, NodesType } from './interfaces.structure';
import {AiOutlineDrag as DragIcon} from 'react-icons/ai';
import {BsCursor as CursorIcon} from 'react-icons/bs';
import {FiTrash2 as TrashIcon} from 'react-icons/fi';
import './styles.css'	


function Toolbar({
  setNodes,
  selectedNode,
  setSelectedNode,
  setHasNodeInteraction,
  setShouldPanOnDrag,
  hasNodeInteraction
}:IToolbarProps)
{
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
    const id = crypto.randomUUID();
    setNodes((prevNodes) => {
      return [
        ...prevNodes, 
        {
          id: id,
          position: { x: 0, y: 0 },
          type: type,
          data: {
            label: '',
          },
          selected: true,
        }
      ]
    })
    setSelectedNode(id);
    return;
  }

  function deleteNode(){
    return selectedNode ? setNodes((prevNodes) => prevNodes.filter((node) => !selectedNode.includes(node.id))) : null;
  }

  function changeActiveTool(tool:'drag' | 'cursor'){
    setActiveTool(tool);

    return changeToolHashmap[tool]();
  }
  return (
    <Tool.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 w-3/12 h-[70px] bg-slate-50 border-2 rounded-xl shadow-xl flex justify-between items-center'>
      <div className='w-1/12 h-full rounded-tl-xl rounded-bl-xl border-r-2 border-zinc-900 flex-col justify-center items-center'>
        <Tool.Button 
          className={`w-full h-1/2 rounded-tl-xl flex justify-center items-center ${activeTool === 'cursor' && 'bg-purple-700'} transition-all`}
          onClick={() => changeActiveTool('cursor')}
        >
          <CursorIcon className={`w-4 h-4 ${activeTool === 'cursor' && 'text-white'} transition-all`}/>
        </Tool.Button>
        <Tool.Button 
          className={`w-full h-1/2 rounded-bl-xl flex justify-center items-center ${activeTool === 'drag' && 'bg-purple-700'} transition-all`}
          onClick={() => changeActiveTool('drag')}
        >
          <DragIcon className={`w-4 h-4 ${activeTool === 'drag' && 'text-white'} transition-all`}/>
        </Tool.Button>
      </div>

      <div className='w-4/5 h-full flex justify-evenly align-bottom overflow-hidden'>
        <Tool.Button
          onClick={() => addNewNode('square')}
          className={`shadow w-[90px] h-[90px] drop-shadow-lg bg-emerald-500 rounded mt-5 hover:-translate-y-3 transition-transform`}
        />
        <Tool.Button
          onClick={() => addNewNode('circle')}
          className='shadow w-[90px] h-[90px] bg-emerald-500 rounded-full mt-4 hover:-translate-y-3 transition-transform'
        />
        <Tool.Button
          onClick={() => addNewNode('sticky')}
          className='relative w-[90px] h-[90px] mt-7  hover:-translate-y-3 transition-transform'
        >
          <div className="shadow bg-yellow-200 p-4 rounded absolute left-0 -top-2 -right-8 z-10 transform -rotate-3 w-full h-full">
            <p className="text-gray-500 font-regular text-xs transform -rotate-3">Add Text</p>
          </div>
          <div className="shadow bg-yellow-200 px-4 py-2 rounded-lg absolute left-0 -top-2 -right-8 transform rotate-12 w-full h-full"/>
        </Tool.Button>
      </div>

      <Tool.Button 
        className={`w-1/12 h-full border-l-2 border-zinc-900 rounded-tr-xl rounded-br-xl flex justify-center items-center hover:bg-purple-700 transition-all group`}
        onClick={deleteNode}
      >
        <TrashIcon className={`w-5 h-5 transition-all group-hover:text-white`}/>
      </Tool.Button>
  </Tool.Root>
  )
}

export default Toolbar;