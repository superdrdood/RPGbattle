let person1;
let guy1HPpercent;
let partySize = 3;
let party = new Array;
let popup = new Array;
let popupActive = false;


let enemies = new Array;

let atbMax = 1000;

// Everyone currently has the same attacks, can change that easy enough!
let attacks = ['Attack', 'Magic', 'Item', 'Defend'];
let attacks2 = ['Attack', 'Run'];
let attacks3 = ['Attack', 'Magic', 'Item', 'Defend', 'Awesome'];

function setup() {
  guy1TotalHP = 245;
  guy1currentHP = guy1TotalHP;
  //for (i = 0; i < partySize; i++) {
    let i = 0;
    party.push(new PartyMember("Guy", 240, 100, 3, attacks, i));
    i++;
    party.push(new PartyMember("Guy2", 240, 100, 3, attacks2, i));
    i++;
    party.push(new PartyMember("Guy3", 240, 100, 3, attacks3, i));
    i = 0;
    enemies.push(new EnemyMember("Enemy Guy", 240, 100, 3, attacks, i));
    i++;   
    enemies.push(new EnemyMember("Enemy Man", 240, 100, 3, attacks, i));
  //}
}

function draw() {
  for (let i = 0; i < party.length; i++) {
    party[i].update();
  }
  

  if (popup.length > 0 && !popupActive) {
    //console.log(popup[0].name);
    popupActive = true;

    // Creates the menu 
    popup[0].createMenu();
  }

  processAttack();
}


// This clears the attackmenu when you click on it!
// I think turning this guy into his own function, and then do stuff with it!
document.addEventListener('click', function(event) {
  if (event.target.className == "attackMenuOption") {
    attackMenu(popup[0],event.target.id);
  }
});