const $grabar = document.getElementById("grabar"),
$detener = document.getElementById("detener"), 
$txt = document.getElementById("texto"), 
$repro = document.getElementById("repro"), 
$img = document.getElementById("imagen"); 


let recognition = new webkitSpeechRecognition(); 
recognition.lang = 'es-ES'; 
recognition.continuous = true; 
recognition.interimResults = false; 

recognition.onresult = (event) => {
    const results = event.results; 
    const frase = results[results.length - 1][0].transcript; 
    $txt.value += frase; 
}

$grabar.addEventListener('click', () => {
    $img.innerHTML = `<img src="/img/record.svg" alt="" srcset="">`
    recognition.start(); 
}); 

$detener.addEventListener('click', () => {
    $img.innerHTML = `<img src="/img/pause.svg" alt="" srcset="">`
    recognition.abort(); 
}); 

$repro.addEventListener('click', () => {
    $img.innerHTML = `<img src="/img/talk.svg" alt="" srcset="">`
    leerTexto($txt.value)
})

function leerTexto (texto) {
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = texto; 
    speech.volume = 1; 
    speech.rate = .8; 
    speech.pitch = 1; 

    window.speechSynthesis.speak(speech)
}