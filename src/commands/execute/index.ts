import type { commandsEntity } from "../../types";
import data from "./data";
import execute from "./execute";

const executeCommand: commandsEntity<void> = {
  data,
  execute,
};

export default executeCommand;
