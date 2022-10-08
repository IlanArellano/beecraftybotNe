import { SlashCommandBuilder } from "discord.js";

const data = () => {
  const commandBuilder = new SlashCommandBuilder()
    .setName("unlink")
    .setDescription("Elimina tu username de la whitelist del servidor");

  commandBuilder.addStringOption((option) =>
    option
      .setName("razon")
      .setDescription("Por que razon deseas desvincular tu cuenta?")
      .setRequired(false)
  );

  return commandBuilder;
};

export default data;
