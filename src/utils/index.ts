import { ColorResolvable } from "discord.js";

const colors: ColorResolvable[] = [
  "Default",
  "White",
  "Aqua",
  "Green",
  "Blue",
  "Yellow",
  "Purple",
  "LuminousVividPink",
  "Fuchsia",
  "Gold",
  "Orange",
  "Red",
  "Grey",
  "DarkerGrey",
  "Navy",
  "DarkAqua",
  "DarkGreen",
  "DarkBlue",
  "DarkPurple",
  "DarkVividPink",
  "DarkGold",
  "DarkOrange",
  "DarkRed",
  "DarkGrey",
  "LightGrey",
  "DarkNavy",
  "Blurple",
  "Greyple",
  "DarkButNotBlack",
  "NotQuiteBlack",
];

export const getRandColor = () =>
  colors[Math.floor(Math.random() * colors.length)];
