function verificarOrdem(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);

    function ORDEM(valor1, valor2, valor3){
        let numeros = [valor1, valor2, valor3];
        numeros.sort(function(x, y) { return x - y; });
        return numeros;
    }

    let resultado = ORDEM(valor1, valor2, valor3);
    document.getElementById('resultado').textContent = `Números ordenados: ${resultado.join(', ')}`;
}