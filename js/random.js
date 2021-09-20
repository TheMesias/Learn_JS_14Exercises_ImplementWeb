const $btn = document.getElementById('btn'), 
$out = document.getElementById('outputtxt'); 

let numero = [Math.floor(Math.random() * 100)]; 

$btn.addEventListener('click', function (){
    let input = document.getElementById("input").value; 
 
    if(input == numero){
        $out.innerHTML = `Acertaste el numero es: ${numero}`; 
    }else if(input < numero){
        $out.innerHTML = `El numer que ingresaste es inferior a la respuesta`;
    }

    if(input>numero){
        $out.innerHTML = `El numer que ingresaste es mayor a la respuesta`;
    }
})