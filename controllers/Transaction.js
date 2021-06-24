// Import Product Model
import Transaction from "../models/Transaction.js";

// Create a new product
export const createTransaction = async (req, res) => {
    try {
        await Transaction.create(req.body);
        res.json({
            "message": "Transaction Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Get all products
export const getTransactions = async (req, res) => {
    try {
        const product = await Transaction.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}