import { Client, Collection, GatewayIntentBits } from "discord.js";
import { commandsEntity } from "./types";
import { ConfigCommands } from "./deploy-commands";
import { getCommands } from "./get-commands";
require("dotenv").config();

interface Entity extends Client {
  commands?: Collection<any, any>;
}

//Configuramos los comandos
ConfigCommands()
  .then(() => console.log("Comandos registrados satisfactoriamente"))
  .catch((error) => console.log({ error }));

//Asignamos una nueva instancia para el cliente
const client: Entity = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

//Leeremos todos los archivos de la carpeta commands para iterar el arreglo de nuestro directorio
client.commands = new Collection();

client.on("ready", () => {
  console.log("Bot is connected");
});

//Iteramos todos los comandos y se los inyectamos al cliente
(async () => {
  const commands = await getCommands();
  commands.forEach((x) => client.commands.set(x.data().name, x));
})();

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command: commandsEntity | undefined = client.commands.get(
    interaction.commandName
  );

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error({ errorCatch: error });
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.login(process.env.TOKEN);
