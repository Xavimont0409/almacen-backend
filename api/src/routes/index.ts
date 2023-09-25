import { Router } from "express";
import categoryRouter from "./category.router";
import inventoryRouter from "./inventory.router";
import productRouter from "./product.router";
import supplierRouter from "./supplier.router";
import transactionRouter from "./transaction.router";
import userRouter from "./user.router";

const router = Router()

router.use("/category", categoryRouter)
router.use("/inventory", inventoryRouter)
router.use("/product", productRouter)
router.use("/supplier", supplierRouter)
router.use("/transaction", transactionRouter)
router.use("/user", userRouter)

export default router;
