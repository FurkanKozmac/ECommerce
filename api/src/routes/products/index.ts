import { Router } from "express";
import {
  getProductById,
  listProducts,
  createProducts,
  deleteProducts,
  updateProducts,
} from "./productsController.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProducts
);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProducts
);
router.delete("/:id", verifyToken, verifySeller, deleteProducts);

export default router;
