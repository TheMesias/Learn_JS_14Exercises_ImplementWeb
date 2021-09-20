const $formulario = document.getElementById("formulario"),
$rt = document.getElementById("rt"); 

let c = ["1","2", "3", "4", "5"];
let t = [];  
let u = []; 
let c1=0; 
let c2=0; 
let c3=0; 
let c4=0;

$formulario.onsubmit = e => {
    e.preventDefault(); 
  
    combinaciones("",c,4,3);
    

    for(let i=0; i<t.length;i++){
        let cadena = t[i]; 
        for(let j=0;j<3;j++){
            let numero = cadena.charAt(j); 
            if(numero == 1){
                c1++; 
            }else if(numero == 2){
                c2++; 
            }else if(numero == 3){
                c3++; 
            }else if(numero == 4){
                c4++; 
            }
        }

        if(c1 <= 1 && c2 <= 1 && c3 <= 1 && c4 <= 1 ){
             u.push(cadena);
        }

        c1=0; 
        c2=0; 
        c3=0;
        c4=0; 
    }

    imprimir();

}

imprimir = () => {
    for(let i=0; i<u.length; i++){
        $rt.innerHTML += `${u[i]} <br><hr>`;
    }
}


combinaciones = (aux,c,n,r) => {
    let res = aux; 
    if(r>0){
        for(let i=0; i<n; i++){
            combinaciones(aux + c[i],c,n,r-1); 
        }
    }else{
        t.push(res); 
    }
}
/*

imprimir = () => {
    for(let i=0; i<2;i++){
        let num = t[i]; 
        for(let j=0;j<3;j++){
            
        }
        console.log(c1,c2,c3,c4, num); 
        c1 =0; 
        c2 =0; 
        c3 =0; 
        c4 =0; 
    }
}

opcion = (j) => {
    if(t[j].indexOf("1") ===0){
        c1++; 
    }else if(t[j].indexOf("2") ===0){
        c2++; 
    }
}

add = () => {
    if(c1==1&&c2==1&&c3==1&&c4==1){
        u.push(num); 
    }
}

/*
imprimir = () => {
    for(let i=0; i<t.length;i++){
        let num = t[i]; 
        for(let j=0;j<3;j++){
            p = parseInt(num.charAt(j));  
            if(t[i].indexOf(p) === -1){
                console.log(num);
                if(u.indexOf(num) === -1){
                    u.push(num); 
                } 
            }
        }
        console.log("/");
    }
}
*/