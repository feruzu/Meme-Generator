let add = document.querySelector(".add");
let descargar = document.querySelector("#guardar");
let file = document.querySelector("#file");
let crear = document.querySelector(".box");
let meme = document.querySelector('#meme');


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