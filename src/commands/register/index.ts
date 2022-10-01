import { commandsEntity } from "../../types";
import data from "./data";
import execute from "./execute";

const registerCommand: commandsEntity<void> = {
  data,
  execute,
};

export default registerCommand;
