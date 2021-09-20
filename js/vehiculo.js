const $formulario = document.getElementById("formulario"), 
$numero = document.getElementById("numero"), 
$respuesta = document.getElementById("respuesta"); 

let iva; 
$formulario.onsubmit = e => {
    e.preventDefault();
    const km = $numero.value;  
    const pago = costo(km);
    const iva = pago * 0.2; 
    const lq = pago - iva; 
    $respuesta.innerHTML = `<span> Pago: </span> $${lq} <br>
                            <span> Iva: </span> $${iva} <br>
                            <span> Total: </span> $${pago}`
}

costo = km => {
    if(km <= 300){
        return 300000; 
    }else if( km > 300 && km <= 1000 ){
        let cobro = km - 300; 
        let rt = cobro * 15000; 
        return rt + 300000; 
    }else if(km > 1000){
        let cobro = km - 1000; 
        let rt = cobro * 10000; 
        return rt + 300000; 
    }
}