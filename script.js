 // Función para solicitar el número y validar el rango
 const solicitarNumero = () => {
  let numero = Number(prompt("Ingrese un número entre 1 y 20:"));
  if (numero < 1 || numero > 20 || isNaN(numero)) {
      document.write("Número fuera del rango");
      return null;
  }
  return numero;
};

// Función para calcular y mostrar las tablas de multiplicar y factoriales
const mostrarResultados = (numero) => {
  if (numero === null) return;

  // Mostrar las tablas de multiplicar del número ingresado hasta el 12
  document.write(`<h2>Tablas de multiplicar del ${numero}</h2>`);
  for (let i = 1; i <= 12; i++) {
      document.write(`<p>${numero} x ${i} = ${numero * i}</p>`);
  }

  // Calcular y mostrar los factoriales
  document.write(`<h2>Factoriales hasta el ${numero}</h2>`);
  for (let i = 1; i <= numero; i++) {
      let factorial = 1;
      for (let j = 1; j <= i; j++) {
          factorial *= j;
      }
      document.write(`<p>Factorial de ${i} es: ${factorial}</p>`);
  }
};

// Solicitar el número y mostrar los resultados
const numero = solicitarNumero();
mostrarResultados(numero);
