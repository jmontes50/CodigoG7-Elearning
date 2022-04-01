let contador = 1;
/**
 while(condicional){
	 mientras la condicional sea verdadera
	 se ejecutará el código dentro del while
 }
 */
/** 
while (contador <= 15) {
    // cualquier cantidad de codigo
    console.log(contador <= 15);
    console.log(contador);
    //OJO:Necesariamente, actualizar el valor a evaluar para que no vaya al infinito
    //contador vas a cambiar tu valor actual y aumentará en uno
    contador = contador + 1;
}

*/

do {
    console.log(`El contador es ${contador}`);
    contador = contador + 1;
} while (contador <= 0);
