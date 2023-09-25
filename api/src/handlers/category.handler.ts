import {
  categoryGet,
  categoryPost,
  categoryPut,
  categoryDelete,
  categoryIdGet
} from "../controllers/category.controllers";
import { Request, Response } from "express";
import { handlerHttp } from '../utils/error.handler'

export const categoryHandlerGet = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await categoryGet());
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_CATEGORY');
  }
};

export const categoryIdHanldlerGet = async(req: Request, res: Response) =>{
  try {
    res.status(200).json(await categoryIdGet(req.params))
  } catch (error) {
    handlerHttp(res, 'ERROR_ID_GET_CATEGORY')
  }
}

export const categoryHandlerPost = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await categoryPost(req.body));
  } catch (error) {
    handlerHttp(res, 'ERROR_POST_CATEGORY');
  }
};

export const categoryHandlerPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name } = req.body
    res.status(200).json(await categoryPut(id, name));
  } catch (error) {
    handlerHttp(res, 'ERROR_PUT_CATEGORY');
  }
};

export const categoryHandlerDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    res.status(200).json(await categoryDelete(id));
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_CATEGORY');
  }
};
