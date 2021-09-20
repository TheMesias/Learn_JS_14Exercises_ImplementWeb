import {sextnum} from './moduleSextoNum.js';

const $formulario = document.getElementById("formulario"), 
$numerouno = document.getElementById("numerouno"), 
$numerodos = document.getElementById("numerodos"), 
$numerotres = document.getElementById("numerotres"), 
$numerocuatro = document.getElementById("numerocuatro"), 
$numerocinco = document.getElementById("numerocinco"),  
$numeroseis = document.getElementById("numeroseis");  


$formulario.onsubmit = e => {
    e.preventDefault(); 
    $numeroseis.value = " ";
    sextnum($numerouno,$numerodos,$numerotres,$numerocuatro,$numerocinco,$numeroseis); 
}

