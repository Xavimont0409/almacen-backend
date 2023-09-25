import { Router } from "express";
import {
  productHandlerGet,
  productHandlerPost,
  productHandlerPut,
  productHandlerDelete,
  productIdHandlerGet
} from "../handlers/product.handler";
import { checkJwt } from "../middelware/session";
import { validateProduct } from "../utils/user.validator";
/* a esta ruta solo pueden acceder usuarios con token valido  */
const productRouter = Router();

productRouter.get("/", checkJwt, productHandlerGet);
productRouter.get("/:id", productIdHandlerGet)
productRouter.post("/",validateProduct, productHandlerPost);
productRouter.put("/:id",validateProduct, productHandlerPut);
productRouter.delete("/:id", productHandlerDelete);

export default productRouter;
