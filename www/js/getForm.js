import { addUser } from './db.js'
const register = () => {
    const form = new FormData(document.getElementById('register-form'))
    addUser(form)
}