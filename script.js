function calcular() {

    let consumidos =
        Number(document.getElementById("consumidos").value);

    let reciclados =
        Number(document.getElementById("reciclados").value);

    if (consumidos <= 0 || isNaN(consumidos)) {
        document.getElementById("resultado").innerHTML =
        "Digite um valor válido para recursos consumidos.";
        return;
    }

    let indice = (reciclados / consumidos) * 100;

    document.getElementById("resultado").innerHTML =
        "Índice de Sustentabilidade: " +
        indice.toFixed(2) + "%";
}

<script src="script.js"></script>
