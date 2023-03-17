const onLoad = () => {
    document.addEventListener("deviceready", onDeviceReady, false);
}

const onDeviceReady = () => {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    // pueden ser añadidos más eventos
}

const onPause = () => {
    // Maneja el evento de la app llevada a segundo plano
}

const onResume = () => {
    // Maneja el evento de la app traida a primer plano
}

const onMenuKeyDown = () => {
    //  maneja el evento de botón menú
}

// listen for uncaught cordova callback errors
window.addEventListener("cordovacallbackerror", event => {
    // event.error contains the original error object
})
document.getElementById("regi").addEventListener("click", ()=> {location.href = "pages/register.html";})

