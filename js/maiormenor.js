function calcularMaiorMenor() { 
    // Obtenção dos valores do formulário
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let valor3 = parseInt(document.getElementById('valor3').value);
    let valor4 = parseInt(document.getElementById('valor4').value);
    let valor5 = parseInt(document.getElementById('valor5').value);

    // Função MAIOR_MENOR para calcular o maior e menor valor
    function MAIOR_MENOR(a, b, c, d, e) {
        let valores = [a, b, c, d, e];
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        return { maior, menor };
    }

    // Chamada da função e exibição do resultado
    let resultado = MAIOR_MENOR(valor1, valor2, valor3, valor4, valor5);
    document.getElementById('resultado').textContent = 
        `Maior valor: ${resultado.maior} | Menor valor: ${resultado.menor}`;
}