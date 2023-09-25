import { Router } from "express";
import {
  transactionHandlerGet,
  transactionHandlerPost,
  transactionHandlerPut,
  transactionHandlerDelete,
} from "../handlers/transaction.handler";

const transactionRouter = Router();

transactionRouter.get("/", transactionHandlerGet);
transactionRouter.post("/", transactionHandlerPost);
transactionRouter.put("/", transactionHandlerPut);
transactionRouter.delete("/", transactionHandlerDelete);

export default transactionRouter;
