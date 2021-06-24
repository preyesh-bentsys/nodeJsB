// Import express
import express from "express";
// Import Product Controller
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/Product.js";

 import { 
    createTransaction,
    getTransactions
 } from "../controllers/Transaction.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create a new product
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);
///Route For Transactions
router.post('/transactions', createTransaction);
router.get('/transactions', getTransactions);
 
// export router
export default router;