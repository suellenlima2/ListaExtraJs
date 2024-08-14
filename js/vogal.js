function verificarVogal() {
    let letra = document.getElementById('letra').value;

    let c = letra.toLowerCase();

    function VOGAL(c) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            return 1;
        } else {
            return 0;
        }
    }

    let resultado = VOGAL(c);
    document.getElementById('resultado').textContent = 
        `Resultado: ${resultado} (${resultado === 1 ? 'Vogal' : 'Não é vogal'})`;
}