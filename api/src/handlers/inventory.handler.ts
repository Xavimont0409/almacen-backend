import { inventoryGet, inventoryPost, inventoryPut, inventoryDelete, inventoryIdGet } from "../controllers/inventory.controllers";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

export const inventoryHandlerGet = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await inventoryGet());
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_INVENTORY');
  }
};

export const inventoryIdHandlerGet =async (req: Request, res: Response) => {
  try {
    res.status(200).json(await inventoryIdGet(req.params))
  } catch (error) {
    handlerHttp(res, 'ERROR_ID_GET_INVENTORY')
  }
}

export const inventoryHandlerPost = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await inventoryPost(req.body));
  } catch (error) {
    handlerHttp(res, 'ERROR_POST_INVENTORY');
  }
};

export const inventoryHandlerPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { purchase_price, selling_price, quantity, expiry_date } = req.body
    res.status(200).json(await inventoryPut(id, purchase_price, selling_price, quantity, expiry_date));
  } catch (error) {
    handlerHttp(res, 'ERROR_PUT_INVENTORY');
  }
};

export const inventoryHandlerDelete = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await inventoryDelete(req.params));
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_INVENTORY');
  }
};
