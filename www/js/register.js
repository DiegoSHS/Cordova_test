import { setSession } from "./session.js"
import { addUser, getUsers } from "./users.js"
import { newId } from "./utils.js"

const validate = ({user,email,pass,pass2}) => {
    const errors = {}
    if (user === "" || user === undefined) {
        errors.user = "El nombre de usuario es requerido"
    }
    if (email === "" || email === undefined) {
        errors.email = "El correo electrónico es requerido"
    }
    if (pass === "" || pass === undefined) {
        errors.pass = "La contraseña es requerida"
    }
    if (pass2 === "" || pass2 === undefined) {
        errors.pass2 = "La confirmación de la contraseña es requerida"
    }
    if (pass !== pass2) {
        errors.pass2 = "Las contraseñas no coinciden"
    }
    return errors
}

const register = (e) => {
    e.preventDefault()
    const erralert = document.getElementById("errors")
    const data = {
        user: document.getElementById("user").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
        pass2: document.getElementById("pass2").value
    }
    const validation = validate(data)
    if (Object.keys(validation).length === 0) {
        const users = getUsers()
        const user = users.find(u => u.user === data.user)
        if (user) {
            alert("El usuario ya existe")
        } else {
            const id = newId()
            addUser(id,data)
            setSession(id)
            alert("Usuario registrado")
            location.href = "feed.html"
        }
    } else {
        const errors = Object.values(validation).map(e => `<li>${e}</li>`).join("")
        erralert.className = "alert alert-danger alert-dismissible fade show"
        erralert.innerHTML = errors
    }
}

const toLogin = (e) => {
    e.preventDefault()
    location.href = "../index.html"
}

document.getElementById("sesion").addEventListener("click", toLogin, false)
document.getElementById("register").addEventListener("click", register, false)
