import {
  productGet,
  productPost,
  productPut,
  productDelete,
  productIdGet
} from "../controllers/product.controllers";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import { RequestExt } from "../../types";

export const productHandlerGet = async (req: RequestExt, res: Response) => {
  try {
    res.status(200).json(await productGet());
  } catch (error) {
    handlerHttp(res, "ERROR_GET_PRODUCT");
  }
};

export const productIdHandlerGet =async (req: Request, res: Response) => {
  try {
    res.status(200).json(await productIdGet(req.params))
  } catch (error) {
    handlerHttp(res, "ERROR_ID_PRODUCT")
  }
}

export const productHandlerPost = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await productPost(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_POST_PRODUCT");
  }
};

export const productHandlerPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description, price, stock_quantity, minimum_stock, CategoryId } = req.body
    res.status(200).json(await productPut(id, name, description, price, stock_quantity, minimum_stock, CategoryId));
  } catch (error) {
    handlerHttp(res, "ERROR_PUT_PRODUCT");
  }
};

export const productHandlerDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    res.status(200).json(await productDelete(id));
  } catch (error) {
    handlerHttp(res, "ERROR_DELETE_PRODUCT");
  }
};
