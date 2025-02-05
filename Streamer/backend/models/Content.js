const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    platform: {
        typr: String,
        enum: ['Netflix', 'AmazonPrime'],
        required: true,
    },
});
const Content = mongoose.model('Content', ContentSchema);
module.exports = Content;