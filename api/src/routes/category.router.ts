import { Router } from "express";
import {
  categoryHandlerGet,
  categoryHandlerPost,
  categoryHandlerPut,
  categoryHandlerDelete,
  categoryIdHanldlerGet,
} from "../handlers/category.handler";
import { validateCategory } from "../utils/user.validator";

const categoryRouter = Router();

categoryRouter.get("/", categoryHandlerGet);
categoryRouter.get("/:id", categoryIdHanldlerGet)
categoryRouter.post("/", validateCategory, categoryHandlerPost);
categoryRouter.put("/:id",validateCategory, categoryHandlerPut);
categoryRouter.delete("/:id", categoryHandlerDelete);

export default categoryRouter;
