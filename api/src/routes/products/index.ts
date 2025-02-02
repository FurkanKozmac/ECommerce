import { Router } from "express";
import {
  getProductById,
  listProducts,
  createProducts,
  deleteProducts,
  updateProducts,
} from "./productsController";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
