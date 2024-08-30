// const makeConnection=require("../config/mysqldb");



// async function getAllFooditem(){
//     const connection = await makeConnection()
//     console.log(connection);
//     // find all records from collection
//     const result=await connection.query('SELECT * from food_items');
//     return result[0];
// }

// async function addfooditem(user){
//     const connection = await makeConnection()
//     const response=await connection.query(`insert into food_items values("${user.name}", "${user.description}",${user.category}, "${user.price}", "${user.quantity_in_stock}", "${user.image_url}" , "${user.rating}"),"${user.reviews_count}")"${user.created_at}")"${user.updated_at}")"${user.is_available}");`)
//     return response;
// }

// module.export={getAllFooditem,addfooditem};




const mysql = require("mysql2/promise");
const makeConnection = require("../config/mysqldb");

// Function to get all food items
async function getAllFooditem() {
    const connection = await makeConnection();
    console.log(connection);
    // Find all records from collection
    const [rows] = await connection.query('SELECT * FROM food_items');
    return rows;
}

// Function to add a food item
async function addfooditem(user) {
    const connection = await makeConnection();

    const query = `
        INSERT INTO food_items (
            name, description, category, price, quantity_in_stock, image_url, rating, reviews_count, created_at, updated_at, is_available
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)
    `;

    const [result] = await connection.query(query, [
        user.name,
        user.description,
        user.category,
        user.price,
        user.quantity_in_stock,
        user.image_url,
        user.rating,
        user.reviews_count || 0,
        user.is_available || 1
    ]);

    return result;
}

module.exports = { getAllFooditem, addfooditem };
