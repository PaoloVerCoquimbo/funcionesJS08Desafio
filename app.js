   /*-----------------------------------------
            Cambia el contenido
    de la etiqueta h1 con document.querySelector
    y asigna el siguiente texto: "Hora del Desafío".
   -------------------------------------------*/
   
   let titulo = document.querySelector(`h1`);
let cambioTitulo = `Hora del Desafío`;

titulo.innerHTML =  `${cambioTitulo}`;

/*-------------------------------------------

Crea una función que muestre en la consola el mensaje 
"El botón fue clicado"
siempre que se presione el botón "Console".

------------------------------------------*/

      
    function botonClicadoConsole()
    {

 console.log(`Botón fue Clicado`);

    }       


    /*---------------------------------------

    Crea una función que se ejecute cuando 
    se haga clic en el botón "prompt", 
    preguntando el nombre de una ciudad de Brasil.
     Luego, muestra una alerta con el mensaje concatenando 
     la respuesta con el texto: "Estuve en {ciudad} y 
     me acordé de ti".


    -----------------------------------------*/
    
function nombreDeCuidad() {
  const ciudades = [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Recife",
    "Curitiba",
    "Belo Horizonte"
  ];

  // Crear el mensaje con la lista de ciudades
  // solo puse algunas no me las se todas pero si
  //  quiere le puedo poner todas aunque me tome mas tiempo 
  let mensaje = "Elige una ciudad de Brasil:\n";
  for (let i = 0; i < ciudades.length; i++) {
    mensaje += `${i + 1}. ${ciudades[i]}\n`;
  }

  // Pedir al usuario que elija una ciudad escribiendo el número
  let opcion = prompt(mensaje);
  let indice = parseInt(opcion) - 1;

  // Verificar si la opción es válida
  if (indice >= 0 && indice < ciudades.length) {
    alert(`Estuve en ${ciudades[indice]} y me acordé de ti`);
  } else {
    alert("Opción no válida. Intenta de nuevo.");
  }
}

    /*---------------------------------------

Crea una función que muestre una alerta con el mensaje:
 "Yo amo JS" siempre que se presione el botón "Alerta".


    -----------------------------------------*/
function alerttaAmoJS()
{
alert(`Yo amo JS`);

}
    
    /*---------------------------------------

        Al hacer clic en el botón "suma", pide 2 números y
         muestra el resultado de la suma en una alerta.

    -----------------------------------------*/

    function realizarSuma() {
      // Pedir los dos números al usuario
      let num1 = prompt("Ingresa el primer número:");
      let num2 = prompt("Ingresa el segundo número:");

      // Convertirlos a números reales
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Verificar si los valores son números válidos
      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa solo números válidos.");
      } else {
        let suma = num1 + num2;
        alert("La suma es: " + suma);
      }
    }