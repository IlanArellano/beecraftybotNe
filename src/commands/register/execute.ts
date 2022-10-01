import { ChatInputCommandInteraction } from "discord.js";
import { MinecraftRegisterService } from "../../service";
import { getRegisterEmbed } from "../../discord";
import replies from "../../config/replies";
import type { BaseError, Mode } from "../../types";

const execute = async (interaction: ChatInputCommandInteraction) => {
  const username = interaction.options.get("username").value as string;
  const mode = interaction.options.get("mode").value as Mode;
  const discord_id = interaction.user.id;
  //Aqui va a registrar el usuario al servidor
  const res = await MinecraftRegisterService({ username, discord_id, mode });
  if (res.error) {
    const messageError: string | undefined = res.error.axiosError
      ? (res.error.axiosError.response?.data as BaseError)?.message
      : res.error.message;
    await interaction.reply({
      content: messageError ?? replies.COMMON_ERROR,
      ephemeral: true,
    });
    return;
  }

  await interaction.reply("Usuario agregado satisfactoriamente");
  await interaction.user.send({
    embeds: [getRegisterEmbed(username, interaction.user.username)],
  });
};

export default execute;
