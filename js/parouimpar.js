function verificarParouImpar(){
    let valor = parseInt(document.getElementById("valor").value);

    function PAR_IMPAR(valor){
        if(valor % 2 === 0){
            return true;
        }else {
            return false;
        }
    }

    let resultado = PAR_IMPAR(valor);
    document.getElementById('resultado').textContent = 
        `Resultado: ${resultado} (${resultado === true ? 'Par' : 'Ímpar'})`;
}