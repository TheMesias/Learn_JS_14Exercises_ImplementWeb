const $form = document.getElementById("formulario"), 
    $num1 = document.getElementById("numerou"), 
    $num2 = document.getElementById("numerod"), 
    $num3 = document.getElementById("numerot"),
    $h2 = document.getElementById("h2"), 
    $rt = document.getElementById("respuesta");  


$form.onsubmit = e => {
    e.preventDefault(); 
    const num1 = parseInt($num1.value);  
    const num2 = parseInt($num2.value);  
    const num3 = parseInt($num3.value); 
    const rt = datos(num1,num2,num3); 
    $h2.innerHTML = `El numero mayor es: `;
    $rt.textContent = rt; 
}

function datos(n1,n2,n3) {
    return (n1>n2)&&(n1>n2) ? n1 
    : (n2>n1)&&(n2>n3) ? n2 
    : n3 
}