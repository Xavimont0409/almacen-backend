import { Response, NextFunction } from "express";
import { veryfyToken } from "../utils/jwt.handler";
import { RequestExt } from '../../types'

export const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = veryfyToken(`${jwt}`);
    if (!isUser) {
      res.status(401).send("NO_TIENES_UNA_SESION_VALIDA");
    } else {
      req.user = isUser
			next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};
