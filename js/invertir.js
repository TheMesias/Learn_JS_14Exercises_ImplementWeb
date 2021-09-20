const $formulario = document.getElementById("formulario"), 
$numero = document.getElementById("numero"), 
$h2 = document.getElementById("h2"), 
$rt = document.getElementById("respuesta"), 
$html = document.getElementById("html"), 
$contenedor = document.querySelector(".contenedor-formulario"); 
let bl = true; 

$formulario.onsubmit = e => {
    e.preventDefault();
    const numVali = parseInt($numero.value); 
    
    if($numero.value === "-000"){
        $rt.textContent = $numero.value;
    }else{
        if(numVali >= 0){
            $rt.textContent = "";
            if(numero.value.length === 3){
                NumRever($numero.value);
                $h2.textContent = "El número invertido es"
            }else{
                imprimirAlerta("Ingrese un número de 3 digitos");
            }
        }else{
            if(numero.value.length === 4){
                bl = false; 
                NumRever($numero.value);
                $h2.textContent = "El número invertido es"
            }else{
                imprimirAlerta("Ingrese un número de 3 digitos");
            }
        }
    }
}

function NumRever(numero){
    let rt = ""; 
    if(bl){
        for(let i = numero.length - 1; i>=0;i--){
            rt = rt + numero.charAt(i); 
            $rt.textContent = rt;
        }
    }else if(bl == false){
        for(let i = 3; i>=1;i--){
            rt = rt + numero.charAt(i); 
            $rt.textContent = "-" + rt;
            bl=true;
        }
    }  
}

function imprimirAlerta(mensaje){
    const divMensaje = document.createElement('div'); 

        divMensaje.classList.add('info');
        divMensaje.classList.add('error'); 
        
        divMensaje.textContent = mensaje; 
 
        document.querySelector('#formulario').insertBefore(divMensaje, $contenedor); 

        setTimeout(() => {
            divMensaje.remove(); 
        }, 2000);
}











 //funcion 
        /*if(rt >= 1 || rt <= 9){
            invertirNumDos(numero); 
        }else{
            $h2.textContent = "El numero invertido es"
            $respuesta.textContent = rt; 
        } */  
function invertirNumUno(numero) {
    var inver = 0
    var num = numero
    
        do {
        inver = inver * 10 + (num % 10)
        num = Math.floor(num / 10)
        } while ( num > 0 )  
        return inver
    
}

function invertirNumDos(numero){
    var inver = 0
    var num = numero
    do {
        inver = inver * 10 + (num % 10)
        num = Math.floor(num / 10)
        $respuesta.textContent += inver; 
    } while ( num > 0 )  
}
