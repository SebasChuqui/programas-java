function calidadAire() {
    let aqi = parseInt(prompt("Valor AQI. El programa clasificará la calidad del aire."));
    if (aqi <= 50) alert("Bueno");
    else if (aqi <= 100) alert("Moderado");
    else if (aqi <= 150) alert("Dañino para grupos sensibles");
    else if (aqi <= 200) alert("Dañino");
    else alert("Muy dañino");
}

function ruidoAmbiental() {
    let n = parseInt(prompt("¿Cuántas mediciones en decibeles (dB) registrará?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let d = parseFloat(prompt("Medición #" + i + " en dB:"));
        suma += d;
    }
    alert("Promedio: " + (suma / n) + " dB");
}

function focosCalor() {
    let t = parseFloat(prompt("Temperatura en °C (0 para terminar). Se contarán las > 45°C."));
    let contador = 0;
    while (t !== 0) {
        if (t > 45) contador++;
        t = parseFloat(prompt("Otra temperatura en °C (0 para terminar)."));
    }
    alert("Focos detectados: " + contador);
}

function tipoResiduo() {
    let c = parseInt(prompt("Ingrese código:\n1: Orgánico\n2: Plástico\n3: Papel/Cartón\n4: Vidrio"));
    switch(c) {
        case 1: alert("Orgánico"); break;
        case 2: alert("Plástico"); break;
        case 3: alert("Papel/Cartón"); break;
        case 4: alert("Vidrio"); break;
        default: alert("Código inválido");
    }
}

function nivelesRio() {
    let valor;
    do {
        valor = prompt("Nivel del río en metros (ej: 2.5). Escriba 'no' para terminar.");
        if (valor !== "no") {
            let nivel = parseFloat(valor);
            if (nivel > 3) alert("Peligro: nivel alto");
            else alert("Nivel normal: " + nivel + " m");
        }
    } while (valor !== "no");
}
