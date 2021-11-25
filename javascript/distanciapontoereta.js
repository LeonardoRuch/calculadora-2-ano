function calc(){
    var xP = Number(document.getElementById("xP").value);
    var yP = Number(document.getElementById("yP").value);
    var aP = Number(document.getElementById("aP").value);
    var bP = Number(document.getElementById("bP").value);
    var cP = Number(document.getElementById("cP").value);


    var resultado = (aP * xP) + (bP * yP) + cP / Math.sqrt((aP * aP) + (bP * bP))
    if (resultado < 0) {
        var final = (resultado * -1)
    } else {
        var final = resultado
    }

    document.getElementById("display").value = final.toFixed(2);
}

function limpar(){
    document.getElementById("xP").value ="";
    document.getElementById("yP").value ="";
    document.getElementById("aP").value ="";
    document.getElementById("bP").value ="";
    document.getElementById("cP").value ="";
    document.getElementById("display").value ="";
}