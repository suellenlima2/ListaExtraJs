function verificarLimites() {
    let li = parseInt(document.getElementById('li').value);
    let ls = parseInt(document.getElementById('ls').value);

    function LIMITES(li, ls) {
        let numerosPares = [];
        let soma = 0;

        for (let i = li + 1; i < ls; i++) {
            if (i % 2 === 0) {
                numerosPares.push(i);
                soma += i;
            }
        }

        return { numerosPares, soma };
    }

    let resultado = LIMITES(li, ls);
    document.getElementById('resultado').innerHTML = 
        `Números pares: ${resultado.numerosPares.join(', ')}<br>` +
        `Somatório: ${resultado.soma}`;
}