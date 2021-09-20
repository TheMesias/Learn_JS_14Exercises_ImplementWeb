const $formulario = document.getElementById("formulario"), 
$numero = document.getElementById("numero"), 
$rt = document.getElementById("respuesta"); 
let numero;
$formulario.onsubmit = e => {
    e.preventDefault(); 
	$rt.innerHTML = " ";
    numero = parseInt($numero.value); 
    imprimir(); 
}

perfecto = num => {
    let div = 0; 
    for (let i=1; i<num; i++){
		if (num%i==0)
			div +=i;
	}
	if (num==div)
	{
		return "es perfecto";
	}
	else
	{
		return "no es perfecto";
	}
}

capicua = num => {
	let rever = num.split("").reverse().join(""); 
	
	if(rever == $numero.value){
		return `Es capicúa <br> Es palíndromo`
	}else{
		return `Es capicua <br> No es palíndromo`
	}
}

factorial = n => {
    if (n == 0){ 
		return 1; 
	}
	return n * factorial(n-1);
}

factorion = n => {
	let suma = 0;
	while(n > 0){
		suma+= factorial(n%10); 
		n = parseInt(n/10); 
	} 

	if(suma == numero){
		return `Es factorión`; 
	}else{
		return "No es factorión"; 
	}
}

imprimir = () =>{
	$rt.innerHTML += perfecto(numero);
	$rt.innerHTML += `<br> ${capicua($numero.value)}`;
	$rt.innerHTML += `<br> Factorial: ${factorial(numero)}`;
	$rt.innerHTML += `<br> ${factorion(numero)}`;
	$rt.innerHTML += `<br> Cifras: ${$numero.value.length}` 
} 
