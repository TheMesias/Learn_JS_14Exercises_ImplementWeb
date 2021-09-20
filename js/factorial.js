const $formulario = document.getElementById('formulario'), 
$numero = document.getElementById('numero'), 
$respuesta = document.getElementById('respuesta'), 
$formulario2 = document.getElementById('formulario2'), 
$nombre = document.getElementById('nombre'), 
$edad = document.getElementById('edad'),
$fecha = document.getElementById('fecha');

let Anumero = []; 
$formulario.onsubmit = e => {
    e.preventDefault(); 
    const numero = $numero.value;
    Anumero.push(numero); 
    console.log(Anumero)
    factorion();
}

function factorial (n) {
    if (n == 0){ 
		return 1; 
	}
	return n * factorial(n-1);
}

mostrarFactorial = numero => {
    $respuesta.value = factorial(numero);
}

/*
function mouseEnter() {
    $numero.style.backgroundColor = "#FFOOCC";
}

$formulario2.onsubmit = e => {
    e.preventDefault(); 
    alert($fecha)
    
}*/

factorion = () => {
    let n; 
    let suma = 0;
    let fact = 0;  
    for(let i=0; i<Anumero.length;i++){
        n = Anumero[i]; 
        for(let j=0;j<Anumero.length;j++){
            let ni = n.charAt(j); 
            fact = factorial(ni); 
            console.log("fact" + fact)
        }
        suma += fact; 
        console.log("suma" + suma); 
    }
}


