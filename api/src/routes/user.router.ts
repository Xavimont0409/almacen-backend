import { Router } from "express";
import {
  userHandlerGet,
  userHandlerRegister,
  userHandlerPut,
  userHandlerLogin,
  userHandlerDelete,
  userHandlerIdGet
} from "../handlers/user.handler";
import { validateCreate, validateLogin, validateUpdate } from "../utils/user.validator";

const userRouter = Router();

userRouter.get("/", userHandlerGet);
userRouter.get("/userId/:id", userHandlerIdGet)
userRouter.post("/register",validateCreate, userHandlerRegister);
userRouter.post("/login",validateLogin, userHandlerLogin);
userRouter.put("/:id",validateUpdate, userHandlerPut);
userRouter.delete("/:id", userHandlerDelete);

export default userRouter;
