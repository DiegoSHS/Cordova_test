import { newId } from "./utils.js"
const getBlogs = () => {
    const blogs = localStorage.getItem('blogs')
    return blogs ? JSON.parse(blogs) : []
},
    setBlogs = (blogs) => {
        localStorage.setItem('blogs', JSON.stringify(blogs))
    },
    newBlog = ({ content, image, owner }) => {
        const id = newId(),
            currBlog = { id, owner, content, image },
            blogs = getBlogs()
        blogs.push(currBlog)
        setBlogs(blogs)
    },
    deleteBlog = (id) => {
        const blogs = getBlogs(),
            newBlogs = blogs.filter(b => b.id !== id)
        setBlogs(newBlogs)
    }