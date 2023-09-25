import {
  supplierGet,
  supplierPost,
  supplierPut,
  supplierDelete,
} from "../controllers/supplier.controllers";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
export const supplierHandlerGet = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await supplierGet());
  } catch (error) {
    handlerHttp(res, "ERROR_GET_SUPPLIER");
  }
};

export const supplierIdHandlerGet =async (req: Request, res:Response) => {
  try {

  } catch (error) {
    handlerHttp(res, "ERROR_ID_SUPPLIER")
  }
}

export const supplierHandlerPost = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await supplierPost(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_POST_SUPPLIER");
  }
};

export const supplierHandlerPut = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await supplierPut(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_PUT_SUPPLIER");
  }
};

export const supplierHandlerDelete = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await supplierDelete(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_DELETE_SUPPLIER");
  }
};
