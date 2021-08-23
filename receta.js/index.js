var recupera ={
    medico:"",
    cedulaprofe:"",
    paciente:"",
    fechareceta:"",
    fechaexp:"",
    medicamentosentre:"",
    
    
};
   function actualizar(){
    console.log("Se llamo a actualizar");
    recupera.medico =document.getElementById("medico").value;
    recupera.cedulaprofe=document.getElementById("cedulaprofe").value;
    recupera.paciente=document.getElementById("paciente").value;
    recupera.fechareceta=document.getElementById("fechareceta").value;
    recupera.fechaexp=document.getElementById("fechaexp").value;
    recupera.medicamentosentre=document.getElementById("medicamentosentre").value;
     
 

    actualizarFicha();


}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML=recupera.medico;
    document.getElementById("cedulas").innerHTML=recupera.cedulaprofe;
    document.getElementById("nombre-paciente").innerHTML=recupera.paciente;
    document.getElementById("fechat").innerHTML=recupera.fechareceta;
    document.getElementById("total").innerHTML=recupera.fechaexp; 
    document.getElementById("descrip").innerHTML=recupera.medicamentosentre; 

 
   
 
    
}
 


var btnCambiar=document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click", ()=>{
    document.querySelector(".btn-success").innerHTML="agregar";
 
}



); 

function limpiar() {
  
  document.getElementById("medico").value = "";
  document.getElementById("cedulaprofe").value="";
  document.getElementById("paciente").value="";
  document.getElementById("fechareceta").value="";
  document.getElementById("fechaexp").value="";
  document.getElementById("medicamentosentre").value="";
}

