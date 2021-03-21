class EnemyMember extends Person {
    // PUT ALL ENEMY LOGIC IN HERE!

    takeDmg(dmg) {
        if (this.alive()) {
            this.currentHP -= dmg;
        }
        if (this.currentHP <= 0) {
            this.alive = false;
            this.currentHP = 0;
            this.removeEnemy();
            return;
        }
        this.HPpercent = this.currentHP / this.totalHP;
        this.HPpercent *= 100;
        this.HPpercent.toFixed(2);

        let healthElement = document.querySelector("#enemy" + this.id + " .currentHP");
        healthElement.innerHTML = this.currentHP;
    }

    
    removeEnemy() {
        let enemyElement = document.querySelector("#enemy" + this.id);
        enemyElement.remove();
    }


    createMenu() {

        console.log(this.attacks);
        
        let attackMenu = document.createElement("div");
        attackMenu.setAttribute("id", "menu");
        attackMenu.setAttribute("class", "attackMenuPerson" + this.id);
        let attackMenuName = document.createElement("div");
        attackMenuName.setAttribute("class", "attackMenuPersonName");
        let name = document.createTextNode(this.name);
        attackMenuName.appendChild(name);
        attackMenu.appendChild(attackMenuName);

        for (let i = 0; i < this.attacks.length; i++) {
            let option = document.createElement("div");
            option.setAttribute("id", this.attacks[i]);
            option.setAttribute("class", "attackMenuOption");
            let text = document.createTextNode(this.attacks[i]);
            option.appendChild(text);
            attackMenu.appendChild(option);
        }
        document.getElementById("attackMenu").appendChild(attackMenu);
    }

    addElement() {
        // CREATES EVERYTHING IN BATTLE AREA

        const newBattlePerson = document.createElement("div");
        newBattlePerson.setAttribute("id", "enemy" + this.id);
        newBattlePerson.setAttribute("class", "enemy");
        
        // const battlePersonName = document.createTextNode(this.name);
        // const battlePersonHP = document.createTextNode(this.currentHP + "/" + this.totalHP);
        // newBattlePerson.appendChild(battlePersonName);
        newBattlePerson.innerHTML = this.name + "<br><span class='currentHP'>" + this.currentHP + "</span>/" + this.totalHP;

        const partySide = document.getElementById("enemySide");

        partySide.appendChild(newBattlePerson);

    }

}