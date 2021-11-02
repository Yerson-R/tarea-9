var mensaje="";
function recuperarEdad(){
    var edad = document.getElementById("edad").value;
    if (edad < 18){
        mensaje = "Menor de Edad"
    }else{
        mensaje = "Mayor de Edad"
    }
    var contenedor = document.createElement("p");
    contenedor.innerText = mensaje
    document.body.appendChild(contenedor);
}