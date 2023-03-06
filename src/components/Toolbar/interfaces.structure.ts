import { Node } from "reactflow";

export interface IToolbarProps{
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  nodes: Node[];
  setShouldPanOnDrag: React.Dispatch<React.SetStateAction<boolean>>;
  setHasNodeInteraction: React.Dispatch<React.SetStateAction<boolean>>;
}

export type NodesType = 'square' | 'circle' | 'text'