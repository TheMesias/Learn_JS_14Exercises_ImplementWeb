const $formulario = document.getElementById("formulario"), 
$altura = document.getElementById("altura"),
$sombra = document.getElementById("sombra"), 
$respuesta = document.getElementById("respuesta"); 

let grados, minutos, segundos; 

$formulario.onsubmit = e => {
    e.preventDefault(); 
    const altura = $altura.value; 
    const sombra = $sombra.value; 
    const d = calculopitagoras(altura, sombra)
    const rt1 = calculoangulo(d, sombra); 
    separar(rt1);
    $respuesta.innerHTML = `Grados: ${grados} <br> 
                            Minutos: ${minutos} <br> 
                            Segundos: ${segundos} <br>
                            Ángulo Incidencia: ${rt1} &#176;`
}

calculopitagoras  = (a,s) => {
    const d = Math.sqrt((Math.pow(a,2) + Math.pow(s,2)));
    return d.toFixed(4);  
}

calculoangulo = (d,s) => {
    const asen = Math.asin(s/d); 
    return asen  * 180; 
}

separar = a => {
    grados = Math.floor(a); 

    let tiempo = a - grados;
    let tiempo2 = tiempo * 60; 
    minutos = Math.floor(tiempo2);
    tiempo2 = tiempo2 - minutos; 
    segundos = tiempo2 * 60; 
    segundos = segundos.toFixed(); 
}

