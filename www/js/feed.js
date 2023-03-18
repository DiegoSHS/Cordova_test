import { getBlogs } from "./blogs.js"
import { getSession } from "./session.js"
import { getUser, getUsers } from "./users.js"

const personalBlogs = () => {
    const blogs = getBlogs()
    const session = getSession()
    const currentUser = getUser(session)
    const userBlogs = blogs.filter(b => b.owner === session)
    const blogshtml = userBlogs.map(({content, image, owner}) => {
        return (
            `
                <div class=${image ? "blog" : "text-blog"}>
                    <div class="profile-info">
                        <img class="profile-img" src="../img/user.png" alt="">
                        <div class="profile-name">
                            ${currentUser?.user}
                        </div>
                    </div>
                    ${image ? `<img class="blog-image" src="${image}" alt="">` : '<div></div>'}
                    <div class="icon-heart">
                        <img class="img-icon-heart" src="../img/feed/icon_heart_.png">
                    </div>
                    <div class="blog-content">
                        ${content}
                    </div>
                </div>
            `
        )
    }).reverse().join('')
    document.getElementById("blogs").innerHTML = blogshtml
}

const allBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const blogshtml = blogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        return (
            `
                <div class=${image ? "blog" : "text-blog"}>
                    <div class="profile-info">
                        <img class="profile-img" src="../img/user.png" alt="">
                        <div class="profile-name">
                            ${userOwner?.user}
                        </div>
                    </div>
                    ${image ? `<img class="blog-image" src="${image}" alt="">` : '<div></div>'}
                    <div class="icon-heart">
                        <img class="img-icon-heart" src="../img/feed/icon_heart_.png">
                    </div>
                    <div class="blog-content">
                        ${content}
                    </div>
                </div>
            `
        )
    }).reverse().join('')
    document.getElementById("blogs").innerHTML = blogshtml
}
//document.onload(showBlogs(), false)
document.addEventListener("DOMContentLoaded", allBlogs, false)
document.getElementById("newblog").addEventListener("click", () => {
    location.href = "new.html"
}, false)
