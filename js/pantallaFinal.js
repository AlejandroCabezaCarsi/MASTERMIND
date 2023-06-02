let resultado = sessionStorage.getItem('resultado'); 
let nombreUsuario = sessionStorage.getItem('Nombre')
const objetivo = document.getElementById('objetivo');

console.log(nombreUsuario)

if(nombreUsuario === null){
    nombreUsuario = 'Jugador1'
}


console.log(nombreUsuario)

switch (resultado) {
    case 'ganador':
        
        

        const enhorabuena = document.createElement('p'); 
        enhorabuena.id = 'enhorabuena'
        enhorabuena.classList = 'd-flex h1 justify-content-center align-items-center'
        enhorabuena.innerHTML = '<p class=colorRojo>E</p><p class=colorVerde>N</p><p class=colorAmarillo>H</p><p class=colorLavanda>O</p><p class=colorAzul>R</p><p class=colorSalmon>A</p><p class=colorRosa>B</p><p class=colorAmarillo>U</p><p class=colorRojo>E</p><p class=colorAzulOscuro>N</p><p class=colorVerde>A</p><p class=colorSalmon></p><p class=colorAzul></p><p class=colorRojo></p><p class=colorAmarillo></p>'
        const nombre = document.createElement('p'); 
        nombre.classList = 'h1 d-flex justify-content-center text-light'
        nombre.textContent = nombreUsuario
        const ganado = document.createElement('p'); 
        ganado.classList = 'd-flex h1 justify-content-center align-items-center mt-3'
        ganado.innerHTML = '<p class=colorLavanda>H</p><p class=colorAmarillo>A</p><p class=colorVerde>S</p><p class="colorAzul ms-2">G</p><p class=colorSalmon>A</p><p class=colorRojo>N</p><p class=colorAzulOscuro>A</p><p class=colorVerde>D</p><p class=colorLavanda>O</p>'
        objetivo.appendChild(enhorabuena)
        objetivo.appendChild(nombre)
        objetivo.appendChild(ganado)
        


        break;
    case 'perdedor':
        const perdedor = document.createElement('p'); 
        perdedor.id = 'perdedor'; 
        perdedor.classList = 'd-flex h1 justify-content-center align-items-center'
        perdedor.innerHTML = '<p class="colorRojo">L</p><p class="colorAzul ">O</p><p class="colorVerde ms-2">S</p><p class="colorLavanda">I</p><p class="colorSalmon">E</p><p class="colorRojo">N</p><p class="colorRosaOscuro">T</p><p class="colorAmarillo">O</p>'
        const nombre2 = document.createElement('p'); 
        nombre2.classList = 'h1 d-flex justify-content-center text-light'
        nombre2.textContent = nombreUsuario; 
        const perdido = document.createElement('p'); 
        perdido.classList = 'd-flex h1 justify-content-center align-items-center mt-3'
        perdido.innerHTML = '<p class=colorAzulOscuro>H</p><p class=colorVerde>A</p><p class=colorAmarillo>S</p><p class="colorAzul ms-2">P</p><p class=colorRosa>E</p><p class=colorRojo>R</p><p class=colorAzulOscuro>D</p><p class=colorLavanda>I</p><p class=colorAmarillo>D</p><p class=colorRojo>O</p>'
        
        objetivo.appendChild(perdedor)
        objetivo.appendChild(nombre2)
        objetivo.appendChild(perdido)

        break;

    
}