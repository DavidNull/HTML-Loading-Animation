const codeDisplay = document.querySelector('.code-display');
const dotsElement = document.querySelector('.loading-text .dots');
let tabTitle = "Cargando"; 
let dotCount = 0;


// Loading...
function animateDots() {
  dotCount = (dotCount + 1) % 4;
  dotsElement.textContent = '.'.repeat(dotCount);
  document.title = tabTitle + dotsElement.textContent;
}
setInterval(animateDots, 500);

const codeLines = [
  "<!DOCTYPE html>",
  "<html lang='es'>",
  "<head>",
  "  <meta charset='UTF-8'>",
  "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
  "  <title>Mi Página</title>",
  "</head>",
  "<body>",
  "  <h1>¡Bienvenidos a mi página!</h1>",
  "  <p>Entrando...</p>",
  "<!-- Creado por David-->",
  "</body>",
  "</html>"
];

let currentLine = 0;
let currentChar = 0;

function typeCode() {
  if (currentLine < codeLines.length) {
    const line = codeLines[currentLine];
    codeDisplay.innerHTML += line[currentChar] || '';
    currentChar++;

    if (currentChar > line.length) {
      codeDisplay.innerHTML += '\n';
      currentLine++;
      currentChar = 0;
    }

    setTimeout(typeCode, 30);
  } else {
    setTimeout(() => {
      window.location.href = 'index2.html';
    }, 500);
  }
}

typeCode();
