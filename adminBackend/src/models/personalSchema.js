import mongoose from 'mongoose'

const personalSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        paasswordHash:{
            type:String,
            required:true
        },
        address:String,
        mobile:String,
        spouse:{
            name:String,
            age:Number,
        },
        children:[
            {
                name:String,
                age:Number
            }
        ],
        personalIncome:{
            type:Number,
            default:0
        },
        parents:[
            {
                relation:{
                    type:String,
                    enum:['Father','Mother']
                },
                name:String,
                age:Number,
            }
        ],
        land:{
            owned:{
                type:Boolean,
                default:true
            },
            area:{
                type:Number,
                default:0
            },
            unit:{
                typ:String,
                default:'acre'
            }
        }
    },
    {   timestamps: true }
);

export default mongoose.model('Personal',personalSchema);