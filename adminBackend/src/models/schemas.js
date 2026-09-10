import mongoose from 'mongoose'
const schemaSchema = new mongoose.Schema(
    {   
        title:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
        category:{
            type:String,
            required:true
        }
    }
)