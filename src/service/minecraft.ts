import { postServerRequest } from "./main";
import type {
  Server_Response,
  Server_Success_Message,
  Command_Success,
  Execute_Body,
  Register_Body,
} from "../types";

export const MinecraftRegisterService = async (
  obj: Register_Body
): Promise<Server_Response<Server_Success_Message>> =>
  postServerRequest("register", obj);

export const MinecraftExecuteService = async (
  obj: Execute_Body
): Promise<Server_Response<Command_Success>> =>
  postServerRequest("execute", obj);
