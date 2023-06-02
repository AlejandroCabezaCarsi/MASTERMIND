// let resultado = sessionStorage.getItem('resultado'); 
let resultado = 'ganador'
let objetivo = document.getElementById('objetivo'); 

switch (resultado) {
    case 'ganador':
        
        

        const enhorabuena = document.createElement('p'); 
        enhorabuena.id = 'enhorabuena'
        enhorabuena.classList = 'd-flex h1 justify-content-center align-items-center'
        enhorabuena.innerHTML = '<p class=color></p><p class=colorRojo>E</p><p class=colorVerde>N</p><p class=colorAmarillo>H</p><p class=colorLavanda>O</p><p class=colorAzul>R</p><p class=colorSalmon>A</p><p class=colorRosa>B</p><p class=colorAmarillo>U</p><p class=colorRojo>E</p><p class=colorAzulOscuro>N</p><p class=colorVerde>A</p><p class=colorSalmon></p><p class=colorAzul></p><p class=colorRojo></p><p class=colorAmarillo></p>'
        objetivo.appendChild(enhorabuena)


        break;
    case 'perdedor':
        const perdedor = document.createElement('p'); 
        perdedor.id = 'perdedor'; 
        perdedor.classList = 'd-flex h1 justify-content-center align-items-center'
        perdedor.innerHTML = '<p class="colorRojo">L</p><p class="colorAzul ">O</p><p class="colorVerde ms-2">S</p><p class="colorLavanda">I</p><p class="colorSalmon">E</p><p class="colorRojo">N</p><p class="colorRosaOscuro">T</p><p class="colorAmarillo">O</p>'
        objetivo.appendChild(perdedor)
        break;

    
}