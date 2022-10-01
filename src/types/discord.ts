import {
  Awaitable,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export interface commandsEntity<T = ChatInputCommandInteraction> {
  data: () => SlashCommandBuilder;
  execute: (message: ChatInputCommandInteraction) => Awaitable<T>;
}
