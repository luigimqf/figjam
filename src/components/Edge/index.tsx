import { EdgeProps, getSmoothStepPath } from 'reactflow';

function Edge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}:EdgeProps) {

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
      <path
        id={id}
        style={style}
        className="react-flow__edge-path stroke-1 stroke-zinc-500"
        d={edgePath}
        markerEnd={markerEnd}
      />
  );
}

export default Edge;