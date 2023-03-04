export interface IPlaygroundProps {
  
}

export interface INode {
  id: string;
  position: {x: number, y: number};
  data: string | { [key: string]: string };
}

export interface IEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?:  Edges;
}

type Edges = 'default' | 'straight' | 'step' | 'smoothstep' | 'simplebezier'