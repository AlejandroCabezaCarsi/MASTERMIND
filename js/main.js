let contenedor1 = document.getElementById ('contenedorColorPickerFacil1');
let contenedor2 = document.getElementById ('contenedorColorPickerFacil2');
let contenedor3 = document.getElementById ('contenedorColorPickerFacil3');
let contenedor4 = document.getElementById ('contenedorColorPickerFacil4');

contenedor1.style.backgroundColor = "#AC92EC"; 
contenedor2.style.backgroundColor = "#F6BB42"; 
contenedor3.style.backgroundColor = "#ED5565"; 
contenedor4.style.backgroundColor = "#A0D468"; 

let arrayColores = []


const colorPickerFacil1 = document.querySelector('#colorPickerFacil1'); 
const colorPickerFacil2 = document.querySelector('#colorPickerFacil2'); 
const colorPickerFacil3 = document.querySelector('#colorPickerFacil3'); 
const colorPickerFacil4 = document.querySelector('#colorPickerFacil4'); 


colorPickerFacil1.addEventListener('input', () => { 

    contenedor1.style.backgroundColor = colorPickerFacil1.value

    console.log(colorPickerFacil1.value)

})
colorPickerFacil2.addEventListener('input', () => { 

    contenedor2.style.backgroundColor = colorPickerFacil2.value

    console.log(colorPickerFacil1.value)

})
colorPickerFacil3.addEventListener('input', () => { 

    contenedor3.style.backgroundColor = colorPickerFacil3.value

    console.log(colorPickerFacil1.value)

})

colorPickerFacil4.addEventListener('input', () => { 

    contenedor4.style.backgroundColor = colorPickerFacil4.value

    console.log(colorPickerFacil1.value)

})

console.log(contenedor1.backgroundColor)
console.log(contenedor2.backgroundColor)
console.log(contenedor3.backgroundColor)
console.log(contenedor4.backgroundColor)
// let colorPickerExistente = false; 



// const apareceColorPicker = () => { 

//     if (colorPickerExistente == false ){
    
//     const colorPicker = document.getElementById('colorPicker'); 
    
//     const inputColorPicker = document.createElement('input'); 
//     inputColorPicker.type = 'color'; 

//     colorPicker.appendChild(inputColorPicker)

//     colorPicker.style.display = 'block'; }
    
//     colorPickerExistente = true; 

// }







