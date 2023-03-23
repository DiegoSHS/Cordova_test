export const generateBlog = ({ content, image, owner, id }, personal = false) => {
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
