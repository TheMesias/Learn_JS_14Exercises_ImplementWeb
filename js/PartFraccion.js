const $formulario = document.getElementById("formulario"), 
$respuesta = document.getElementById("respuesta"), 
$numerador = document.getElementById("numerador"), 
$denominador = document.getElementById("denominador"), 
$numero = document.getElementById("numero"); 

$formulario.onsubmit = e => {
    e.preventDefault(); 
   
    const numerador = parseInt($numerador.value); 
    const denominador = parseInt($denominador.value); 
    const numero = parseFloat($numero.value); 
    $respuesta.textContent = `La fracción del número ${numero} es ${calculo(numerador,denominador,numero)}`; 

    
}

calculo = (nr, dr, n) => {
    let rt; 

    rt = (nr * n) / dr; 

    return rt; 
}
