const $formulario = document.getElementById("formulario"), 
$numero = document.getElementById("numerot"), 
$respuesta = document.getElementById("respuesta"); 

let array = []; 
let rt = []; 

$formulario.onsubmit = e => {
    e.preventDefault(); 
    $respuesta.innerHTML = ` `; 
    digitos(); 
    divisores();
   rt.forEach( i => {
       $respuesta.innerHTML += ` <p> ${i} </p>`; 
   })
}

divisores = () => {
    let uno = false; 
    let dos = false; 

    let resto;
    let c=0;  
    for(let u = 0; u <= array.length; u++){
        let numero = array[u]; 
       
        for(let i=0; i<=numero;i++){
            resto = numero % i; 
            if(resto === 0){
                
                if(i==1){
                    uno = true; 
                }
                if(i==5){
                    dos = true; 
                }
                if(i>5){
                    if(primo(i) == 2){
                        c++; 
                    }
                }
                if(uno == true  && dos == true  && c == 1){
                    if(rt.indexOf(numero) == -1){
                       rt.push(numero); 
                   }
                }
            }
        }
        c=0; 
        uno =false; 
        dos = false;    
    }

}



digitos = () => {
    for(let i=1200; i<=2000;i++){
        array.push(i); 
    }
}

primo = (num) =>{
    let c = 0; 
    for(let i=0; i<=2000;i++){
        if(num % i ==0){
            c++; 
        }
    }

    return c; 
}