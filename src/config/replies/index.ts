import { join } from "path";
import { readFileSync } from "fs";

const messages: string = readFileSync(join(__dirname, "/messages.json"), {
  encoding: "utf-8",
});

const messageObj: Record<string, string> = JSON.parse(messages);

export default messageObj;
