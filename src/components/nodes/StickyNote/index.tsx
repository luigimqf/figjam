import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, Position } from "reactflow";
import './styles.css';
import '@reactflow/node-resizer/dist/style.css';

function StickyNote({data}:any) {
  return (
    <>
      <div className="relative">
        <div className="bg-yellow-200 p-4 rounded-lg shadow-2xl absolute left-0 z-10 w-[200px] h-[200px]">
          <p className="text-gray-500 opacity-60 font-medium">Add Text</p>
        </div>
        <div className="bg-yellow-200 px-4 py-2 rounded-lg shadow-md absolute left-0 -top-2 -right-8 transform rotate-12 w-[200px] h-[200px]"/>
      </div>
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={false}
      />
      <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className="handler -my-2"
      />
      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="handler -my-2"
      />
      <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className="handler -mx-2"
      />
      <Handle 
        id="right" 
        type="source" 
        position={Position.Right}
        className="handler -mx-2"
      />
    </>
  )
}

export default StickyNote;