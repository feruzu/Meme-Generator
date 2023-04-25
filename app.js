let add = document.querySelector(".add");
let descargar = document.querySelector("#guardar");
let file = document.querySelector("#file");
let crear = document.querySelector(".box");
let meme = document.querySelector('#meme');
let texto = document.querySelector('#texto');


file.addEventListener('change', function(){
    let inputFile = this.files[0];

    if(inputFile){
        const archivo = new FileReader();

        archivo.addEventListener('load', function(){
            meme.setAttribute('src', this.result);
        });

        archivo.readAsDataURL(inputFile);
        crear.style.display = 'block';
    }
 
});


add.addEventListener('click', añadirTexto);

function añadirTexto(){
    console.log(texto.value)

const newElement = document.createElement("div.d");
newElement.innerHTML = `<p class="texto">${texto.value}</p>`;
     
      crear.appendChild(newElement);
    }

