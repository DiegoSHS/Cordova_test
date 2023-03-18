import { transaction } from "./indexdb"

export const getBlogs = () => {
    const blogs = transaction('blogs', 'readwrite')
    const allblogs = blogs.getAll()
    allblogs.onsuccess = (e) => {
        const bblogs = allblogs.result
        return bblogs
    }
}
export const createBlog = (blog) => {
    const blogs = transaction('blogs', 'readwrite')
    blogs.put(blog)
}
export const deleteBlog = (id) => {
    const blogs = transaction('blogs', 'readwrite')
    blogs.delete(id)
}
export const blogsbyowner = (owner) => {
    const blogs = transaction('blogs', 'readwrite')
    const ownerIndex = blogs.index('owner')
    const req = ownerIndex.get(owner)
    req.onsuccess = (e) => {
        const currentBlogs = req.result
        return currentBlogs
    }
}