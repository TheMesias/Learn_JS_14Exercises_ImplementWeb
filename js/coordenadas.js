const $formulario = document.getElementById("formulario"), 
$corx = document.getElementById("coordenadax"), 
$cory = document.getElementById("coordenaday"), 
$divcoruno = document.querySelector(".coruno"),
$divcordos = document.querySelector(".cordos"),
$divcortres = document.querySelector(".cortres"),
$divcorcuatro = document.querySelector(".corcuatro"),
$h2 = document.getElementById("h2"), 
$rt = document.getElementById("respuesta"); 


$formulario.onsubmit = e => {
    e.preventDefault(); 
    limpiar();
    
    const corx = parseFloat($corx.value); 
    const cory = parseFloat($cory.value);

    if(corx == NaN || cory == NaN){
        alert("Escriba un número válido");
    }else{
        calculo(corx,cory); 
        
    }


}


calculo = (x,y) => {
    if (x > 0 && y > 0)
    {
        divpintar("uno");
    }
    else if (x < 0 && y > 0)
    {
        divpintar("dos");
    }
    else if (x < 0 && y < 0)
    {
        divpintar("tres");
    }
    else if (x > 0 && y < 0)
    {
        divpintar("cuatro");
    }
    else if (x == 0 && y == 0)
    {
        divpintar("origen");
    }
    else if(x != 0 && y ==0)
    {
        divpintar("ejex");
    }else if(x == 0 && y !=0){
        divpintar("ejey"); 
    }
    $rt.textContent = "Distancia: " + calculoDistancia(x, y); 
    
}

divpintar = (tipo) => {
    
    switch(tipo){
        case "uno": 
            $divcoruno.classList.add("cuno");
            rth2("Uno");
        break; 
        case "dos": 
            $divcordos.classList.add("cuno");
            rth2("Dos");
        break; 
        case "tres": 
            $divcortres.classList.add("cuno");
            rth2("Tres");
        break; 
        case "cuatro": 
            $divcorcuatro.classList.add("cuno");
            rth2("Cuatro");
        break; 
        case "ejex":
            $divcoruno.classList.add("eje");  
            $divcordos.classList.add("eje");  
            $h2.innerHTML = `Su coordenada se encuentra en el eje <span>X</span>`
        break; 
        case "ejey":
            $divcoruno.classList.add("ejedos");  
            $divcorcuatro.classList.add("ejedos");  
            $h2.innerHTML = `Su coordenada se encuentra en el eje <span>Y</span>`
        break; 
        case "origen":
            $divcoruno.classList.add("ejedos");  
            $divcorcuatro.classList.add("ejedos");
            $divcoruno.classList.add("eje");  
            $divcordos.classList.add("eje");   
            $h2.innerHTML = `Su coordenada se encuentra en el <span>origen</span>`
        break; 
    }
}

rth2 = (rt) => {
    $h2.innerHTML = `Su coordenada se encuentra en el Cuadrante <span> ${rt} </span>`
    
}


limpiar = () => {
    $h2.textContent = " ";
    $rt.textContent = " ";
    $divcoruno.classList.remove("cuno", "eje", "ejedos");
    $divcordos.classList.remove("cuno", "eje", "ejedos");
    $divcortres.classList.remove("cuno", "eje", "ejedos");
    $divcorcuatro.classList.remove("cuno", "eje", "ejedos");
}

calculoDistancia = (x, y) => {
    return Math.sqrt(Math.pow(x, 2)) + Math.sqrt(Math.pow(y, 2));
}