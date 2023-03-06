import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, Position } from "reactflow";
import './styles.css';
import '@reactflow/node-resizer/dist/style.css';

function Circle({data}:any) {
  return (
    <>
      <div className="min-w-[200px] min-h-[200px] w-full h-full bg-emerald-400 rounded-full group"/>
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

export default Circle;