   // Ejercicio #2
 
    const cadenaRequerida=Number(prompt("Ingrese la cantidad de datos que quiere ingresar"));
    let i=0;
    let dato=null,
        datoAux=null,
        datoChar=[],
        datoNumber=[],
        datos=[];

    while(i<cadenaRequerida){
        dato=prompt(`Ingrese el dato #${i+1}`);
        datoAux=Number(dato);
        if(isNaN(datoAux)){
            console.log("no es numero", dato);
            datoChar.push(dato[0]);            
            
        }else{
            console.log("es numero", datoAux);
            datoNumber.push(datoAux);            
        }
        i++;

    }
    datoChar.sort();
    datoNumber.sort();
    datos=datoChar.concat(datoNumber);

    for (let i = 0; i < datos.length; i++) {
        document.write(`<br>${datos[i]}`);
        
    }

    datos.forEach(function(data){
        console.log(data);
    }) 

    // FIN EJERCICIO #2