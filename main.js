const preguntaNombre = prompt("Hola Bienvenido al IPCH, ¿Cómo es tu Nombre?");
document.getElementById("nombre").innerHTML =
  "Hola Alumno(a): " + preguntaNombre;

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    let n5 = parseFloat(document.getElementById("n5").value);
    let n6 = parseFloat(document.getElementById("n6").value);

    var promediar = (n2 + n3 + n4 + n5) / 4;
    if (n6 >= 6) {
      promediar = (n2 + n3 + n4 + 0) / 4;
    }

    document.getElementById("result").innerHTML =
      "Tu Nota Final es: " + promediar.toFixed(2);
  });

let nombreDelAlumno = [preguntaNombre];
localStorage.setItem("Alumno:", nombreDelAlumno);

console.log (localStorage.getItem("Alumno:"));