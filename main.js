const preguntaNombre = prompt("Hola Bienvenido al IPCH, ¿Cómo es tu Nombre?");
document.getElementById("nombre").innerHTML =
  "Hola Alumno(a): " + preguntaNombre;

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);
    var n6 = parseFloat(document.getElementById("n6").value);

    var promediar = (n2 + n3 + n4 + n5) / 4;
    if (n6 >= 6) {
      promediar = (n2 + n3 + n4 + 0) / 4;
    }

    document.getElementById("result").innerHTML =
      "Tu Nota Final es: " + promediar.toFixed(2);
  });
