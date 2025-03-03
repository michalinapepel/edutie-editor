import React, { ReactNode, useState } from "react";
import useBlockManager from "./useBlockManager";
import { Block } from "./block-service";

//EDITOR ma byc komponentem, ktory wyswietla bloki z blockmanagera + panel przycisków + wygląd
//typy: p, naglowki, matma
//BlockManager

export default function Editor() {
  const [blockList, setBlockList] = useState<Array<Block<any>>>([]);
  return (
    <div>
      <button
        onClick={() =>
          setBlockList([...blockList, { data: "block", id: "block1", renderBlock: () => <div>Block 1</div> }])
        }></button>
      <button
        onClick={() =>
          setBlockList([...blockList, { data: "block", id: "block1", renderBlock: () => <div>Block 1</div> }])
        }></button>
      <button
        onClick={() =>
          setBlockList([...blockList, { data: "block", id: "block1", renderBlock: () => <div>Block 1</div> }])
        }></button>
      {blockList.map((o) => o.renderBlock())}
    </div>
  );
}
