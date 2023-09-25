import { Router } from "express";
import {
  inventoryHandlerGet,
  inventoryHandlerPost,
  inventoryHandlerPut,
  inventoryHandlerDelete,
  inventoryIdHandlerGet,
} from "../handlers/inventory.handler";
import { validateInventory, validatePutInventoryItem } from "../utils/user.validator";

const inventoryRouter = Router();

inventoryRouter.get("/", inventoryHandlerGet);
inventoryRouter.get("/:id", inventoryIdHandlerGet)
inventoryRouter.post("/",validateInventory, inventoryHandlerPost);
inventoryRouter.put("/:id",validatePutInventoryItem, inventoryHandlerPut);
inventoryRouter.delete("/:id", inventoryHandlerDelete);

export default inventoryRouter;
