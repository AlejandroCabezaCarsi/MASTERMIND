//Me traigo el array de colores del session storage

// const arrayColores = ["#80E5EB","#16F35D","#D5F507","#F50707"]; /**/
// const combinacionGanadora = ["#80E5EB","#16F35D","#D5F507","#F50707"];
// const combinacionUsuario = []; 

// const contenedor1 = document.getElementsByClassName('posicion1');
// const contenedor2 = document.getElementsByClassName('posicion2');
// const contenedor3 = document.getElementsByClassName('posicion3');
// const contenedor4 = document.getElementsByClassName('posicion4');

// // const botonCheck = document.getElementById('botonComprobar');

// // const fichaComprobacion1 = document.getElementById('fichaComprobacion1');
// // const fichaComprobacion2 = document.getElementById('fichaComprobacion2');
// // const fichaComprobacion3 = document.getElementById('fichaComprobacion3');
// // const fichaComprobacion4 = document.getElementById('fichaComprobacion4');


// let botonCheck = document.getElementById('botonComprobar');

// let contador1 = 3;
// let contador2 = 3;
// let contador3 = 3;
// let contador4 = 3;

// let confirmarClick1 = false;
// let confirmarClick2 = false;
// let confirmarClick3 = false;
// let confirmarClick4 = false;

// let contadorFila = 1; 


// const Ganador = (arrayA,arrayB) => { 

//     if (arrayA.join("")===arrayB.join("")){
//         alert('ENHORABUENA HAS GANADO')
//     }
// }

// const Comprobador = (arrayA,arrayB) => { 
        
//     for ( i=0 ; i<4; i++){ 
        
//         if (arrayA.includes(arrayB[i])){ 
//             let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
//             fichaComprobacion.style.background = '#FFFFFF'
            
//         }

//         if(arrayA[i]===arrayB[i]){
            
//             let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
//             fichaComprobacion.style.backgroundColor = '#FF0000'
//         }
//     }
// }


// //GENERACION ARRAY COMBINACION GANADORA


// // for ( i=0; i<4 ; i++){

// //     let posicionRandom = Math.floor(Math.random()*arrayColores.length);

// //     combinacionGanadora.push(arrayColores[posicionRandom]); 

// // }

// console.log('Combinacion ganadora: ', combinacionGanadora)

// //CAMBIO DE COLOR EN LOS DIVS AL HACER CLICK


// document.addEventListener('DOMContentLoaded', () =>{


// contenedor1[0].addEventListener('click', () => {
//     contador1++;
//     if (contador1 > 3){contador1 = 0;};
//     contenedor1.style.backgroundColor = arrayColores[contador1];
//     confirmarClick1 = true; 
// })
// contenedor2[0].addEventListener('click', () => {   
//     contador2++;
//     if (contador2 > 3){contador2=0;};
//     contenedor2.style.backgroundColor = arrayColores[contador2];
//     confirmarClick2 = true
// })
// contenedor3[0].addEventListener('click', () => {
//     contador3++;
//     if (contador3 > 3){contador3=0;};
//     contenedor3.style.backgroundColor = arrayColores[contador3];
//     confirmarClick3 = true;
// })
// contenedor4[0].addEventListener('click', () => {
//     contador4++;
//     if (contador4 > 3){contador4=0;};
//     contenedor4.style.backgroundColor = arrayColores[contador4];
//     confirmarClick4 = true;
// })

// //BOTON COMPROBAR

// let contadorCheck = 0 

// botonCheck.addEventListener('click', () => {

//     if(confirmarClick1 == false || confirmarClick2 == false || confirmarClick3 == false || confirmarClick4 == false){

//             console.log('combinacion usuario: ' + combinacionUsuario)
//             alert ('TIENES QUE TENER CUATRO COLORES EN LA COMBINACION')    
//             return;

//             }else {
                
//                 combinacionUsuario.push(
//                         arrayColores[contador1],
//                         arrayColores[contador2],
//                         arrayColores[contador3],
//                         arrayColores[contador4])

//                         console.log('combinacion usuario: ' + combinacionUsuario)


//             }
    
// Ganador(combinacionGanadora,combinacionUsuario);

// Comprobador(combinacionGanadora,combinacionUsuario);




//     }    
// )


// })

// FICHAS COMPROBACION POSICIONES

// let contadorCheck = 0; 

// let juegoPincipal = document.getElementById('juegoPrincipal')

// const pintaTablero = () => {

//     contadorCheck++
    
//     juegoPincipal.innerHTML += `<div class="filaMovil d-flex">
//     <div class="contadorComprobar">
//         <div class="contador d-flex justify-content-center">1</div>
//         <button id="botonComprobar" class="comprobar">check</button>
//     </div>

//     <div class="circulosEleccion d-flex justify-content-around align-items-center">
//         <div id="posicion${contadorCheck}1" class="circulosEleccionUsuario posicion1"></div>
//         <div id="posicion${contadorCheck}2" class="circulosEleccionUsuario"></div>
//         <div id="posicion${contadorCheck}3" class="circulosEleccionUsuario"></div>
//         <div id="posicion${contadorCheck}4" class="circulosEleccionUsuario"></div>
//     </div>
//     <div class="comprobacionCombinacion d-flex justify-content-center align-items-center">
//         <div class="comprobacionCombinacionColumna">
//             <div id="fichaComprobacion${contadorCheck}1" class="circulosComprobacion"></div>
//             <div id="fichaComprobacion${contadorCheck}2" class="circulosComprobacion"></div>
//         </div>
//         <div class="comprobacionCombinacionColumna">
//             <div id="fichaComprobacion${contadorCheck}3" class="circulosComprobacion"></div>
//             <div id="fichaComprobacion${contadorCheck}4" class="circulosComprobacion"></div>
//         </div>               
//     </div>

// </div>`

// }


// PRUEBAS 

// let contadorPrueba = 0;
// let seleccionUsuario = document.querySelectorAll('.circulosEleccionUsuario');

// seleccionUsuario.forEach((circulo) => {
//   circulo.addEventListener('click', () => {

    
//     circulo.style.backgroundColor = arrayColores[contadorPrueba];
//     contadorPrueba++

//     if (contadorPrueba > (arrayColores.length - 1)){
//         contadorPrueba = 0; 
//     }

//   });

  
// });


// let botonCheck = document.getElementById('botonComprobar');

// botonCheck.addEventListener('click', () => {

//     if(confirmarClick1 == false || confirmarClick2 == false || confirmarClick3 == false || confirmarClick4 == false){

//             console.log('combinacion usuario: ' + combinacionUsuario)
//             alert ('TIENES QUE TENER CUATRO COLORES EN LA COMBINACION')    
//             return;

//             }else {
                
//                 combinacionUsuario.push(
//                         arrayColores[contadorPrueba],
//                         arrayColores[contadorPrueba],
//                         arrayColores[contadorPrueba],
//                         arrayColores[contadorPrueba])

//                         console.log('combinacion usuario: ' + combinacionUsuario)


//             }
    
// Ganador(combinacionGanadora,combinacionUsuario);

// Comprobador(combinacionGanadora,combinacionUsuario);




//     }    
// )
