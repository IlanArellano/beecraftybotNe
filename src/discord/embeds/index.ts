import { EmbedBuilder } from "discord.js";

export const getRegisterEmbed = (
  username: string,
  discord_username: string
): EmbedBuilder => {
  const Embed = new EmbedBuilder()
    .setColor("Random")
    .setTitle(`Bienvenido al Servidor **${discord_username}**`)
    .setAuthor({
      name: "Beecrafty",
      iconURL: process.env.HELP_DEFAULT_ICON,
    })
    .setDescription(
      `Tu usuario **${username}** ha sido añadido satisfactoriamente a nuestro servidor, espero y disfrutes de nuestra estadia en estas comunidad`
    )
    .setThumbnail(process.env.HELP_DEFAULT_ICON)
    .addFields(
      { name: "IP:", value: process.env.MINECRAFT_IP },
      { name: "\u200B", value: "\u200B" },
      { name: "PUERTO JAVA:", value: process.env.MINECRAFT_JAVA_PORT },
      { name: "PUERTO BEDROCK:", value: process.env.MINECRAFT_BEDROCK_PORT }
    )
    .setTimestamp();

  return Embed;
};
