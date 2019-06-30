class randomSkillsLoading{

    constructor(container,language, min, max, divisionSecond, pourcentage, random, transition){

        this.container = container;
        this.divisionSecond = divisionSecond;

        let count = 0;

        let Mycontainer = this.selectC_(this.container);
        let load = this.createDivWithClass('load');
        let p = document.createElement('span');
        Mycontainer.appendChild(load);
        load.appendChild(p);
        let skills = this.createDivWithClass('skills_');
        Mycontainer.appendChild(skills);
        let skill = this.createDivWithClass('skill_');
        skills.appendChild(skill);

        const c = this.selectC_(this.container + ' .load span');
        const s = this.selectC_(this.container + ' .skill_');

        function getRandom(mn, mx) {
            return (Math.random() * (mx - mn)) - mx
        }
        let i = setInterval(function () {
            if(random === 'true'){
                let r = Math.round(Math.random() * getRandom(min, max));
                count -= r;
            } else {
                count++
            }
            if(count >= pourcentage){
                count = pourcentage;
                clearInterval(i)
            }if(count === pourcentage){
                c.innerHTML = count + '%';
            } else {
                c.innerHTML = language + ' ' + count + "%";
            }
            s.style.width = count + "%";
            if(transition != null){
                s.style.transition = "width "+ transition +"s linear"
            }


        }, 1000/this.divisionSecond);

    }
    createDivWithClass(maClass){
        let p = document.createElement('div');
        p.setAttribute('class', maClass);
        return p
    }
    selectC_(maClass){
        return document.querySelector(maClass);
    }
}
//example 
let HTML = new randomSkillsLoading(
    '.skill1',
    'Loading',
    0,
    4,
    50 / vitesse,
    50,
    'false',
    transition),

