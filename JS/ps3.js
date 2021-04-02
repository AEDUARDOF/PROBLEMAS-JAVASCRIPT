function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.pagofinal.value = "";
    document.formulario.valor.value = "";
}

function calcular(){
    var CompraT=parseInt(document.getElementById('compratotal').value);
    var Des3;
    Des3=CompraT*0.15;
    CompraDe=CompraT-Des3;
    var CompraDeD;
    CompraDeD=CompraDe.toFixed(2);

    document.formulario.pagofinal.value ="$"+CompraDeD;
}