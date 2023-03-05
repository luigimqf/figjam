import { Node } from "reactflow";

export interface IToolbarProps{
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  nodes: Node[];
}