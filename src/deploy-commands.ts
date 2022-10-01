import { Routes, RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
import { REST } from "@discordjs/rest";
import { getCommands } from "./get-commands";

export const ConfigCommands = async () => {
  //Iteramos todos los comandos y se los inyectamos al cliente
  const commands: RESTPostAPIApplicationCommandsJSONBody[] = (
    await getCommands()
  ).map((x) => x.data().toJSON());

  const rest: REST = new REST({ version: "10" }).setToken(process.env.TOKEN);

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.APPLICATION_ID,
      process.env.GUILD_ID
    ),
    { body: commands }
  );
};
