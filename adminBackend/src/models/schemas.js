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
        },
        ministry: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        benefits: [
            {
                type: String
            }
        ],
        eligibiltyCriteria: {
            minAge: {
                type: Number,
                default: 0
            },
            maxAge: {
                type: Number,
                default: 100
            },
            genderAllowed: [
                {
                    type: String
                }
            ],
            maxIncomeLimit: {
                type: Number
            },
            categoryAllowed: [
                {
                    type: String
                }
            ],
            occupations: [
                {
                    type: String
                }
            ],
            residenceState: [
                {
                    type: String
                }
            ]
        },
        benefit: {
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            description: {
                type: String
            }
        },
        documentsRequired: [
            {
                type: String
            }
        ],
        application: {
            mode: {
                type: String,
                enum: ['Online','Offline','Both']
            },
            officialLink: {
                type: String
            }
        },
        blockers:[
            {
                type: {
                    type: String
                },
                description: {
                    type: String
                },
                solution: {
                    type: String
                }
            }
        ],
        isPublished: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);
export defaultmongoose.model('Scheme',schemeScheme);