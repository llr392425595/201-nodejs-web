import { Stats } from 'fs';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    title: { type: String, required: true },
    price: { type: String, required: true},
    category: { type: String, required: true},
    carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]
},{timestamps: true});

module.exports = mongoose.model('Item',ItemsSchema)