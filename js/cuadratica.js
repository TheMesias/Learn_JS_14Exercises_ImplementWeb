const $formulario = document.getElementById("formulario"), 
$a = document.getElementById("a"),
$b = document.getElementById("b"),
$c = document.getElementById("c"), 
$x = document.getElementById("x"), 
$y = document.getElementById("y"); 


$formulario.onsubmit = e => {
    e.preventDefault();
    $x.innerHTML = " "; 
    $y.innerHTML = " "; 
    imprimirT($a.value, $b.value); 
}

ecuacion = (i) => {
    const a = parseInt($a.value); 
    const b = parseInt($b.value); 
    const c = parseInt($c.value); 

    let u = a * (i*i); 
    let d = b * i; 

    return u + d + c;
     
}

ecuaciond = (a,b) => {
    return(-1 * b)/ (2 * a); 
     
}

imprimirT = (a,b) => {
    
    let n = ecuaciond(a,b); 
    for(let i=n-2; i<= n+2; i++){
        $x.innerHTML += `<span> ${i.toFixed(2)} </span>`; 
        let y = ecuacion(i).toFixed(2); 
        
        $y.innerHTML += `<span> ${y} </span>`;
    }
}
