import { newBlog } from "./blogs.js";
import { getSession } from "./session.js";
let img
const validate = () => {
    const errors = {}
    if (document.getElementById("content").value === "") {
        errors.content = "El contenido del blog es requerido"
    }
    return errors
}
const uploadBlog = (e) => {
    e.preventDefault()
    const validation = validate()
    const data = {
        content: document.getElementById("content").value,
        image: img || false
    }
    if(Object.keys(validation).length === 0) {
        const owner = getSession()
        newBlog({...data, owner})
        alert("Blog subido")
        location.href = "feed.html"
    }else{
        const errors = Object.values(validation).map(e => `<li>${e}</li>`).join("")
        document.getElementById("errors").className = "alert alert-danger alert-dismissible fade show"
        document.getElementById("errors").innerHTML = errors
    }
}
const readFile = (ev) => {
    const reader = new FileReader()
    const image_file = ev.target.files[0]
    reader.readAsDataURL(image_file)
    
    reader.onload = (e) => {
        const uploaded_image = e.target.result
        img = uploaded_image
        console.log(img)
        document.getElementById("image").src = uploaded_image
    }
}
document.querySelector("#file").addEventListener("change", readFile, false)
document.getElementById("newblog").addEventListener("click", uploadBlog, false)