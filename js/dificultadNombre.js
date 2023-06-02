const boton = document.getElementById('enviar'); 
const input = document.getElementById('nombre'); 

input.addEventListener('input', () =>{

    const inputValue = input.value
    

})


boton.addEventListener('click', ()=>{
    
    sessionStorage.setItem('Nombre', input.value)

})


const GuardaDificultad = (dificultad) => { 
        sessionStorage.setItem('Dificultad', dificultad);     
    }