import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    price: { type: Schema.Types.Number, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category' } ,
});

export default mongoose.model('Item',ItemsSchema)