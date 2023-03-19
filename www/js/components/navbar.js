export const generateNav = () => {
    const infeedpage = location.href.includes("feed.html")
    return (
        `
            <div class="navv">
                <div class="navig">
                    <div class="navig-items">
                        ${
                            infeedpage ?
                            `
                            <div id="newblog" class="nitem">
                                <div class="nitem-img">
                                    <img src="/www/img/add.png" />
                                </div>
                                <div class="nitem-text">
                                    Publicar
                                </div>
                            </div>
                            <div id="image" class="nitem">
                                <div class="nitem-img">
                                    <img src="../img/feed/camera.png" alt="">
                                </div>
                                <div class="nitem-text">
                                    Con foto
                                </div>
                            </div>
                            <div id="text" class="nitem">
                                <div class="nitem-img">
                                    <img src="../img/feed/text.png" alt="">
                                </div>
                                <div class="nitem-text">
                                    Solo texto
                                </div>
                            </div>
                            `: ''
                        }
                        <div id="all" class="nitem">
                            <div class="nitem-img">
                                <img src="../img/feed/home.png" alt="">
                            </div>
                            <div class="nitem-text">
                                Inicio
                            </div>
                        </div>
                        <div class="nitem">
                            <div class="nav-item dropdown">
                                <a class="" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img class="nitem-img" src="/www/img/feed/menu.png" />
                                </a>
                                <div class="dropdown-menu itemss">
                                    <div class="itemss">
                                        ${
                                            infeedpage ?
                                            `
                                            <div id="personal" class="drop-item">
                                                <img class="nitem-img" src="../img/feed/user.png" alt="">
                                                <div class="">
                                                    Yo
                                                </div>
                                            </div>
                                            `:''
                                        }
                                        <div id="logout" class="drop-item">
                                            <img class="nitem-img" src="../img/feed/logout.png" alt="">
                                            <div>
                                                Salir
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    )
}