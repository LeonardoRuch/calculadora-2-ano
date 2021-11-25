function limpar(){
    document.getElementById("xP").value ="";
    document.getElementById("yP").value ="";
    document.getElementById("eP").value ="";
    document.getElementById("display").value ="";
}

function calc(){
    var xP = Number(document.getElementById("xP").value);
    var yP = Number(document.getElementById("yP").value);
    var eP = Number(document.getElementById("eP").value);

    var resposta = (eP * xP) - yP

    document.getElementById("display").value = resposta.toFixed(2);
}