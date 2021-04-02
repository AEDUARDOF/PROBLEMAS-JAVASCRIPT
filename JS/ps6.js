function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.nombre.value = "";
    document.formulario.aactual.value = "";
    document.formulario.anacimiento.value = "";
    document.formulario.eda.value = "";
}

function calcular(){
    var nombre=document.getElementById("nom").value;
    var AActu=parseInt(document.getElementById('act').value);
    var ANaci=parseInt(document.getElementById('nac').value);
    var Res;
    Res=AActu-ANaci;
    var ResD;
    ResD=Res.toFixed(0);
   
    if(AActu === ANaci){
        alert("Solo numeros que tengan logica");
        return false;
    }
    else if(AActu <= 2020 || ANaci > 1900){
        alert("O no existes o estas muerto");
        return false;
    }
    else{
        document.formulario.usu.value =""+nombre;
        document.formulario.eda.value =""+ResD+" años";
    }
}