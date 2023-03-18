import { getBlogs } from "./blogs.js"
import { getUsers } from "./users.js"
const showBlogs = () => {
    const blogs = getBlogs()
    const users = getUsers()
    const blogshtml = blogs.map(({ content, image, owner, }) => {
        const userOwner = users.find(u => u.id === owner)
        const { user } = userOwner
            `
        <div class="feed-items fitem">
            <div class="profiles">
                <div class="profiles-img">
                    <img src="../img/feed/users/user1.png" alt="">
                </div>
                <div class="profiles-text">
                    ${owner}
                </div>
            </div>
            <div class="feed-item-img">
                <div class="profiles-icon">
                    <img src="../img/feed/icon _heart_.png">
                </div>
                <img src="${image}" alt="">
            </div>
            <div>
                ${content}
            </div>
        </div>`
    }).join('')
    document.getElementById("feed").innerHTML = blogshtml
}
//document.onload(showBlogs(), false)
document.addEventListener("DOMContentLoaded", showBlogs, false)