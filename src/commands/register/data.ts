import { SlashCommandBuilder } from "discord.js";

const data = () => {
  const commandBuilder = new SlashCommandBuilder()
    .setName("register")
    .setDescription("Permite registrarte en la whitelist del servidor");

  commandBuilder.addStringOption((option) =>
    option
      .setName("username")
      .setDescription("Nombre de usuario de minecraft")
      .setRequired(true)
  );

  commandBuilder.addStringOption((option) =>
    option
      .setName("mode")
      .setDescription("A que plataforma perteneces")
      .setRequired(true)
      .addChoices(
        { name: "JAVA", value: "JAVA" },
        { name: "BEDROCK", value: "BEDROCK" }
      )
  );
  return commandBuilder;
};

export default data;
