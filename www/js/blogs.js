import { newId } from "./utils.js"
const getBlogs = () => {
    const blogs = localStorage.getItem('blogs')
    return blogs ? JSON.parse(blogs) : []
}
const setBlogs = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
}
const newBlog = ({ content, image, owner }) => {
    const id = newId()
    const currBlog = { id, owner, content, image }
    const blogs = getBlogs()
    blogs.push(currBlog)
    setBlogs(blogs)
}
const deleteBlog = (id) => {
    const blogs = getBlogs()
    const newBlogs = blogs.filter(b => b.id !== id)
    setBlogs(newBlogs)
}