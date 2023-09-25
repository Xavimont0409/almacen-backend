import { Router } from "express";
import {
  supplierHandlerGet,
  supplierHandlerPost,
  supplierHandlerPut,
  supplierHandlerDelete,
} from "../handlers/supplier.handler";

const supplierRouter = Router();

supplierRouter.get("/", supplierHandlerGet);
supplierRouter.post("/", supplierHandlerPost);
supplierRouter.put("/", supplierHandlerPut);
supplierRouter.delete("/", supplierHandlerDelete);

export default supplierRouter;
