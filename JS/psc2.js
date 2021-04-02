function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.numer1.value = "";
    document.formulario.numer2.value = "";
    document.formulario.numer3.value = "";
    document.formulario.resul2.value = "";
}
function calcular(){
    var Ve1=parseInt(document.getElementById('nu1').value);
    var Ve2=parseInt(document.getElementById('nu2').value);
    var Ve3=parseInt(document.getElementById('nu3').value);
    
    if(Ve1 > Ve2 && Ve1> Ve3){
       var Res=Ve1;
    }
    else if(Ve2 > Ve1 && Ve2> Ve3){
       var Res=Ve2;
    }
    else if(Ve3 > Ve1 && Ve3> Ve2){
       var Res=Ve3;
    }
    else if(Ve3 == Ve1 && Ve2 == Ve3 && Ve1 == Ve2){
        var Res="Iguales";
     }
    document.formulario.resul2.value = ""+Res;
}