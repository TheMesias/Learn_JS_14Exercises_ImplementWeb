export const sextnum = ($numerouno,$numerodos,$numerotres, $numerocuatro, $numerocinco, $numeroseis) => {
    let cadena = [$numerouno.value, $numerodos.value, $numerotres.value, $numerocuatro.value, $numerocinco.value]
    for(let i=0; i<cadena.length;i++){ 
        $numeroseis.value += cadena[i].substr(i,1);
    } 
}

