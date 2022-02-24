function solicitudServidor(consulta,callback){
    setTimeout(function() {
        var respuesta = consulta + " esta lleno!"
        callback(respuesta)
    }, 15000);
    
}
function answer(result){
    console.log("respuesta del servidor: " + result)
} 
solicitudServidor("la peticion ",answer); 