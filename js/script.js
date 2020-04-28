let detachment;
let width;
let length;
let meters2;
let peoples;
let cont = 0;

setTimeout(function () {
    calcular();
}, 0);

function calcular() {
    detachment = document.getElementById('detachment').value;
    width = document.getElementById('width').value;
    length = document.getElementById('length').value;
    meters2 = width * length;
    peoples = Math.ceil(width / detachment) * Math.ceil(length / detachment);
    let print = '';
    let drawing = `<div class='drawing'>`;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < length; j++) {
            if ((i === 0 || i % detachment === 0) && j % detachment === 0) {
                cont++;
                drawing += `<div class='people' id='people${cont}'>${cont}</div>`;
            }
        }
    }
    drawing += `</div>`;
    print += drawing;
    print += `<br><p>Distanciamento Social: ${detachment}</p>`;
    print += `<p>Metros quadrados do estabelecimento: ${meters2}</p>`;
    print += `<p>Quantidade de pessoas permitidas no estabelecimento: ${peoples}</p>`;
    document.body.innerHTML += print;
}