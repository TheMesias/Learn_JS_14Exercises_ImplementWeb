const $formulario = document.getElementById("formulario"), 
$fecha = document.getElementById("fecha"),
$img = document.querySelector(".imagen"), 
$rt = document.getElementById("rt"); 


$formulario.onsubmit = e => {
    e.preventDefault(); 
    $img.innerHTML = " ";
    $rt.textContent = " "; 
    const fecha = $fecha.value;
    const ed = edad(fecha);
    const dias = ed * 365.25; 
    imagen(ed); 
    
}

edad = ed => {
    let hoy = new Date(); 
    let cumple = new Date(ed);  
    
    let anio = hoy.getFullYear() - cumple.getFullYear();
    let m = hoy.getMonth() - cumple.getMonth(); 
    
    if(hoy < cumple)
    {
        alert("Ingrese una fecha valida"); 
        return; 
    }else if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
        anio--;
    }
    
    let milisegundosDias = 24*60*60*1000; 
    let miliTrancurridos = Math.abs(cumple.getTime() - hoy.getTime()); 

    let diasT = Math.round(miliTrancurridos / milisegundosDias);

    var meses = hoy.getMonth() - cumple.getMonth() + (12 * (hoy.getFullYear() - cumple.getFullYear())); 

    $rt.innerHTML = `Usted tiene ${anio} años <br> 
                     Ha vìvido ${diasT} Dias <br>
                     Ha vìvido ${meses} Meses`;
    return anio; 
}

imagen = ed =>{
    if(ed >= 0 && ed <= 5){
        ruta("/img/bebe.svg"); 
    }else if(ed >= 6 && ed <= 17){
        ruta("/img/nino.svg");
    }else if(ed >= 18 && ed <= 59){
        ruta("/img/joven.svg");
    }else if(ed >= 60){
        ruta("/img/abuelo.svg");
    }
}

ruta = ruta => {
    $img.innerHTML = `<img src=${ruta} alt="" class="air">`; 
}