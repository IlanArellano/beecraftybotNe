import { AxiosError } from "axios";

export interface ErrorResponse extends BaseError {
  error: any;
  error_type: ERROR_TYPES;
  axiosError?: AxiosError;
}

export interface BaseError {
  message: string | null;
  blocked?: boolean;
  fatal: boolean;
}

interface Server_Res<T = any> {
  success: boolean;
  response: T;
  error: ErrorResponse;
}

export interface Server_Success_Message {
  success: boolean;
  message: string;
}

export interface Command_Success extends Server_Success_Message {
  command: string;
}

//Body
export interface Execute_Body {
  command: string;
  minecraft_user_name: string;
  is_admin: boolean;
}

export type Mode = "JAVA" | "BEDROCK";

export interface Register_Body {
  username: string;
  discord_id: string;
  mode: Mode;
}

enum ERROR_TYPES {
  USER = 1,
  SERVER = 2,
  UNKNOWN = 3,
}

export type Server_Response<T> = Partial<Server_Res<T>>;
