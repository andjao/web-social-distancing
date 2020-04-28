let detachment;
let width;
let length;
let meters2;
let peoplesW;
let peoplesL;
let peoples
let cont = 0;

setTimeout(function () {
    calcular();
}, 0);

function calcular() {
    detachment = document.getElementById('detachment').value;
    width = document.getElementById('width').value;
    length = document.getElementById('length').value;
    meters2 = width * length;
    peoplesW = Math.ceil(width / detachment);
    peoplesL = Math.ceil(length / detachment);
    peoples = peoplesW * peoplesL;
    let drawing = `<div class='grid'>`;
    for (let x = 1; x <= peoplesW; x++) {
        drawing += `<div class='row'>`;
        for (let y = 1; y <= peoplesL; y++) {
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
    document.body.innerHTML += print;
}

function neighbors(people, posX, posY, show) {
    const top = posX !== 1;
    const left = posY !== 1;
    const right = posY !== peoplesW;
    const bottom = posX !== peoplesL;
    const topLeft = top && left;
    const topRight = top && right;
    const bottomLeft = bottom && left;
    const bottomRight = bottom && right;

    if (topLeft) show ? addClass(`p${people - peoplesL - 1}`, 'collateralC') : removeClass(`p${people - peoplesL - 1}`, 'collateralC');
    if (top) show ? addClass(`p${people - peoplesL}`, 'cardinalC') : removeClass(`p${people - peoplesL}`, 'cardinalC');
    if (topRight) show ? addClass(`p${people - peoplesL + 1}`, 'collateralC') : removeClass(`p${people - peoplesL + 1}`, 'collateralC');
    if (left) show ? addClass(`p${people - 1}`, 'cardinalC') : removeClass(`p${people - 1}`, 'cardinalC');
    show ? addClass(`p${people}`, 'peopleC') : removeClass(`p${people}`, 'peopleC');
    if (right) show ? addClass(`p${people + 1}`, 'cardinalC') : removeClass(`p${people + 1}`, 'cardinalC');
    if (bottomLeft) show ? addClass(`p${people + peoplesL - 1}`, 'collateralC') : removeClass(`p${people + peoplesL - 1}`, 'collateralC');
    if (bottom) show ? addClass(`p${people + peoplesL}`, 'cardinalC') : removeClass(`p${people + peoplesL}`, 'cardinalC');
    if (bottomRight) show ? addClass(`p${people + peoplesL + 1}`, 'collateralC') : removeClass(`p${people + peoplesL + 1}`, 'collateralC');
}

function addClass(people, classC) {
    document.getElementById(people).classList.add(classC);
}

function removeClass(people, classC) {
    document.getElementById(people).classList.remove(classC);
}