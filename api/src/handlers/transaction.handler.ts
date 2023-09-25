import {
  transactionGet,
  transactionPost,
  transactionPut,
  transactionDelete,
} from "../controllers/transaction.controllers";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

export const transactionHandlerGet = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await transactionGet());
  } catch (error) {
    handlerHttp(res, "ERROR_GET_TRANSACTION");
  }
};

export const transactionHandlerPost = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await transactionPost(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_POST_TRANSACTION");
  }
};

export const transactionHandlerPut = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await transactionPut(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_PUT_TRANSACTION");
  }
};

export const transactionHandlerDelete = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await transactionDelete(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_DELETE_TRANSACTION");
  }
};
