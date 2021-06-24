// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Transaction = db.define('transactions', {
    // Define attributes
    quantity: {
      type: DataTypes.DOUBLE
    },
    amount: {
      type: DataTypes.DOUBLE
    },
    product_name: {
        type: DataTypes.STRING
      }

  },{
    // Freeze Table Name
    freezeTableName: true
  });
   
  // Export model Product
  export default Transaction;