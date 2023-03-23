export const viewProfile = ({ user, email }) => {
    return (
        `
            <div class="profile-container">
                <div class="profile-info">
                    <div class="profile">
                        <img class="profile-img" src="../img/user.png" alt="">
                        <div class="profile-name">
                            ${user}
                        </div>
                    </div>
                </div>
                <div class="profile-email profile-info profile">
                ${email}
            </div>
            </div>
        `
    )
}