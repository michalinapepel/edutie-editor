import { useState } from "react";
import { Block } from "./types";

export default function useBlockManager() {
  const [blockList, setBlockList] = useState<Array<Block<any>>>([]);
  const [currentBlock, setCurrentBlock] = useState<string | null>(null);

  function deleteBlock(id: string | null) {
    setBlockList((oldArray) => oldArray.filter((block) => block.id !== id));
  }

  function addBlock() {
    const newBlock: Block<any> = {
      id: Date.now().toString(),
      data: "block",
      renderBlock: function () {
        return (
          <input onChange={(e) => updateBlock(this.id, e.target.value)} onClick={() => setCurrentBlock(this.id)} />
        );
      },
    };
    setBlockList((oldArray) => [...oldArray, newBlock]);
  }

  function updateBlock(id: string, newData: string) {
    setBlockList((oldArray) => oldArray.map((block) => (block.id === id ? { ...block, data: newData } : block)));
  }

  function deleteEmptyBlocks() {
    setBlockList((oldArray) =>
      oldArray.filter((block) => block.data.trim() == undefined || block.data == null || block.data == "")
    );
  }

  function generateID() {
    return Date.now().toString();
  }

  return { blockList, addBlock, deleteBlock, updateBlock, deleteEmptyBlocks, generateID, currentBlock };
}
