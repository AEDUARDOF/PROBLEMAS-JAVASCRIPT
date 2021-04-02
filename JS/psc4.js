function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.sala.value = "";
    document.formulario.aempre.value = "";
    document.formulario.sueln.value = "";
    document.formulario.uti.value = "";
}
function calcular(){
    var SalaMe=parseInt(document.getElementById('salam').value);
    var AEmpres=parseInt(document.getElementById('aem').value);
    
    if(AEmpres < 1){
        var Utilida=SalaMe*0.05;
     }
     else{
         if(AEmpres >= 1 && AEmpres<2){
            var Utilida=SalaMe*0.07;
         }
         else{
            if(AEmpres >= 2 && AEmpres<5){
                var Utilida=SalaMe*0.10;
             }
             else{
                if(AEmpres >= 5 && AEmpres<10){
                    var Utilida=SalaMe*0.15;
                 }
                 else{
                    if(AEmpres > 10){
                        var Utilida=SalaMe*0.20;
                     }
                 }
             }
         }
     }
     document.formulario.uti.value = ""+Utilida;
 }