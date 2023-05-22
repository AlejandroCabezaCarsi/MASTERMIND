// ESTE FUNCIONA, SOLO PUEDES ELEGIR EL COLOR UNA VEZ CON EL MISMO COLOR PICKER

let contenedor1 = document.getElementById ('div1')
let contenedor2 = document.getElementById ('div2')
let contenedor3 = document.getElementById ('div3')
let contenedor4 = document.getElementById ('div4')
let contador = 0; 
let boton = document.getElementById("boton")
let botonBorrar = document.getElementById("botonBorrar")

let arrayColores = [];




const input = document.querySelector("input"); 

    // input.oninput = () => {
    //     contador = 0 
    //     contador++

    //     console.log(contador)

    // }

    boton.addEventListener('click', ()=>{

    
        contador++;
        console.log(contador)

        if (contador <= 4){
            arrayColores.push(input.value)
            console.log(arrayColores)
        }

        switch (contador) {
            case 1:
                contenedor1.style.backgroundColor = input.value;
                break;
            case 2:
                contenedor2.style.backgroundColor = input.value;
                break;
            case 3:
                contenedor3.style.backgroundColor = input.value;
                break;
            case 4:
                contenedor4.style.backgroundColor = input.value;
                break;
        
        }
        
    })


    botonBorrar.addEventListener('click', ()=> { 

        if (contador>=0 || contador <= 4){ 
            contador--;
            arrayColores.pop();
            console.log(arrayColores);
        } 
        if (arrayColores[contador] = ""){ 
            
        }

    }});
    

    const guardaColor = () => { 

        sessionStorage.setItem("eleccionColoresJugador", JSON.stringify(arrayColores));
        

    }

    const siguientePantalla = () => {

        guardaColor()

        window.location.href="./pages/pagina2.html";

    }



