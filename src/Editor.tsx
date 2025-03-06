import React, { ReactNode, useEffect, useState } from "react";
import useBlockManager from "./useBlockManager";
import { Block } from "./types";

//EDITOR ma byc komponentem, ktory wyswietla bloki z blockmanagera + panel przycisków + wygląd
//typy: p, naglowki, matma
//BlockManager

export default function Editor() {
  const { blockList, addBlock, deleteBlock, updateBlock, deleteEmptyBlocks } = useBlockManager();
  //const [blockList, setBlockList] = useState<Array<Block<any>>>([]);
  const [currentBlock, setCurrentBlock] = useState<Block<any> | undefined>();

  return (
    <div>
      <button
        onClick={() =>
          addBlock({
            data: "block",
            id: "1",
            renderBlock: () => (
              <p contentEditable="true">
                <i>Wpisz tutaj...</i>
              </p>
            ),
          })
        }>
        Add Block
      </button>
      <button onClick={() => deleteBlock("1")}>Delete Block</button>

      {blockList.map((o) => o.renderBlock())}
    </div>
  );
}
