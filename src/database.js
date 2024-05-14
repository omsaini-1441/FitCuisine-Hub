const mongoose=require("mongoose");

// const DB='mongodb+srv://Nakul:recipeapp@cluster0.xx7nb6c.mongodb.net/RecipeApp?retryWrites=true&w=majority';

const DB = 'mongodb+srv://Niket:Niket123@cluster0.pqrddgr.mongodb.net/RecipeApp?retryWrites=true&w=majority';

mongoose.set('strictQuery', true)
mongoose.connect(DB,{
    useNewUrlParser: true, 
}).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("error no connection")
});
