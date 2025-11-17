function brilloEstelar() {
    let mag = parseFloat(prompt("Ingrese magnitud aparente (número real). El programa clasificará su brillo."));
    if (mag <= 0) alert("Extremadamente brillante");
    else if (mag <= 2) alert("Muy brillante");
    else if (mag <= 4) alert("Brillante");
    else if (mag <= 6) alert("Débil");
    else alert("No visible");
}

function distanciasPlanetas() {
    let n = parseInt(prompt("¿Cuántas distancias registrará? Ingrese número entero. Se calculará el promedio en millones de km."));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let d = parseFloat(prompt("Distancia #" + i + " en millones de km:"));
        suma += d;
    }
    alert("Promedio: " + (suma / n) + " millones de km");
}

function crateresLunares() {
    let contador = 0;
    let d = parseFloat(prompt("Diámetro del cráter en km (0 para terminar). Se contarán los mayores a 50 km."));
    while (d !== 0) {
        if (d > 50) contador++;
        d = parseFloat(prompt("Ingrese otro diámetro en km (0 para terminar)."));
    }
    alert("Cráteres > 50 km: " + contador);
}

function cuerpoCeleste() {
    let c = parseInt(prompt("Ingrese código:\n1: Estrella\n2: Planeta\n3: Cometa\n4: Asteroide\n5: Galaxia"));
    switch(c) {
        case 1: alert("Estrella"); break;
        case 2: alert("Planeta"); break;
        case 3: alert("Cometa"); break;
        case 4: alert("Asteroide"); break;
        case 5: alert("Galaxia"); break;
        default: alert("Código inválido");
    }
}

function nivelesLuz() {
    let valor;
    do {
        valor = prompt("Nivel de luz en lux (ej: 3.5). Escriba 'no' para terminar.");
        if (valor !== "no") {
            let lux = parseFloat(valor);
            if (lux < 5) alert("Noche profunda");
            else alert("Nivel registrado: " + lux + " lux");
        }
    } while (valor !== "no");
}
