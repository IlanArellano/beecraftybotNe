import { ChatInputCommandInteraction } from "discord.js";
import { MinecraftUnlinkService } from "../../service";
import replies from "../../config/replies";
import type { BaseError } from "../../types";

const execute = async (interaction: ChatInputCommandInteraction) => {
  const discord_id = interaction.user.id;
  const reason: string | undefined = interaction.options.get("razon")
    ?.value as string;
  const res = await MinecraftUnlinkService({ discord_id, reason });
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
  await interaction.reply(res.response.message ?? replies.DEFAULT_MESSAGE);
};

export default execute;
