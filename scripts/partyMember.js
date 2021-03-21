class PartyMember extends Person {

    takeDmg(dmg) {
        if (this.alive()) {
            this.currentHP -= dmg;
        }
        if (this.currentHP <= 0) {
            this.alive = false;
            this.currentHP = 0;
        }
        this.HPpercent = this.currentHP / this.totalHP;
        this.HPpercent *= 100;
        this.HPpercent.toFixed(2);
    }


    createMenu() {
        
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
        newBattlePerson.setAttribute("id", "party" + this.id);
        newBattlePerson.setAttribute("class", "party");
        
        const battlePersonName = document.createTextNode(this.name);
        newBattlePerson.appendChild(battlePersonName);

        const partySide = document.getElementById("partySide")

        partySide.appendChild(newBattlePerson);


        // CREATES EVERYTHING IN BOTTOM MENU
        // Create the person element
        const newPerson = document.createElement("div");
        newPerson.setAttribute("id", "person" + this.id);
        newPerson.setAttribute("class", "statusPerson");

        // Create the name and add to the person
        const personNameElement = document.createElement("div");
        personNameElement.setAttribute("class", "name");
        const personName = document.createTextNode(this.name);
        personNameElement.appendChild(personName);
        newPerson.appendChild(personNameElement);


        // HP elements
        const personHPElement = document.createElement("div");
        personHPElement.setAttribute("class", "HP");
        const personHPText = document.createElement("div");
        personHPText.setAttribute("class", "HPtxt");
        const personHPTextInside = document.createTextNode("HP: " + this.currentHP + " / " + this.totalHP);
        personHPText.appendChild(personHPTextInside);
        personHPElement.appendChild(personHPText);
        const personHPBar = document.createElement("div");
        personHPBar.setAttribute("class", "HPbar");
        personHPElement.appendChild(personHPBar);
        newPerson.appendChild(personHPElement);

        // MP elements
        const personMPElement = document.createElement("div");
        personMPElement.setAttribute("class", "MP");
        const personMPText = document.createElement("div");
        personMPText.setAttribute("class", "MPtxt");
        const personMPTextInside = document.createTextNode("MP: " + this.currentMP + " / " + this.totalMP);
        personMPText.appendChild(personMPTextInside);
        personMPElement.appendChild(personMPText);
        const personMPBar = document.createElement("div");
        personMPBar.setAttribute("class", "MPbar");
        personMPElement.appendChild(personMPBar);
        newPerson.appendChild(personMPElement);

        // ATB elements
        const personATBElement = document.createElement("div");
        personATBElement.setAttribute("class", "ATB");
        const personATBText = document.createTextNode("ATB");
        personATBElement.appendChild(personATBText);
        const personATBBar = document.createElement("div");
        personATBBar.setAttribute("class", "ATBbar");
        personATBElement.appendChild(personATBBar);
        newPerson.appendChild(personATBElement);
      
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("statusArea");
        document.getElementById("statusArea").appendChild(newPerson); 
        
        this.HPelement = document.querySelector("#person" + this.id + " .HP .HPbar");
        this.HPelementTxt = document.querySelector("#person" + this.id + " .HP .HPtxt");
        
        this.MPelement = document.querySelector("#person" + this.id + " .MP .MPbar");
        this.MPelementTxt = document.querySelector("#person" + this.id + " .MP .MPtxt");
        
        this.ATBelement = document.querySelector("#person" + this.id + " .ATB .ATBbar");
    }
}