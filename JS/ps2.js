function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var Venta1=parseInt(document.getElementsById('v1').value);
    var Venta2=parseInt(document.getElementsById('v2').value);
    var Venta3=parseInt(document.getElementsById('v3').value);
    var Sueldo=parseInt(document.getElementsById('cantidad').value);
    var Result;
    Result=Venta1+Venta2+Venta3;
    var Com;
    Com=Result*0.1;
    SueldoNeto=Com+Sueldo;

    document.formulario.sueldocom.value = "$"+Com;
    document.formulario.sueldoneto.value = "$"+SueldoNeto;
}

function borrar(){
    document.formulario.sueldoneto.value = "";
    document.formulario.sueldocom.value = "";
    document.formulario.Cantidad.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}

/*var venta = document.formulario.v1.v2.v3.value;
    var result = parseInt(venta);
    var sueldo = document.formulario.cantidad.value;
    var com = parseInt(sueldo);
    var sueldocom = result*0.1;
    var total = sueldocom+com; */