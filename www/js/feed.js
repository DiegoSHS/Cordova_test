import { deleteBlog } from "./blogs.js"
import { getBlogs } from "./indexeddb/indexdb.js"
import { deleteSession, getSession } from "./session.js"
import { getUser, getUsers } from "./users.js"

const generateBlog = ({ content, image, owner, id }, personal = false) => {
    return (
        `
            <div class=${image ? "blog" : "text-blog"}>
                <div class="profile-info">
                    <img class="profile-img" src="../img/user.png" alt="">
                    <div class="profile-name">
                        ${owner}
                    </div>
                </div>
                ${image ? `<img class="blog-image" src="${image}" alt="">` : '<div></div>'}
                <div class="icon-heart">
                    <img class="img-icon-heart" src="../img/feed/icon_heart_.png">
                    ${personal ? `<img id=${id} class="img-icon-heart deleteblog" src="../img/trash.png">` : ''}
                </div>
                <div class="blog-content">
                    ${content}
                </div>
            </div>
        `
    )
}

const viewProfile = ({user,email}) => {
    return (
        `
            <div class="">
                <div class="profile">
                    <div class="profile">
                        <img class="profile-img" src="../img/user.png" alt="">
                        <div class="profile-name">
                            ${user}
                        </div>
                    </div>
                    <div class="profile-email">
                        ${email}
                    </div>
                </div>
            </div>
        `
    )
}

const quitBlog = (id) => {
    deleteBlog(id)
    personalBlogs()
}

const validateBlogs = (blogs) => blogs.length !== 0 && blogs instanceof Array && blogs !== undefined

const personalBlogs = async () => {
    const blogs = await getBlogs()
    const session = getSession()
    const currentUser = getUser(session)
    const userBlogs = blogs.filter(b => b.owner === session)
    const validate = validateBlogs(userBlogs)
    const blogshtml = validate ?
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
        )
    const render = viewProfile(currentUser) + blogshtml
    document.getElementById("blogs").innerHTML = render
    document.querySelectorAll(".deleteblog").forEach((e) => {
        e.addEventListener("click", (e) => {
            quitBlog(e.target.id)
        }, false)
    })
}

const allBlogs = async () => {
    const blogs = await getBlogs()
    const users = getUsers()
    const validate = validateBlogs(blogs)
    const blogshtml = validate ?
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
}

const textBlogs = async () => {
    const blogs = await getBlogs()
    const users = getUsers()
    const textBlogs = blogs.filter(b => b.image === false)
    const validate = validateBlogs(textBlogs)
    const blogshtml = validate ?
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
}

const imageBlogs = async () => {
    const blogs = await getBlogs()
    const users = getUsers()
    const imageBlogs = blogs.filter(b => b.image !== false)
    const validate = validateBlogs(imageBlogs)
    const blogshtml = validate ?
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
}
//document.onload(showBlogs(), false)
document.addEventListener("DOMContentLoaded", allBlogs, false)
document.getElementById("newblog").addEventListener("click", () => {
    location.href = "new.html"
}, false)
document.getElementById("personal").addEventListener("click", personalBlogs, false)
document.getElementById("all").addEventListener("click", allBlogs, false)
document.getElementById("text").addEventListener("click", textBlogs, false)
document.getElementById("image").addEventListener("click", imageBlogs, false)
document.getElementById("logout").addEventListener("click", () => {
    deleteSession()
    location.href = "../index.html"
}, false)