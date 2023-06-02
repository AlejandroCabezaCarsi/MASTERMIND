const boton = document.getElementById('enviar'); 
const nombre = document.getElementById('nombre')


const EnviaNombre= () => {
    sessionStorage.setItem('Nombre', nombre.value)
    window.location.href = 'dificultad.html'
    window.location.href = 'dificultad.html'

}

