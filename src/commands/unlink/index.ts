import { commandsEntity } from "../../types";
import data from "./data";
import execute from "./execute";

const unlinkCommand: commandsEntity<void> = {
  data,
  execute,
};

export default unlinkCommand;
