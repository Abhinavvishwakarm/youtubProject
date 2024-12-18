import mongoose, { Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
       videoFile: {
        type : String, // cloudianry url
        require: true
       }, 
       thumbnail: {
        type:String,
        require: true,
       }, 
       tittle: {
        type:String, 
        require: true,
       }, 
       description: {
        type:String, 
        require: true,
       }, 
       duration: {
        type:Number, 
        require: true,
       }, 
       views: {
        type: Number,
        default: 0,
       },
       isPublish: {
        type: Boolean,
        default: true,
       },
       owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
       }
    },
    {
        timestamps: true,
    }
)
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model('Video', videoSchema);