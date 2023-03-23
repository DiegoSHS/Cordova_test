import { generateNav } from "./components/navbar.js";
import { addBlog } from "./indexeddb/indexdb.js";
import { getSession } from "./session.js";
let img
const validate = () => {
    const errors = {}
    const cont = document.getElementById("content").value
    if (cont === "" || cont === undefined) {
        errors.content = "El contenido del blog es requerido"
    }
    return errors
}
const uploadBlog = async(e) => {
    const validation = validate()
    const data = {
        content: document.getElementById("content").value,
        image: img || false
    }
    console.log(Object.keys(validation))
    if(Object.keys(validation).length === 0) {
        console.log(Object.values(validation))
        const errors = Object.values(validation).map(e => `<li>${e}</li>`).join("")
        document.getElementById("errors").className = "alert alert-danger alert-dismissible fade show"
        document.getElementById("errors").innerHTML = errors
    }else{
        const owner = getSession()
        const confirm = await addBlog({...data, owner})
        //createBlog({...data, owner})
        if(confirm) {
            alert("Blog subido")
            location.href = "feed.html"
        }else{
            alert("Error al subir el blog")
        }
    }
}
const readFile = (ev) => {
    const reader = new FileReader()
    const image_file = ev.target.files[0]
    reader.readAsDataURL(image_file)
    
    reader.onload = (e) => {
        const uploaded_image = e.target.result
        img = uploaded_image
        document.getElementById("image").src = uploaded_image
    }
}

const addListeners = () => {
    document.getElementById("all").addEventListener("click", ()=>{
        location.href = "feed.html"
    }, false)
    document.getElementById("logout").addEventListener("click", () => {
        deleteSession()
        location.href = "../index.html"
    }, false)
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('navbar').innerHTML = generateNav()
    addListeners()
})
document.querySelector("#file").addEventListener("change", readFile, false)
document.getElementById("newblog").addEventListener("click", uploadBlog, false)