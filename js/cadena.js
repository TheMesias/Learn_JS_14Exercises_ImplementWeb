const $formulario = document.getElementById("formulario"), 
$frase = document.getElementById("frase"), 
$rt = document.getElementById("rt"), 
$rtn = document.getElementById("rtn");  
let sil = []; 
$formulario.onsubmit = e => {
    limpiar();
    e.preventDefault();
    let frase = $frase.value.toUpperCase(); 
    console.log(frase);
    conteo(frase);   
    imprimir(); 
}

conteo = f => {
    let c = 0; 
    let r = " "; 
    for(let i=0; i< f.length; i++){
        let p = f.charAt(i);
        for(let j=0; j<f.length; j++){
            if(p == f.charAt(j) && p!= " "){
                c++;
            }
        }
        silabas(p,c);
        c=0;
    }
}

silabas = (p,c) => {
    if(sil.indexOf(p) === -1 && p !== " "){
        sil.push(p,c); 
    }
}

imprimir = () =>{
    let n=1; 
    for(let i=0; i<sil.length;i+=2){ 
        $rt.innerHTML += `${sil[i]} <br><hr>`; 
        $rtn.innerHTML += `${sil[n]} <br><hr>`; 
        n+=2; 
    }
}

limpiar = () => {
    sil = []; 
    $rt.innerHTML = " "; 
    $rtn.innerHTML = " ";  
}