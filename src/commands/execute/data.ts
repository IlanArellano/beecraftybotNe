import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

const data = () => {
  const commandBuilder = new SlashCommandBuilder()
    .setName("execute")
    .setDescription("Ejecuta un comando al servidor de Minecraft")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

  commandBuilder.addStringOption((option) =>
    option
      .setName("command")
      .setDescription("comando de minecraft (sin /)")
      .setRequired(true)
  );

  commandBuilder.addStringOption((option) =>
    option
      .setName("username")
      .setDescription("Si el comando va para un usuario, escribir el username")
      .setRequired(false)
  );

  return commandBuilder;
};

export default data;
