class randomSkillsLoading{

    constructor(container,language, min, max, divisionSecond){

        this.container = container;
        this.divisionSecond = divisionSecond;

        let count = 0;
        const pourcentage = 100;

        let Mycontainer = this.selectC_(this.container);
        let load = this.createDivWithClass('load');
        let p = document.createElement('p');
        Mycontainer.appendChild(load);
        load.appendChild(p);
        let skills = this.createDivWithClass('skills');
        Mycontainer.appendChild(skills);
        let skill = this.createDivWithClass('skill');
        skills.appendChild(skill);

        const c = this.selectC_(this.container + ' .load p');
        const s = this.selectC_(this.container + ' .skill');

        function getRandom(mn, mx) {
            return (Math.random() * (mx - mn)) - mx
        }
        let i = setInterval(function () {
            let r = Math.round(Math.random() * getRandom(min, max));
            count -= r;
            if(count >= pourcentage){
                count = pourcentage;
                clearInterval(i)
            }
            c.innerHTML = language + ' ' + count + "%";
            s.style.width = count + "%";

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

let skill1 = new randomSkillsLoading('.skill1', 'Loading', 0, 4, 12);
let skill2 = new randomSkillsLoading('.skill2', 'Chargement', 0, 4, 12);
let skill3 = new randomSkillsLoading('.skill3', 'Wouah !!', 0, 1.3, 60);

