import mongoose,{Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema(

    {
        videoFile:{
            type:String, //take from cloud
            required:true,


        },
        thubnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        descrption:{
            type:String,
            required:true
        },
        duration:{
            type:Number,//from cloud
            required:true
        },
        views:{
            type:Number,
            default:0,

        },
        isPublished:{
            type:Boolean,
            default:true,

        },
        owner:{
            type:Schema.Types.Schema,
            ref:"User"
        }




    },{
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("video",videoSchema);