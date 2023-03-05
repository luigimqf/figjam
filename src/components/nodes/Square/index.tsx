import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, Position } from "reactflow";
import './styles.css';
import '@reactflow/node-resizer/dist/style.css';

function Square() {
  return (
    <>
      <div className="min-w-[200px] min-h-[200px] w-full h-full bg-emerald-400 rounded-xl group"/>
      <NodeResizer
        minHeight={200}
        minWidth={200}
      />
      <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className="handler"
      />
      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="handler"
      />
      <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className="handler"
      />
      <Handle 
        id="right" 
        type="source" 
        position={Position.Right}
        className="handler"
      />
    </>
  )
}

export default Square;