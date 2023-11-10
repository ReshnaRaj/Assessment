const mongoose=require('mongoose')
const dbConnection=async()=>{
    mongoose.set('strictQuery',false)
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/Miniapplication', { 
          })
          .then(() => {
            console.log("Database connected successfully");
          })
          .catch((err) => {
            console.log("Database error", err.message);
          });
      } catch (error) {
        console.log("Database error", error);
      }
    }

module.exports = dbConnection;