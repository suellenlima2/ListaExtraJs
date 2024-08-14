function verificarPouN(){
    let valor = parseInt(document.getElementById("valor").value);

    function POSITIVO_NEGATIVO(valor){
        if(valor > 0){
            return true;
        }else {
            return false;
        }
    }

    let resultado = POSITIVO_NEGATIVO(valor);
    document.getElementById('resultado').textContent = 
        `Resultado: ${resultado} (${resultado === true ? 'Positivo' : 'Negativo'})`;
}