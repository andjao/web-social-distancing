let cont;
let detachment;
let x;
let y;
let meters2;
let peoplesX;
let peoplesY;
let peoples

setTimeout(function () {
    // calcular();
}, 0);

function calcular() {
    let cont = 0;
    detachment = document.getElementById('detachment').value;
    x = document.getElementById('width').value;
    y = document.getElementById('length').value;
    meters2 = x * y;
    peoplesX = Math.ceil(x / detachment);
    peoplesY = Math.ceil(y / detachment);
    peoples = peoplesX * peoplesY;
    let drawing = `<div class='grid'>`;
    for (let y = 1; y <= peoplesY; y++) {
        drawing += `<div class='row'>`;
        for (let x = 1; x <= peoplesX; x++) {
            cont++;
            drawing += `<div class="box">
<div class='inner' id='p${cont}' onmouseover='neighbors(${cont}, ${x}, ${y}, true)' onmouseout='neighbors(${cont}, ${x}, ${y}, false)'>${cont}</div>
</div>`;
        }
        drawing += `</div>`;
    }
    drawing += `</div>`;
    let print = drawing;
    print += `<br><p>Distanciamento Social: ${detachment}</p>`;
    print += `<p>Metros quadrados do estabelecimento: ${meters2}</p>`;
    print += `<p>Quantidade de pessoas permitidas no estabelecimento: ${peoples}</p>`;
    document.getElementById('result').innerHTML = print;
}

function neighbors(people, posX, posY, show) {
    const n = posY !== 1;
    const w = posX !== 1;
    const e = posX !== peoplesX;
    const s = posY !== peoplesY;
    const nw = n && w;
    const ne = n && e;
    const sw = s && w;
    const se = s && e;

    if (nw) show ? addClass(`p${people - peoplesX - 1}`, 'collateralC') : removeClass(`p${people - peoplesX - 1}`, 'collateralC');
    if (n) show ? addClass(`p${people - peoplesX}`, 'cardinalC') : removeClass(`p${people - peoplesX}`, 'cardinalC');
    if (ne) show ? addClass(`p${people - peoplesX + 1}`, 'collateralC') : removeClass(`p${people - peoplesX + 1}`, 'collateralC');
    if (w) show ? addClass(`p${people - 1}`, 'cardinalC') : removeClass(`p${people - 1}`, 'cardinalC');
    show ? addClass(`p${people}`, 'peopleC') : removeClass(`p${people}`, 'peopleC');
    if (e) show ? addClass(`p${people + 1}`, 'cardinalC') : removeClass(`p${people + 1}`, 'cardinalC');
    if (sw) show ? addClass(`p${people + peoplesX - 1}`, 'collateralC') : removeClass(`p${people + peoplesX - 1}`, 'collateralC');
    if (s) show ? addClass(`p${people + peoplesX}`, 'cardinalC') : removeClass(`p${people + peoplesX}`, 'cardinalC');
    if (se) show ? addClass(`p${people + peoplesX + 1}`, 'collateralC') : removeClass(`p${people + peoplesX + 1}`, 'collateralC');
}

function addClass(people, classC) {
    document.getElementById(people).classList.add(classC);
}

function removeClass(people, classC) {
    document.getElementById(people).classList.remove(classC);
}