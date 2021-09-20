const $formulario = document.getElementById("formulario"), 
$img = document.querySelector(".airplane"), 
$min = document.getElementById("minutos"), 
$h = document.getElementById("hora"), 
$seg = document.getElementById("segundos"), 
$oper = document.getElementById("operando"), 
$info = document.getElementById("info"), 
$infoTiempo = document.getElementById("infoHoras"), 
$vuelo = document.getElementById("vuelo"); 
let ht=0, mt=0, st=0; 

$formulario.onsubmit = e => {
    e.preventDefault(); 
    $img.innerHTML=" ";
    const oper = $oper.value; 
    const h = $h.value; 
    const m = $min.value; 
    const s = $seg.value; 
    $info.textContent = vuelo(h,m,s);
    transformacionT(oper);  
    //conversion(ts);
}

transformacionT = (m) => {
   let seg = m * 60; 
   ht = Math.floor(seg/3600); 
   mt = Math.floor((seg/60) % 60); 
   st = seg % 60; 
   $infoTiempo.innerHTML = `El avion tardara    
            <p> - ${ht} Horas </p>
            <p> - ${mt} Minutos </p>
            <p> - ${st} Segundos </p>
        `
}

vuelo = (h,m,s) => {
    /*if(ht == h ){
        if(m<=mt){
            if((h < 1) && (m > 0 && m <= 10)){
                imagen("/img/airport.svg"); 
                return "El avion esta en fase de Despegue"
            }else {
                imagen("/img/airplane.svg"); 
                return "El avion esta volando"
            }

        }
        
    }*/

    if(h == ht && m<= mt){
        imagen("/img/aterrizaje.svg"); 
        return "El avion esta aterrizando"
    }else if((h < 1) && (m > 0 && m <= 10)){
        imagen("/img/airport.svg"); 
        return "El avion esta en fase de Despegue"
    }else{
        imagen("/img/airplane.svg"); 
        return "El avion esta volando"
    }
}


imagen = (ruta) => {
    $img.innerHTML = `<img src=${ruta} alt="" class="air">`; 
}

