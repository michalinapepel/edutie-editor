import { useState } from "react";
import { Block } from "./types";

export default function useBlockManager() {
  const [blockList, setBlockList] = useState<Array<Block<any>>>([]);

  // param is currentBlockId, filtering doesn't actually delete, but it works in this case
  function deleteBlock(id: string) {
    setBlockList((oldArray) => oldArray.filter((block) => block.id !== id));
  }

  function addBlock(newBlock: Block<any>) {
    setBlockList((oldArray) => [...oldArray, newBlock]);
  }

  function updateBlock() {}

  function deleteEmptyBlocks() {
    setBlockList((oldArray) =>
      oldArray.filter(
        (block) =>
          block.data.trim() == undefined || block.data == null || block.data == "" || block.data == "Wpisz tutaj..."
      )
    );
  }

  function generateID() {
    return Date.now().toString();
  }

  return { blockList, addBlock, deleteBlock, updateBlock, deleteEmptyBlocks, generateID };
}
