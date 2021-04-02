function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.sueldoneto.value = "";
    document.formulario.sueldocom.value = "";
    document.formulario.valor.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}

function calcular(){
    var Ve1=parseInt(document.getElementById('v1').value);
    var Ve2=parseInt(document.getElementById('v2').value);
    var Ve3=parseInt(document.getElementById('v3').value);
    var Sue=parseInt(document.getElementById('sueldon').value);
    var Sum;
    Sum=Ve1+Ve2+Ve3;
    var Comis;
    Comis=Sum*0.1;
    Net=Comis+Sue;
    var NetD;
    NetD=Net.toFixed(2);
    var ComisD;
    ComisD=Comis.toFixed(2);

    document.formulario.sueldoneto.value ="$"+NetD;
    document.formulario.sueldocom.value ="$"+ComisD;
}
