// // Me traigo el array del session storage 

// let arrayColores = ["rojo","azul","amarillo","verde","morado","rosa"]; 

// let combinacionGanadora = [];

// // combinacionUsuario = /*colorPicker del juego*/;

// let combinacionUsuario = []

// let contador = 0;

// for (i=0 ; i < 4; i++){

//     let posicionRandom = Math.floor(Math.random()*arrayColores.length); 

//     combinacionGanadora.push(arrayColores[posicionRandom]); 

//     console.log(combinacionGanadora)



// }

// // COMPROBACION


// if (combinacionUsuario.join("") === combinacionGanadora.join("")){

//     console.log("HAS GANADO");
// }else {
    
//     console.log("sigue intentandolo");
// }


//EL PRIMERO FUNCIONAAAAA

// let colorPicker = document.getElementById('colorPickerFacil1'); 

// let contenedor = document.getElementById('contenedorColorPickerFacil1'); 

// colorPicker.addEventListener('input', ()=>{
//     contenedor.style.backgroundColor = colorPicker.value
// })

//-----------------------------------------------------

// let colorPicker = document.getElementById('colorPickerFacil1');
// let contenedor = document.getElementById('contenedorColorPickerFacil1');

// contenedor.addEventListener('click', () => {
//   colorPicker.click();
// });

// colorPicker.addEventListener('input', () => {
//   contenedor.style.backgroundColor = colorPicker.value;
// });

//------------------------------------------------------

let contenedor = document.getElementById('contenedorColorPickerFacil1');

contenedor.addEventListener('click', function() {
  let colorPicker = document.getElementById('colorPickerFacil1');
  colorPicker.click();
});

let colorPicker = document.getElementById('colorPickerFacil1');
colorPicker.addEventListener('input', function() {
  contenedor.style.backgroundColor = colorPicker.value;
});

