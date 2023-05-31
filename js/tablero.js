// Me traigo el array de colores del session storage

const arrayColores = ["#80E5EB","#16F35D","#D5F507","#F50707"]; /**/
const combinacionGanadora = ["#80E5EB","#16F35D","#D5F507","#F50707"];
const combinacionUsuario = []; 
const arrayFichasComprobacion = []

let contadorFilas = 1; 

    let contenedor1 = document.getElementById(`posicion1`);
    let contenedor2 = document.getElementById(`posicion2`);
    let contenedor3 = document.getElementById(`posicion3`);
    let contenedor4 = document.getElementById(`posicion4`);
    let botonCheck = document.getElementById(`botonComprobar`);


let contador1 = 3;
let contador2 = 3;
let contador3 = 3;
let contador4 = 3;

let confirmarClick1 = false;
let confirmarClick2 = false;
let confirmarClick3 = false;
let confirmarClick4 = false;

const Ganador = (arrayA,arrayB) => { 

    if (arrayA.join("")===arrayB.join("")){
        alert('ENHORABUENA HAS GANADO')
    }
}

const Comprobador = (arrayA,arrayB) => { 
        
    for ( i=0 ; i<4; i++){ 
        
        if (arrayA.includes(arrayB[i])){ 
            let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
            fichaComprobacion.style.background = '#FFFFFF'
            arrayFichasComprobacion[i] = '#FFFFFF'; 
            
        }

        if(arrayA[i]===arrayB[i]){
            
            let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
            fichaComprobacion.style.backgroundColor = '#FF0000'
            arrayFichasComprobacion[i] = 'FF0000';
        }
    }
}


const CreaFila = () => {

    let filasDinamicas = document.getElementById('filasDinamicas'); 

    const fila = document.createElement('div'); 
    fila.id = `fila${contadorFilas}`
    fila.className ='filaD';

    const numeroFila = document.createElement('div'); 
    numeroFila.className = 'numeroFilaD'
    numeroFila.innerHTML = `${contadorFilas}`
    fila.appendChild(numeroFila)


    const contenedorCirculos = document.createElement('div'); 
    contenedorCirculos.className = 'contenedorCirculosD'; 
    fila.appendChild(contenedorCirculos)

    for (i = 0; i<4 ; i++){ 
        const div = document.createElement('div'); 
        div.className = "circulosEleccionUsuarioD"
        div.style.backgroundColor = combinacionUsuario[i]; 
        contenedorCirculos.appendChild(div)
    }

    const contenedorComprobacion = document.createElement('div'); 
    contenedorComprobacion.className = 'comprobacionCombinacionD d-flex'
    fila.appendChild(contenedorComprobacion)

    
    const columnaComprobacion1 = document.createElement('div'); 
    columnaComprobacion1.className = 'columnaComprobacionD'; 
    contenedorComprobacion.appendChild(columnaComprobacion1)


    const columnaComprobacion2 = document.createElement('div'); 
    columnaComprobacion2.className = 'columnaComprobacionD'; 
    contenedorComprobacion.appendChild(columnaComprobacion2)



    for (i=0; i < 2; i++){
      const circulosComprobacion1 = document.createElement('div');
      circulosComprobacion1.className = "circulosComprobacionD";
      circulosComprobacion1.style.backgroundColor = arrayFichasComprobacion[i];
      columnaComprobacion1.appendChild(circulosComprobacion1);
    
       
    };

    for (i=2; i < 4; i++){
        const circulosComprobacion2 = document.createElement('div'); 
        circulosComprobacion2.className = "circulosComprobacionD";
        circulosComprobacion2.style.backgroundColor = arrayFichasComprobacion[i];
        columnaComprobacion2.appendChild(circulosComprobacion2);
    }
    

    


    filasDinamicas.appendChild(fila)

    contadorFilas++

}

// //GENERACION ARRAY COMBINACION GANADORA


// // for ( i=0; i<4 ; i++){

// //     let posicionRandom = Math.floor(Math.random()*arrayColores.length);

// //     combinacionGanadora.push(arrayColores[posicionRandom]); 

// // }

// console.log('Combinacion ganadora: ', combinacionGanadora)



// //CAMBIO DE COLOR EN LOS DIVS AL HACER CLICK




contenedor1.addEventListener('click', () => {
    contador1++;
    // console.log("Estas en la primera celda")
    if (contador1 > 3){contador1 = 0;};
    contenedor1.style.backgroundColor = arrayColores[contador1];
    confirmarClick1 = true; 
    console.log("Esta es la posicion 1 ")
    
})
contenedor2.addEventListener('click', () => {   
    contador2++;
    if (contador2 > 3){contador2=0;};
    contenedor2.style.backgroundColor = arrayColores[contador2];
    confirmarClick2 = true
})
contenedor3.addEventListener('click', () => {
    contador3++;
    if (contador3 > 3){contador3=0;};
    contenedor3.style.backgroundColor = arrayColores[contador3];
    confirmarClick3 = true;
})
contenedor4.addEventListener('click', () => {
    contador4++;
    if (contador4 > 3){contador4=0;};
    contenedor4.style.backgroundColor = arrayColores[contador4];
    confirmarClick4 = true;
})






// //BOTON COMPROBAR

botonCheck.addEventListener('click', () => {

    if(confirmarClick1 == false || confirmarClick2 == false || confirmarClick3 == false || confirmarClick4 == false){

            console.log('combinacion usuario: ' + combinacionUsuario)
            alert ('TIENES QUE TENER CUATRO COLORES EN LA COMBINACION')    
            return;

            }else {
                
                combinacionUsuario.push(
                        arrayColores[contador1],
                        arrayColores[contador2],
                        arrayColores[contador3],
                        arrayColores[contador4])

                        console.log('combinacion usuario: ' + combinacionUsuario)
                        
                }

Ganador(combinacionGanadora,combinacionUsuario);

Comprobador(combinacionGanadora,combinacionUsuario);

CreaFila()

combinacionUsuario.splice(0,4)
console.log(combinacionUsuario)

contenedor1.style.backgroundColor = '#000000'
contenedor2.style.backgroundColor = '#000000'
contenedor3.style.backgroundColor = '#000000'
contenedor4.style.backgroundColor = '#000000'

contador1 = 3;
contador2 = 3;
contador3 = 3;
contador4 = 3;

confirmarClick1 = false
confirmarClick2 = false
confirmarClick3 = false
confirmarClick4 = false



for (i=0; i<4; i++){
    arrayFichasComprobacion[i] ='#000000'
    let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
    fichaComprobacion.style.background = '#000000'

}




})



// for (i = contadorFilas; i <= 10;){ 
    
//     let contenedor1 = document.getElementById(`posicion${contadorFilas}1`); 

//     contenedor1.addEventListener('click', () => { 

//         contador1++;
//         // console.log("Estas en la primera celda")
//         if (contador1 > 3){contador1 = 0;};
//         contenedor1.style.backgroundColor = arrayColores[contador1];
//         confirmarClick1 = true; 
//         console.log("Esta es la posicion 1 ")

//     }); 

//     contadorFilas++ 

//     console.log(contadorFilas)

// }
