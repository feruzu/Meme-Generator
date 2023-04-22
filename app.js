let add = document.querySelector(".add");
let descargar = document.querySelector("#guardar");
let file = document.querySelector("#file");
let crear = document.querySelector(".box");

let canvas = new fabric.Canvas('canvas', {
    width: 500,
    height: 500,
    background: 'fff',
})

file.addEventListener('change', function(){
    let img = file.files[0]
    if(!img){
        return
        }
        let archivo = new FileReader()

        archivo.onload = function(e){
            let meme = archivo.result
        fabric.Image.fromURL(meme, function(img){
                canvas.add(img)
            if(img.width > canvas.width){
                img.scaleToWidth(canvas.width)
            }
            })
            console.log(meme)
    }
    archivo.readAsDataURL(img)
})