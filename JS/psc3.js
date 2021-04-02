function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.hor.value = "";
    document.formulario.pag.value = "";
    document.formulario.suel.value = "";
}
function calcular(){
    var HorasT=parseInt(document.getElementById('ho').value);
    var PagoH=parseInt(document.getElementById('pa').value);
    
    if(HorasT <= 40){
       var PagoT=HorasT*PagoH;
    }
    else{
        if(HorasT > 40){
            var PagoTA=HorasT-40;
            var PagoT= 40*PagoH+(PagoTA*PagoH*2);
        }
        else{
            if(HorasH >48){
                var PagoTB=HorasT-48;
                var PagoT= 40*PagoH+(8*PagoH*2)+(PagoTB*PagoH*3);
            }
        }
    }
    document.formulario.suel.value = ""+PagoT;
}