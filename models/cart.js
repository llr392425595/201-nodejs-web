import { Stats } from 'fs';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
},{timestamps: true});

module.exports = mongoose.model('Cart',CartSchema)