import { getBlogs } from "./blogs.js"
import { getUsers } from "./users.js"
const showBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const blogshtml = blogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        return (
            `
        <div class="feed-items fitem">
            <div class="profiles">
                <img class="profiles-img" src="../img/user.png" alt="">
                <div class="profiles-text">
                    ${userOwner?.user}
                </div>
            </div>
            <img class="feed-item-img" src="${image}" alt="">
            <div class="icon-heart">
                <img class="profiles-icon" src="../img/feed/icon_heart_.png">
            </div>
            <div class="blog-content">
                ${content}
            </div>
        </div>`
        )
    }).join('')
    document.getElementById("blogs").innerHTML += blogshtml
}
//document.onload(showBlogs(), false)
document.addEventListener("DOMContentLoaded", showBlogs, false)