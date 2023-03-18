import { setSession } from "./session.js"
import { getUsers } from "./users.js"

const validate = (data) => {
    const errors = {}
    if (data.user === "" || data.user === undefined) {
        errors.user = "El nombre de usuario es requerido"
    }
    if (data.pass === "" || data.pass === undefined) {
        errors.pass = "La contraseña es requerida"
    }
    return errors
}
const login = () => {
    const erralert = document.getElementById("errors")
    const data = {
        user: document.getElementById("user").value,
        pass: document.getElementById("pass").value
    }
    const validation = validate(data)
    if (Object.keys(validation).length === 0){
        const users = getUsers()
        const user = users.find(u => u.user === data.user && u.pass === data.pass)
        if (user) {
            setSession(user.id)
            alert("Bienvenido")
            location.href = "pages/feed.html"
        }else{
            alert("Usuario o contraseña incorrectos")
        }
    }else{
        const errors = Object.values(validation).map(e => `<li>${e}</li>`).join("")
        erralert.className = "alert alert-danger alert-dismissible fade show"
        erralert.innerHTML = errors
    }
}
document.getElementById("login").addEventListener("click", login, false)