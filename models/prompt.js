import {Schema, model, models} from 'mongoose';

const PromptSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag:{
        type: String,
        required:[true, 'Tag is required'],
    }

});


// If Prompts exists or if doesn't exist then create a new model 
// based on PromptSchema
const Prompt = models.Prompt || model('Prompt',PromptSchema);

export default Prompt