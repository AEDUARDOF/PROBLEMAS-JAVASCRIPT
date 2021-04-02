
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}



function borrar(){
    document.formulario.hembra.value = "";
    document.formulario.macho.value = "";
    document.formulario.phem.value = "";
    document.formulario.pmac.value = "";
}

function calcular(){
    var Muj=parseInt(document.getElementById('hem').value);
    var Hom=parseInt(document.getElementById('mac').value);
    var Sum;
    Sum=Muj+Hom;
    var PMuj;
    PMuj=Muj*100/Sum;
    var PHom;
    PHom=Hom*100/Sum;
    var PHomD;
    PHomD=PHom.toFixed(2);
    var PMujD;
    PMujD=PMuj.toFixed(2);


    document.formulario.phem.value =""+PMujD;
    document.formulario.pmac.value =""+PHomD;
}