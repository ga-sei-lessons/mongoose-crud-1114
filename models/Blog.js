// require mongoose
const mongoose = require('mongoose')

// define the 'child' subdocument schema
const CommentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

// define the 'parent' schema
const BlogSchema = new mongoose.Schema({
    header: {
        type: String
    },
    body: {
        type: String
    },
    // embed the child schema in the parent schema
    comments: [CommentSchema],
    // eventually we will add a field of the user id who made this blog
}, {
    timestamps: true
})

// we only need to build an export a model for the parent
module.exports = mongoose.model('Blog', BlogSchema)
