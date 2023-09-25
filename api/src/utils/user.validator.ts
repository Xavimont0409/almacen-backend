import { check } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { validateResult } from "../helpers/validate.helper";

//! VALIDADOR DE USUARIOS REGISTER
export const validateCreate = [
  check("firstName").isAlphanumeric().isLength({min: 0, max: 25}),
  check("lastName").isAlphanumeric().isLength({min: 0, max: 25}),
  check("email").isEmail(),
  check("phone").isNumeric().isLength({min: 0, max: 9}),
  check("password").isAlphanumeric().isLength({min: 0, max: 25}),
	(req: Request, res: Response, next: NextFunction) =>{
		validateResult(req, res, next)
	}
];
//!VALIDADOR DE USUARIOS UPDATE
export const validateUpdate = [
  check("firstName").exists().isAlphanumeric().isLength({min: 0, max: 25}),
  check("lastName").isAlphanumeric().isLength({min: 0, max: 25}),
  check("email").isEmail(),
  check("phone").isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>{
		validateResult(req, res, next)
	}
]

//! VALIDADOR DE LOGIN
export const validateLogin = [
  check("email")
  .exists()
  .isEmpty()
  .isEmail(),
  check("password")
  .exists()
  .isEmpty()
  .isAlphanumeric(),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
]

//! VALIDADOR DE CATEGORY
export const validateCategory = [
  check("name")
  .exists()
  .isAlpha()
  .isLength({min: 0, max: 25}),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
]
//!VALIDADOR DE INVENTORY
export const validateInventory = [
  check("purchase_price")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("selling_price")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("quantity")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("expiry_date")
  .exists(),
  check("ProductId")
  .exists()
  .isString(),
  check("SupplierId")
  .exists()
  .isString(),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
]

export const validatePutInventoryItem = [
  check("purchase_price")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("selling_price")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("quantity")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("expiry_date")
  .exists(),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
]

export const validateProduct = [
  check("name")
  .exists()
  .isAlphanumeric()
  .isLength({min: 0, max: 25}),
  check("description")
  .exists()
  .isAlphanumeric()
  .isLength({min: 0, max: 350}),
  check("price")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("stock_quantity")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  check("minimum_stock")
  .exists()
  .isNumeric()
  .isLength({min: 0, max: 10}),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
]

export const validateSupplier = [

]

export const validateTransaction = [

]