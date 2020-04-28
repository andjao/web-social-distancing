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
    document.getElementById(`people`).innerHTML = ``;
    detachment = document.getElementById(`detachment`).value;
    x = document.getElementById(`width`).value;
    y = document.getElementById(`length`).value;
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
<div class='inner' id='p${cont}' onmouseover='neighbors(${cont}, ${x}, ${y}, true)' onmouseout='neighbors(${cont}, ${x}, ${y}, false)' onclick='neighbors(${cont}, ${x}, ${y}, true, true)'>${cont}</div>
</div>`;
        }
        drawing += `</div>`;
    }
    drawing += `</div>`;
    let print = drawing;
    print += `<br><p>Distanciamento Social: ${detachment}</p>`;
    print += `<p>Metros quadrados do estabelecimento: ${meters2}</p>`;
    print += `<p>Quantidade de pessoas permitidas no estabelecimento: ${peoples}</p>`;
    document.getElementById(`result`).innerHTML = print;
}

function neighbors(people, posX, posY, show, print) {
    const n = posY !== 1;
    const w = posX !== 1;
    const e = posX !== peoplesX;
    const s = posY !== peoplesY;
    const nw = n && w;
    const ne = n && e;
    const sw = s && w;
    const se = s && e;
    let title = [
        `A pessoa n° ${people} está na posição: ${posX}-${posY}.`,
        `Está ${detachment}m de distância das pessoas de n° `,
        `Está ${Math.hypot(detachment, detachment).toFixed(2)}m de distância das pessoas de n° `
    ];
    title[3] = '';
    title[4] = '';

    if (nw && show) {
        addClass(`p${people - peoplesX - 1}`, `collateralC`);
        title[4] += `${people - peoplesX - 1}, `;
    } else if (document.getElementById(`p${people - peoplesX - 1}`)) {
        removeClass(`p${people - peoplesX - 1}`, `collateralC`);
    }
    if (n && show) {
        addClass(`p${people - peoplesX}`, `cardinalC`);
        title[3] += `${people - peoplesX}, `;
    } else if (document.getElementById(`p${people - peoplesX}`)) {
        removeClass(`p${people - peoplesX}`, `cardinalC`);
    }
    if (ne && show) {
        addClass(`p${people - peoplesX + 1}`, `collateralC`);
        title[4] += `${people - peoplesX + 1}, `;
    } else if (document.getElementById(`p${people - peoplesX + 1}`)) {
        removeClass(`p${people - peoplesX + 1}`, `collateralC`);
    }
    if (w && show) {
        addClass(`p${people - 1}`, `cardinalC`);
        title[3] += `${people - 1}, `;
    } else if (document.getElementById(`p${people - 1}`)) {
        removeClass(`p${people - 1}`, `cardinalC`);
    }
    show ? addClass(`p${people}`, `peopleC`) : removeClass(`p${people}`, `peopleC`);
    if (e && show) {
        addClass(`p${people + 1}`, `cardinalC`);
        title[3] += `${people + 1}, `;
    } else if (document.getElementById(`p${people + 1}`)) {
        removeClass(`p${people + 1}`, `cardinalC`);
    }
    if (sw && show) {
        addClass(`p${people + peoplesX - 1}`, `collateralC`);
        title[4] += `${people + peoplesX - 1}, `;
    } else if (document.getElementById(`p${people + peoplesX - 1}`)) {
        removeClass(`p${people + peoplesX - 1}`, `collateralC`);
    }
    if (s && show) {
        addClass(`p${people + peoplesX}`, `cardinalC`);
        title[3] += `${people + peoplesX}, `;
    } else if (document.getElementById(`p${people + peoplesX}`)) {
        removeClass(`p${people + peoplesX}`, `cardinalC`);
    }
    if (se && show) {
        addClass(`p${people + peoplesX + 1}`, `collateralC`);
        title[4] += `${people + peoplesX + 1}, `;
    } else if (document.getElementById(`p${people + peoplesX + 1}`)) {
        removeClass(`p${people + peoplesX + 1}`, `collateralC`);
    }

    title[3] = title[3].substr(0, title[3].lastIndexOf(`, `));
    title[4] = title[4].substr(0, title[4].lastIndexOf(`, `));

    if (nw || ne || sw || se) {
        document.getElementById(`p${people}`).title = `${title[0]}\n${title[1]}${title[3]}.\n${title[2]}${title[4]}.`;
    } else if (n || w || e || s) {
        document.getElementById(`p${people}`).title = `${title[0]}\n${title[1]}${title[3]}.`;
    }

    if (print) {
        title[0] = title[0].replace(people, `<b class='peopleFC'>${people}</b>`);
        if (nw || ne || sw || se) {
            document.getElementById(`people`).innerHTML = `${title[0]}<br>${title[1]}<b class='cardinalFC'>${title[3]}</b>.<br>${title[2]}<b class='collateralFC'>${title[4]}</b>.`;
        } else if (n || w || e || s) {
            document.getElementById(`people`).innerHTML = `${title[0]}<br>${title[1]}<b class='cardinalFC'>${title[3]}</b>.`;
        }
    }
}

function addClass(people, classC) {
    document.getElementById(people).classList.add(classC);
}

function removeClass(people, classC) {
    document.getElementById(people).classList.remove(classC);
}