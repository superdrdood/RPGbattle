let waitingForTarget = false;

class AttackFlow {
    constructor() {
        this.attacker;
        this.target;
        this.attack;
        this.ready = false;
    }
}

let attackFlow = new AttackFlow;

let attackTarget = "";


// I don't really understand this, should probably understand how async functions work at some point!

const delay = ms => new Promise(res => setTimeout(res, ms));
const showDamage = async (person,damage) => {
    document.getElementsByTagName('style')[0].innerHTML = "#battleArea #enemy" + person.id + "::after {content: '" + damage + "';}";
    document.getElementById('enemy' + person.id).classList.add("showDamage");
    await delay(500);
    document.querySelector(".showDamage").classList.remove("showDamage");
  };


// function showDamage(person,damage) {
//     document.getElementsByTagName('style')[0].innerHTML = "#battleArea #enemy" + person.id + "::after {content: '" + damage + "';}";
//     document.getElementById('enemy' + person.id).classList.add("showDamage");
// }







function attack(attacker, target, attackType) {
    console.log(attacker.name + " attacked " + target.name + " with " + attackType);
    attackFlow.ready = false;
    console.log(target);
    target.takeDmg(50);
    showDamage(target,50);
    clearAttackMenu();
}

function attackMenu(person,attackType) {
    attackFlow.attacker = person;
    attackFlow.attack = attackType;
    chooseTarget();
}

function chooseTarget() {
    waitingForTarget = true;
    document.getElementById("mainPage").classList.add("chooseTarget");
}

function clearAttackMenu() { // This removes attack menus and continues to the next person if possible
    document.getElementById("attackMenu").innerHTML = "";
    document.getElementById("mainPage").classList.remove("chooseTarget");
    popupActive = false;
    popup[0].atb = 0;
    popup.splice(0, 1);
}

document.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.className.substring(0,5) == "enemy" && waitingForTarget) {
        console.log(event.target.id.substring(5)); // This gets the id of the enemy
        attackFlow.target = enemies[event.target.id.substring(5)];
        attackFlow.ready = true;
        waitingForTarget = false;
    }
  });


  function processAttack() {
      if (attackFlow.ready) {
          attack(attackFlow.attacker,attackFlow.target,attackFlow.attack);
      }
  }