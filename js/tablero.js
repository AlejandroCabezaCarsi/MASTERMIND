//Me traigo el array de colores del session storage

const arrayColores = ["#80E5EB","#16F35D","#D5F507","#F50707"];
const combinacionGanadora = ["#80E5EB","#16F35D","#D5F507","#F50707"];
const combinacionUsuario = ["#80E5EB","#16F35D","#D5F507","#F50707"]; 

const contenedor1 = document.getElementById('posicion1');
const contenedor2 = document.getElementById('posicion2');
const contenedor3 = document.getElementById('posicion3');
const contenedor4 = document.getElementById('posicion4');
const botonCheck = document.getElementById('botonComprobar');
const fichaComprobacion1 = document.getElementById('fichaComprobacion1')

contenedor1.style.backgroundColor = '#000000';
contenedor2.style.backgroundColor = '#000000';
contenedor3.style.backgroundColor = '#000000';
contenedor4.style.backgroundColor = '#000000';

let contador1 = 0
let contador2 = 0
let contador3 = 0
let contador4 = 0


const comprobacion = (arrayA,arrayB) => { 

    if (arrayA.join("")===arrayB.join("")){
        alert('ENHORABUENA HAS GANADO')
    }else(
        alert('SIGUE INTENTANDOLO')
    )

}

//GENERACION ARRAY COMBINACION GANADORA


// for ( i=0; i<4 ; i++){

//     let posicionRandom = Math.floor(Math.random()*arrayColores.length);

//     combinacionGanadora.push(arrayColores[posicionRandom]); 

    

    

// }

console.log('Combinacion ganadora: ', combinacionGanadora)

//CAMBIO DE COLOR EN LOS DIVS AL HACER CLICK



contenedor1.addEventListener('click', () => {

    contador1++;
    contenedor1.style.backgroundColor = arrayColores[contador1];
    
    if (contador1>= 3){contador1=-1;};
    console.log(arrayColores[contador1])

})
contenedor2.addEventListener('click', () => {
    
    contenedor2.style.backgroundColor = arrayColores[contador2];
    contador2++;
    if (contador2>= arrayColores.length){contador2=0;};
    

})
contenedor3.addEventListener('click', () => {
    
    contenedor3.style.backgroundColor = arrayColores[contador3];
    contador3++;
    if (contador3>= arrayColores.length){contador3=0;};
    

})
contenedor4.addEventListener('click', () => {
    
    contenedor4.style.backgroundColor = arrayColores[contador4];
    contador4++;
    if (contador4>= arrayColores.length){contador4=0;};
    

})

//BOTON COMPROBAR

botonCheck.addEventListener('click', () => {

    // combinacionUsuario.push(
    //     arrayColores[contenedor1.style.backgroundColor],
    //     arrayColores[contador2],
    //     arrayColores[contador3],
    //     arrayColores[contador4]
    // )

    console.log('Combinacion usuario: ', combinacionUsuario)

    comprobacion(combinacionGanadora,combinacionUsuario)
})

// FICHAS COMPROBACION POSICIONES



