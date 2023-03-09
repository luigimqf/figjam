import { Node } from "reactflow";

export interface IToolbarProps{
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  selectedNode: string;
  setSelectedNode: React.Dispatch<React.SetStateAction<string>>;
  setShouldPanOnDrag: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldSelectNode: React.Dispatch<React.SetStateAction<boolean>>;
}

export type NodesType = 'square' | 'circle' | 'sticky'