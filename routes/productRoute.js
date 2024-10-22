import e from "express";

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controller/productController.js'

const router = e.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.put("/update/product/:id", updateProduct);
router.delete("/delete/product/:id", deleteProduct);

export default router;