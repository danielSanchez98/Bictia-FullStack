     // Ejercicio #1

    const numerosRequeridos=Number(prompt("Ingrese la cantidad de numeros que quiere ingresar"));
    let numero=0,
        numeros=[];
    let i=0;
    while(i<numerosRequeridos){
        numero=Number(prompt(`Ingrese el numero #${i+1}`));
        if(numero!=0){
            //console.log('Diferente de 0');
            numeros.push(numero);
            
        }
        i++;

    }
    document.write(`Discrimiando los ceros que ha ingresado, estos son los numeros ingresados`)
    for (let i = 0; i < numeros.length; i++) {
        document.write(`<br>${numeros[i]}`);
        
    }
   

      numeros.forEach(function(num){
        console.log(num);
        //document.write(`<br>${num}`);
    });  
     
 