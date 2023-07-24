import { generateNav } from "./components/navbar.js"
import { deleteBlog, getBlogs } from "./indexeddb/indexdb.js"
import { deleteSession, getSession } from "./session.js"
import { getUser, getUsers } from "./users.js"
import { generateBlog } from "./components/blog.js";
import { viewProfile } from './components/profile.js'

const quitBlog = async (id) => {
    await deleteBlog(id)
    await personalBlogs()
},
    validateBlogs = (blogs) => blogs.length !== 0 && blogs instanceof Array && blogs !== undefined,
    personalBlogs = async () => {
        const blogs = await getBlogs(),
            session = getSession(),
            currentUser = getUser(session),
            userBlogs = blogs.filter(b => b.owner === session),
            validate = validateBlogs(userBlogs),
            blogshtml = validate ?
                (
                    userBlogs.map(({ content, image, id }) => {
                        return generateBlog({
                            content: content,
                            image: image,
                            owner: currentUser?.user,
                            id: id
                        }, true)
                    }).reverse().join('')
                ) :
                (
                    '<div class="no-blogs">No tienes blogs</div>'
                ),
            render = viewProfile(currentUser) + blogshtml
        document.getElementById("blogs").innerHTML = render
        document.querySelectorAll(".deleteblog").forEach((e) => {
            e.addEventListener("click", async (e) => {
                e.preventDefault()
                await quitBlog(e.target.id)
            }, false)
        })
    },
    allBlogs = async () => {
        const blogs = await getBlogs(),
            users = getUsers(),
            validate = validateBlogs(blogs),
            blogshtml = validate ?
                (
                    blogs.map(({ content, image, owner, }) => {
                        const userOwner = users.find(u => u.id === owner)
                        return generateBlog({
                            content: content,
                            image: image,
                            owner: userOwner?.user
                        })
                    }).reverse().join('')
                ) :
                (
                    '<div class="no-blogs">No hay blogs</div>'
                )
        document.getElementById("blogs").innerHTML = blogshtml
    },
    textBlogs = async () => {
        const blogs = await getBlogs(),
            users = getUsers(),
            textBlogs = blogs.filter(b => b.image === false),
            validate = validateBlogs(textBlogs),
            blogshtml = validate ?
                (
                    textBlogs.map(({ content, image, owner, }) => {
                        const userOwner = users.find(u => u.id === owner)
                        return generateBlog({
                            content: content,
                            image: image,
                            owner: userOwner?.user
                        })
                    }).reverse().join('')
                ) :
                (
                    '<div class="no-blogs">No hay blogs de este tipo</div>'
                )
        document.getElementById("blogs").innerHTML = blogshtml
    },
    imageBlogs = async () => {
        const blogs = await getBlogs(),
            users = getUsers(),
            imageBlogs = blogs.filter(b => b.image !== false),
            validate = validateBlogs(imageBlogs),
            blogshtml = validate ?
                (
                    imageBlogs.map(({ content, image, owner, }) => {
                        const userOwner = users.find(u => u.id === owner)
                        return generateBlog({
                            content: content,
                            image: image,
                            owner: userOwner?.user
                        })
                    }).reverse().join('')
                ) :
                (
                    '<div class="no-blogs">No hay blogs de este tipo</div>'
                )
        document.getElementById("blogs").innerHTML = blogshtml
    },
    addListeners = () => {
        document.getElementById("personal").addEventListener("click", personalBlogs, false)
        document.getElementById("all").addEventListener("click", allBlogs, false)
        document.getElementById("text").addEventListener("click", textBlogs, false)
        document.getElementById("image").addEventListener("click", imageBlogs, false)
        document.getElementById("newblog").addEventListener("click", () => {
            location.href = "new.html"
        }, false)
        document.getElementById("logout").addEventListener("click", () => {
            deleteSession()
            location.href = "../index.html"
        }, false)
    }

document.addEventListener("DOMContentLoaded", () => {
    allBlogs()
    document.getElementById('navbar').innerHTML = generateNav()
    addListeners()
}, false)
