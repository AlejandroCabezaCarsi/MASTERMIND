let contenedor1 = document.getElementById ('contenedorColorPickerFacil1');
let contenedor2 = document.getElementById ('contenedorColorPickerFacil2');
let contenedor3 = document.getElementById ('contenedorColorPickerFacil3');
let contenedor4 = document.getElementById ('contenedorColorPickerFacil4');

let colorPickerExistente = false; 

let arrayColores = []

const apareceColorPicker = () => { 

    if (colorPickerExistente == false ){
    
    const colorPicker = document.getElementById('colorPicker'); 
    
    const inputColorPicker = document.createElement('input'); 
    inputColorPicker.type = 'color'; 

    colorPicker.appendChild(inputColorPicker)

    colorPicker.style.display = 'block'; }
    
    colorPickerExistente = true; 

}

contenedor1.style.backgroundColor = "#AC92EC"; 
contenedor2.style.backgroundColor = "#F6BB42"; 
contenedor3.style.backgroundColor = "#ED5565"; 
contenedor4.style.backgroundColor = "#A0D468"; 






