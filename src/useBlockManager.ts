import { useState } from "react";
import { Block } from "./block-service";

const useBlockManager = () => {
  const [blockList, setBlockList] = useState<Array<Block<any>>>([]);
};
export default useBlockManager;
