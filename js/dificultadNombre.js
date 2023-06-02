const boton = document.getElementById('enviar'); 
const input = document.getElementById('nombre'); 

boton.addEventListener('click', ()=>{
    
    sessionStorage.setItem('Nombre', input.value)
    window.location.href = 'dificultad.html'

})


const GuardaDificultad = (dificultad) => { 
        sessionStorage.setItem('Dificultad', dificultad);     
    }