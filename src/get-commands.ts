import { join } from "path";
import { readdirSync } from "fs";
import { commandsEntity } from "./types";

/**Crea un array con los objetos creados para declarar los comandos en la carpeta @see commands */
export const getCommands = async (): Promise<commandsEntity[]> => {
  const commands: commandsEntity[] = [];
  const commandsPath = join(__dirname, "commands");

  const commandsFiles = readdirSync(commandsPath).filter(
    (x) => !x.endsWith(".js")
  );

  //Iteramos todos los comandos y se los inyectamos al cliente
  for (const folder of commandsFiles) {
    const fileDir = join(commandsPath, folder);
    const command: commandsEntity = (await import(`${fileDir}`)).default;
    commands.push(command);
  }

  return commands;
};
