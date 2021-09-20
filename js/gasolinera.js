const $formulario = document.getElementById("formulario"), 
$litrosd = document.getElementById("ltd"), 
$vdespachado = document.getElementById("despacho"), 
$csuper = document.getElementById("csuper"),
$cextra = document.getElementById("cextra"),
$cdiesel = document.getElementById("cdiesel"), 
$vsuper = document.getElementById("vsuper"),
$vextra = document.getElementById("vextra"),
$vdiesel = document.getElementById("vdiesel"), 
$litrosv = document.getElementById("vender"), 
$vmdespacho = document.getElementById("vmdespacho");

let vd = 0; 
let total = 0;
let gas = 50; 
let m=0, c=0; 
let s=0,e=0,d=0;
let carro; 

$formulario.onsubmit = e => {
    e.preventDefault(); 

    //validar
    if(document.querySelector('input[name="gas"]:checked') && ($litrosv.value <= gas)){
        vd++; 
        $litrosd.value = gas;
        $vdespachado.value = vd; 
        ventaG(gas)
        document.getElementById("dinero").value = "$ " + total ; 
    }else{
        alert("Incorrecto");
        return;
    }
}

ventaG = g => {
    if($csuper.checked){
        s += parseInt($litrosv.value); 
        gas -= $litrosv.value; 
        $litrosd.value = gas; 
        $vsuper.value = s + "L"; 
        total += parseInt($litrosv.value) * 1.25;
        mayor(parseInt($litrosv.value)) 
    }else if($cextra.checked){
        e += parseInt($litrosv.value); 
        gas -= $litrosv.value; 
        $litrosd.value = gas;
        $vextra.value = e + "L"; 
        total += parseInt($litrosv.value) * 1.25;
        mayor(parseInt($litrosv.value))
    }else if($cdiesel.checked){
        d += parseInt($litrosv.value); 
        gas -= $litrosv.value; 
        $litrosd.value = gas; 
        $vdiesel.value  = d + "L"; 
        total += parseInt($litrosv.value) * 1.25;
        mayor(parseInt($litrosv.value))
    }
}

mayor = n => {
    console.log(n);
    console.log(m);
    if(n > m){
        m=n; 
        c=vd; 
        $vmdespacho.value = `Carro:${c} Compro:${m}L`;
    }
}
