function selectC_(maClass){
    return document.querySelector(maClass);
}
function getRandom(min, max) {
    return (Math.random() * (max - min)) - max
}

const pourcentage = 100;
const c = selectC_('.load p');
const s = selectC_('.skill');
const language = 'Chargement ';
const min = 0;
const max = 4;
const divisionSecond = 12;
let count = 0;

let p = setInterval(function () {
    const r = Math.round(Math.random() * getRandom(min, max));
    count -= r;
    if(count >= pourcentage){
        count = pourcentage;
        clearInterval(p)
    }
    c.innerHTML = language + count + "%";
    s.style.width = count + "%";
}, 1000/divisionSecond);