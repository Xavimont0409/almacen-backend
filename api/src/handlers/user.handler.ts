import { userGet, registerUser, loginUser, userPut, userDelete, usetIdGet } from "../controllers/user.controllers";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

//!Ruta get All Users
export const userHandlerGet = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await userGet());
  } catch (error) {
    handlerHttp(res, "ERROR_GET_USER");
  }
};

//!Ruta id User
export const userHandlerIdGet =async (req: Request, res: Response) => {
  try {
    res.status(200).json(await usetIdGet(req.params))
  } catch (error) {
    handlerHttp(res, "ERROR_GET_ID_USER")
  }
}

//!Ruta register User
export const userHandlerRegister = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    res.status(200).json(await registerUser(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_POST_USER");
  }
};

//!Ruta Login User 
export const userHandlerLogin = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await loginUser(req.body));
  } catch (error) {
    handlerHttp(res, "ERROR_POST_USER");
  }
};

//!Ruta update User
export const userHandlerPut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { firstName, lastName, phone } = req.body
    res.status(200).json(await userPut(id, firstName, lastName, phone));
  } catch (error) {
    handlerHttp(res, "ERROR_PUT_USER");
  }
};

//!Ruta Detele User
export const userHandlerDelete = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await userDelete(req.params));
  } catch (error) {
    handlerHttp(res, "ERROR_DELETE_USER");
  }
};
