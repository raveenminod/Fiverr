import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({

    conversationId:{
        type:String,
        required: true,
    },
    userId:{
        type:String,
        required: true,
    },
    message:{
        type:String,
        required: true,
    },

}, { timeStamps: true });

export default mongoose.model("Message", messageSchema);