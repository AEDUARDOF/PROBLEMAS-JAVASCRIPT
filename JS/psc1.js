function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.resul.value = "";
}

function calcular(){
    var Ve1=parseInt(document.getElementById('n1').value);
    var Ve2=parseInt(document.getElementById('n2').value);
    
    if(Ve1 == Ve2){
      var Resulta=Ve1*Ve2;
    }
    else if(Ve1 > Ve2){
      var Resulta=Ve1-Ve2;
    }
    else if(Ve1 < Ve2){
       var Resulta=Ve1+Ve2;
    }
    document.formulario.resul.value =""+Resulta;
}
