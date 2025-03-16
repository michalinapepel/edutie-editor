import React, { ReactNode, useEffect, useState } from "react";
import useBlockManager from "./useBlockManager";
import { Block } from "./types";

//EDITOR ma byc komponentem, ktory wyswietla bloki z blockmanagera + panel przycisków + wygląd
//typy: p, naglowki, matma
//BlockManager

export default function Editor() {
  const { blockList, addBlock, deleteBlock, updateBlock, deleteEmptyBlocks, generateID, currentBlock } =
    useBlockManager();

  return (
    <div>
      <button onClick={() => addBlock()}>Dodaj sekcję</button>
      <p>Current Block ID: {currentBlock}</p>
      <button onClick={() => deleteBlock(currentBlock)}>Usuń sekcję</button>

      {blockList.map((o) => (
        <div key={o.id}>o.renderBlock()</div>
      ))}
    </div>
  );
}
