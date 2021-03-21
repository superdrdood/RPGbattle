class Person {
    constructor(name, hp, mp, speed, attacks, id) {
        // Create all of the persons variables!
        this.name = name;
        this.totalHP = hp;
        this.currentHP = this.totalHP;
        this.totalMP = mp;
        this.currentMP = this.totalMP;
        this.atb = Math.random() * 400;
        this.speed = speed;
        this.id = id;
        this.addElement();
        this.attacks = attacks;
        // console.log(Math.random() * 500);
    }

    drainHP() { // This function drains the HP of the person, just for testing I suppose!
        if (this.alive()) {
            this.currentHP -= 1;
            this.HPpercent = this.currentHP / this.totalHP;
            this.HPpercent *= 100;
            this.HPpercent.toFixed(2);
        }
    }

    alive() {
        if (this.currentHP <= 0) {
            this.currentHP = 0;
            return false;
        } else {
            return true;
        }
    }

    takeMagic(mana) {
        this.currentMP -= mana;

        if (this.currentMP <= 0) {
            this.currentMP = 0;
        }


        this.MPpercent = this.currentMP / this.totalMP;
        this.MPpercent *= 100;
        this.MPpercent.toFixed(2);
    }

    update() { // This updates the visual elements hopefully!
        //console.log(this.HPelement);

        if (!this.atbFull()) {
            this.atb += this.speed;

            this.ATBpercent = this.atb / atbMax;
            this.ATBpercent *= 100;

            if (this.atbFull()) {
                this.chooseMove();
            }
        }
        
        this.HPelement.style.background = "linear-gradient(to right,rgb(139, 255, 71) " + this.HPpercent + "%,rgb(255, 51, 0) " + this.HPpercent + "%)";
        this.HPelementTxt.innerHTML = "HP: " + this.currentHP + " / " + this.totalHP;

        this.MPelement.style.background = "linear-gradient(to right,rgb(71, 203, 255) " + this.MPpercent + "%,rgb(255, 51, 0) " + this.MPpercent + "%)";
        this.MPelementTxt.innerHTML = "MP: " + this.currentMP + " / " + this.totalMP;
        
        this.ATBelement.style.background = "linear-gradient(to right,rgb(212, 71, 255) " + this.ATBpercent + "%,#aaaaaa " + this.ATBpercent + "%)";
    }


    atbFull() {
        if (this.atb >= atbMax) {
            this.atb = atbMax;
            return true;
        } else {
            return false;
        }
    }


    chooseMove() {
        popup.push(this);
    }






}