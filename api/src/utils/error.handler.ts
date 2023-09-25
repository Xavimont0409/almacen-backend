import { Response } from "express";

export const handlerHttp = (res: Response, error: string) =>{
	res.status(400).json(error);
} 

