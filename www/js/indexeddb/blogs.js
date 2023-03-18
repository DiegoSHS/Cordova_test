export const getBlogs = () => {
    const req = initdb()
    req.onsuccess = (e) => {
        const database = req.result
        const transaction = database.transaction('blogs', 'readwrite')
        const blogs = transaction.objectStore('blogs')
        const allblogss = blogs.getAll()
        allblogss.onsuccess = (e) => {
            const bblogs = allblogss.result
        }
    }
}
export const createBlog = (blog) => {
    const req = initdb()
    req.onsuccess = (e) => {
        const database = req.result
        const transaction = database.transaction('blogs', 'readwrite')
        const blogs = transaction.objectStore('blogs')
        blogs.add(blog)
    }
}

export const deleteBlog = (id) => {
    const req = initdb()
    req.onsuccess = (e) => {
        const database = req.result
        const transaction = database.transaction('blogs', 'readwrite')
        const blogs = transaction.objectStore('blogs')
        blogs.delete(id)
    }
}

export const blogsbyowner = (owner) => {
    const req = initdb()
    req.onsuccess = (e) => {
        const database = req.result
        const transaction = database.transaction('blogs', 'readwrite')
        const blogs = transaction.objectStore('blogs')
        const ownerIndex = blogs.index('owner')
        const blogss = ownerIndex.getAll(owner)
        blogss.onsuccess = (e) => {
            const currentBlogs = blogss.result
            console.log(currentBlogs)
        }
    }
}