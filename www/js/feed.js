import { deleteBlog, getBlogs } from "./blogs.js"
import { getSession } from "./session.js"
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

const quitBlog = (id) => {
    deleteBlog(id)
    personalBlogs()
}

const personalBlogs = () => {
    const blogs = getBlogs()
    const session = getSession()
    const currentUser = getUser(session)
    const userBlogs = blogs.filter(b => b.owner === session)
    const blogshtml = userBlogs.map(({ content, image, id }) => {
        return generateBlog({
            content: content,
            image: image,
            owner: currentUser?.user,
            id: id
        }, true)
    }).reverse().join('')
    document.getElementById("blogs").innerHTML = blogshtml
    document.querySelectorAll(".deleteblog").forEach((e) => {
        e.addEventListener("click", (e) => {
            quitBlog(e.target.id)
        }, false)
    })
}

const allBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const blogshtml = blogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        return generateBlog({
            content: content,
            image: image,
            owner: userOwner?.user
        })
    }).reverse().join('')
    document.getElementById("blogs").innerHTML = blogshtml
}

const textBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const textBlogs = blogs.filter(b => b.image === false)
    const blogshtml = textBlogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        return generateBlog({
            content: content,
            image: image,
            owner: userOwner?.user
        })
    }).reverse().join('')
    document.getElementById("blogs").innerHTML = blogshtml
}

const imageBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const imageBlogs = blogs.filter(b => b.image !== false)
    const blogshtml = imageBlogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        return generateBlog({
            content: content,
            image: image,
            owner: userOwner?.user
        })
    }).reverse().join('')
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