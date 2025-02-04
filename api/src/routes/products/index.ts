import { Router } from "express";
import {
  getProductById,
  listProducts,
  createProducts,
  deleteProducts,
  updateProducts,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema } from "../../db/productsSchema";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", validateData(createProductSchema), createProducts);
router.put("/:id", validateData(updateProductSchema),updateProducts);
router.delete("/:id", deleteProducts);

export default router;
