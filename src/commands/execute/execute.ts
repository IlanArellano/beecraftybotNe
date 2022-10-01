import {
  ChatInputCommandInteraction,
  GuildMemberRoleManager,
} from "discord.js";
import { MinecraftExecuteService } from "../../service";
import type { BaseError } from "../../types";
import replies from "../../config/replies";

const ADMIN_ROLES = ["STAFF", "ADMIN", "ROL_TEST"];

const execute = async (interaction: ChatInputCommandInteraction) => {
  const roles = (interaction.member.roles as GuildMemberRoleManager).cache;
  const command = String(interaction.options.get("command").value);
  const minecraft_user_name: string | undefined = interaction.options.get(
    "username"
  )?.value as unknown as string;

  if (
    !roles.find((x) => !!ADMIN_ROLES.find((y) => y === x.name.toUpperCase()))
  ) {
    await interaction.reply(replies.NOT_PERMISSION_COMMAND);
    return;
  }

  const res = await MinecraftExecuteService({
    command,
    minecraft_user_name,
    is_admin: true,
  });

  if (res.error) {
    const messageError: string | undefined = res.error.axiosError
      ? (res.error.axiosError.response?.data as BaseError)?.message
      : res.error.message;
    //await interaction.user.send({ content: res.error.message });
    await interaction.reply({
      content: messageError ?? replies.COMMON_ERROR,
      ephemeral: true,
    });
    return;
  }

  if (res.response?.message) await interaction.reply(res.response.message);
  else await interaction.reply("comando ejecutado satisfactoriamente");
};

export default execute;
