const db = require('./models')

const embeddedCrud = async () => {
    try {
        // upsert a blog to add comments to
        const newBlog = await db.Blog.findOneAndUpdate(
            { header: 'I love Mongoose! 🖤' },
            { body: 'you should really try mongoose, it is the bees knees'},
            { upsert: true, new: true }
        )

        console.log('new blog:', newBlog)
        
        // CREATE a comment

        // READ a comment

        // UPDATE a comment

        // DESTROY a comment
    } catch(err) {
        console.log(err)
    }
}

embeddedCrud()