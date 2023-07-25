document.addEventListener("DOMContentLoaded", function() {
let add = document.querySelector(".add");
let file = document.querySelector("#file");
let crear = document.querySelector(".box");
let borrar = document.querySelector("#borrar");
let meme = document.querySelector('#meme');



file.addEventListener("change", function () {
  let inputFile = this.files[0];

  if (inputFile) {
    const archivo = new FileReader();

    archivo.addEventListener("load", function () {
      meme.setAttribute("src", this.result);
    });

    archivo.readAsDataURL(inputFile);
    crear.style.display = "block";
  }
});

add.addEventListener("click", añadirTexto);


function añadirTexto() {
  const texto = document.getElementById("texto").value;
  const newElement = document.createElement("div");
  newElement.innerHTML = `<p class="texto">${texto}</p>`;
  newElement.classList.add("texto-agregado");
  const divTexto = document.querySelector(".div-texto");
  divTexto.appendChild(newElement);
  borrar.style.display = 'block';

  document.getElementById("texto").value = "";
  
}

guardar.onclick = guardarImg;

function guardarImg() {
  html2canvas(crear).then(canvas => {
    const link = document.createElement("a");
    link.download = "imagen.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}


borrar.onclick = borrarMeme;

function borrarMeme() {
  const elementosTextoAgregados = document.querySelectorAll(".texto-agregado");
  for (const elemento of elementosTextoAgregados) {
    elemento.remove(); 
  }
  meme.removeAttribute("src"); 
  crear.style.display = 'none';
  borrar.style.display = 'none';

  document.getElementById("texto").value = "";

  file.value = null;
}
});