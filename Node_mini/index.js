// const express = require("express");
// const cors = require("cors");
// const { getAllFooditem ,addfooditem} = require("./api/FoodItem");
// const app =express();


// app.use(cors({
//    origin:'*'
// }));

// app.use(express.urlencoded({ extended: true }));
// const port =4000;
// app.listen(port, ()=>console.log(`application server started ${port}...`))


// require("./config/mysqldb");


// app.get("/getAll",function(request,response){
//     const data = getAllFooditem();
//     response.send(data);  
// });
    
//     app.post("/fooditem/add",function(request, response){
//     console.log(request.body);
//     const data=addfooditem(request.body);
//     response.send(data);
// });



const express = require("express");
const cors = require("cors");
const { getAllFooditem, addfooditem } = require("./api/FoodItem");

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this to parse JSON bodies

const port = 4000;

app.listen(port, () => console.log(`Application server started on port ${port}...`));

// Route to get all food items
app.get("/getAll", async (req, res) => {
    try {
        const data = await getAllFooditem();
        res.json(data);
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).send('Error fetching food items');
    }
});

// Route to add a food item
app.post("/fooditem/add", async (req, res) => {
    try {
        const data = await addfooditem(req.body);
        res.json(data);
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).send('Error adding food item');
    }
});
