function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function borrar(){
    document.formulario.cparcial1.value = "";
    document.formulario.cparcial2.value = "";
    document.formulario.cparcial3.value = "";
    document.formulario.cexamenfinal.value = "";
    document.formulario.ctrabajofinal.value = "";
    document.formulario.calificacionfinal.value = "";
}

function calcular(){
    var Par1=parseInt(document.getElementById('cp1').value);
    var Par2=parseInt(document.getElementById('cp2').value);
    var Par3=parseInt(document.getElementById('cp3').value);
    var Exam=parseInt(document.getElementById('cef').value);
    var Trabaj=parseInt(document.getElementById('ctf').value);
    var Sum;
    Sum=Par1+Par2+Par3; 
    var Prom;
    Prom=Sum/3;
    var AProm;
    AProm=Prom*0.55;
    var AExam;
    AExam=Exam*0.30;
    var ATrabaj;
    ATrabaj=Trabaj*0.15;
    Cali=AProm+AExam+ATrabaj;
    var CaliD;
    CaliD=Cali.toFixed(1);


    if(Par1 > 10){
        alert("Solo numeros menores o iguales a 10");
        return false;
    }
    else if(Par2 > 10){
        alert("Solo numeros menores o iguales a 10");
        return false;
    }
    else if(Par3 > 10){
        alert("Solo numeros menores o iguales a 10");
        return false;
    }
    else if(Exam > 10){
        alert("Solo numeros menores o iguales a 10");
        return false;
    }
    else if(Trabaj > 10){
        alert("Solo numeros menores o iguales a 10");
        return false;
    }
    else{
        document.formulario.calificacionfinal.value =""+CaliD;
    }
}
