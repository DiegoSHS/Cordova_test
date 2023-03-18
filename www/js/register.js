import { setSession } from "./session.js"
import { addUser, getUsers } from "./users.js"
import { newId } from "./utils.js"

const validate = (data) => {
    const errors = {}
    if (data.user === "" || data.user === undefined) {
        errors.user = "El nombre de usuario es requerido"
    }
    if (data.email === "" || data.email === undefined) {
        errors.email = "El correo electrónico es requerido"
    }
    if (data.pass === "" || data.pass === undefined) {
        errors.pass = "La contraseña es requerida"
    }
    if (data.pass2 === "" || data.pass2 === undefined) {
        errors.pass2 = "La confirmación de la contraseña es requerida"
    }
    if (data.pass !== data.pass2) {
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
            location.href = "sfeed.html"
        }
    } else {
        const errors = Object.values(validation).map(e => `<li>${e}</li>`).join("")
        erralert.className = "alert alert-danger alert-dismissible fade show"
        erralert.innerHTML = errors
    }
}

document.getElementById("register").addEventListener("click", register, false)
