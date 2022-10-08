import axios, { AxiosError } from "axios";
import type { Server_Response } from "../types";

const SERVER_API = process.env.SERVER_API;
const SERVER_VERSION = process.env.SERVER_VERSION;
const SERVER_TOKEN = process.env.SERVER_TOKEN;

export const getServerRequest = async <T>(
  endpoint: string,
  query?: any
): Promise<Server_Response<T> | null> => {
  try {
    const res = await axios.get(
      `${SERVER_API}/api/${SERVER_VERSION}/${endpoint}`,
      {
        headers: {
          authorization: `Bearer ${SERVER_TOKEN}`,
        },
      }
    );
    if (!res || !res.data) return null;

    const responseObj: Server_Response<T> = {};

    responseObj.success = res.status === 200;
    if (res.data.error) responseObj.error = res.data;
    else responseObj.response = res.data;

    return responseObj;
  } catch (err) {
    return {
      success: false,
      response: "Error" as unknown as T,
      error: {
        error: true,
        fatal: true,
        message: err,
        error_type: 3,
      },
    };
  }
};

export const postServerRequest = async <IBody, IReponse>(
  endpoint: string,
  body?: IBody,
  query?: any
): Promise<Server_Response<IReponse> | null> => {
  try {
    const res = await axios.post(
      `${SERVER_API}/api/${SERVER_VERSION}/${endpoint}`,
      body,
      {
        headers: {
          authorization: `Bearer ${SERVER_TOKEN}`,
        },
      }
    );

    if (!res || !res.data) return null;

    const responseObj: Server_Response<IReponse> = {};

    responseObj.success = res.status === 200;
    if (res.data.error) responseObj.error = res.data;
    else responseObj.response = res.data;

    return responseObj;
  } catch (err) {
    return {
      success: false,
      response: "Error" as unknown as IReponse,
      error: {
        error: true,
        fatal: true,
        message: typeof err === "string" ? err : null,
        error_type: 3,
        axiosError: err instanceof AxiosError && err,
      },
    };
  }
};
