import { newId } from "./utils.js";
export const getBlogs = () => {
    const blogs = localStorage.getItem('blogs')
    return blogs ? JSON.parse(blogs) : []
}
export const setBlogs = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
}
export const newBlog = ({content,image}) => {
    const id = newId()
    const currblog = {id,content,image}
    const blogs = getBlogs()
    blogs.push(currblog)
    setBlogs(blogs)
}