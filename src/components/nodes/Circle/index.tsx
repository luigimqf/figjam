import React from 'react'
import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, Position } from "reactflow";
import 'pages/Background/styles.css';
import '@reactflow/node-resizer/dist/style.css';

function Circle({data,selected}:any) {
  const [isSelected, setIsSelected] = React.useState<boolean>(true);
  return (
    <>
      <div 
        className="min-w-[200px] min-h-[200px] w-full h-full bg-emerald-500 rounded-full group" 
        onClick={() => {
          data.onClick();
          setIsSelected(!isSelected);
        }}
        onMouseEnter={data.onMouseEnter}
      />
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        handleStyle={{width: '15px', height: '15px'}}
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