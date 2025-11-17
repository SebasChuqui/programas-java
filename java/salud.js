function presionArterial() {
    let sis = parseFloat(prompt("Presión sistólica en mmHg:"));
    let dia = parseFloat(prompt("Presión diastólica en mmHg:"));
    if (sis < 120 && dia < 80) alert("Normal");
    else if (sis < 130 && dia < 80) alert("Elevada");
    else if (sis < 140 || dia < 90) alert("Hipertensión grado 1");
    else alert("Hipertensión grado 2");
}

function temperaturaPacientes() {
    let n = parseInt(prompt("Número de pacientes. Se registran °C."));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let t = parseFloat(prompt("Temperatura del paciente #" + i + " en °C:"));
        suma += t;
    }
    alert("Promedio: " + (suma / n) + " °C");
}

function pacientesFiebre() {
    let t = parseFloat(prompt("Temperatura en °C (0 para terminar). Se cuentan ≥ 38°C."));
    let contador = 0;
    while (t !== 0) {
        if (t >= 38) contador++;
        t = parseFloat(prompt("Otra temperatura en °C (0 para terminar)."));
    }
    alert("Pacientes con fiebre: " + contador);
}

function triage() {
    let c = parseInt(prompt("Código TRIAGE:\n1: Rojo\n2: Amarillo\n3: Verde\n4: Azul"));
    switch(c) {
        case 1: alert("Triage Rojo"); break;
        case 2: alert("Triage Amarillo"); break;
        case 3: alert("Triage Verde"); break;
        case 4: alert("Triage Azul"); break;
        default: alert("Código inválido");
    }
}

function saturacion() {
    let valor;
    do {
        valor = prompt("Saturación SpO2 en %. Escriba 'no' para terminar.");
        if (valor !== "no") {
            let sp = parseFloat(valor);
            alert("Registrado: " + sp + "%");
        }
    } while (valor !== "no");
}
