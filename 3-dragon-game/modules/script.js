/** Dragon Role Play Game
 * Date30/12/2024
 * Author: Yoandy Doble Herrera
 */

let xp = 0
let health = 100
let gold = 50
let currentWeaponIndex = 0
let fighting
let monsterHealth
let inventory = ["stick"]

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterName = document.querySelector("#monsterName")
const monsterHealthText = document.querySelector("#monsterHealth")
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sign that says "Store".',
    },
    {
        name: "store",
        "button text": [
            "Buy 10 health (10 gold)",
            "Buy weapon (30 gold)",
            "Go to town square",
        ],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store.",
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave.",
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster.",
    },
    {
        name: "kill monster",
        "button text": [
            "Go to town square",
            "Go to town square",
            "Go to town square",
        ],
        "button functions": [goTown, goTown, easterEgg],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;",
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
]
const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 },
]

const monsters = [
    { name: "slime", level: 2, health: 15 },
    { name: "fanged beast", level: 8, health: 60 },
    { name: "dragon", level: 20, health: 300 },
]

// initialize buttons
button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

/**
 * Actualiza el texto y los botones de la interfaz
 * @param {object} location
 */
function update(location) {
    monsterStats.style.display = "none"
    button1.innerText = location["button text"][0]
    button2.innerText = location["button text"][1]
    button3.innerText = location["button text"][2]
    button1.onclick = location["button functions"][0]
    button2.onclick = location["button functions"][1]
    button3.onclick = location["button functions"][2]
    text.innerHTML = location.text
}

/**
 * Retorna al player a la Ciudad
 */
function goTown() {
    update(locations[0])
}

/**
 * Retorna al player a la Tienda
 */
function goStore() {
    update(locations[1])
}

/**
 * Retorna al player a la Cueva.
 */
function goCave() {
    update(locations[2])
}

/**
 * Comprar salud por 10 de oro
 */
function buyHealth() {
    if (gold >= 10) {
        gold -= 10
        health += 10
        goldText.innerText = gold.toString()
        healthText.innerText = health.toString()
        text.innerText = `Health increased by 10.`
    } else {
        text.innerText = "You do not have enough gold to buy health."
    }
}

/**
 * Comprar arma por 30 de oro
 */
function buyWeapon() {
    if (currentWeaponIndex < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30
            currentWeaponIndex++
            goldText.innerText = gold
            let newWeapon = weapons[currentWeaponIndex].name
            text.innerText = `You now have a ${newWeapon}.`
            inventory.push(newWeapon)
            text.innerText += " In your inventory you have: " + inventory
        } else {
            text.innerText = "You do not have enough gold to buy a weapon."
        }
    } else {
        text.innerText = "You already have the most powerful weapon!"
        button2.innerText = "Sell weapon for 15 gold"
        button2.onclick = sellWeapon
    }
}

/**
 * Vender las armas viejas por 15 de oro
 */
function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15
        goldText.innerText = gold
        let currentWeapon = inventory.shift()
        text.innerText = "You sold a " + currentWeapon + "."
        text.innerText += " In your inventory you have: " + inventory
    } else {
        text.innerText = "Don't sell your only weapon!"
    }
}

/**
 * Fight vs Slime
 */
function fightSlime() {
    fighting = 0
    goFight()
}

/**
 * Fight vs Beast
 */
function fightBeast() {
    fighting = 1
    goFight()
}

/**
 * Player vs Dragon
 */
function fightDragon() {
    fighting = 2
    goFight()
}

/**
 * Enter in battle
 */
function goFight() {
    update(locations[3])
    monsterHealth = monsters[fighting].health
    monsterStats.style.display = "block"
    monsterName.innerText = monsters[fighting].name
    monsterHealthText.innerText = monsterHealth
}

/**
 * Attack function
 */
function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks."
    text.innerText +=
        " You attack it with your " + weapons[currentWeaponIndex].name + "."
    health -= getMonsterAttackValue(monsters[fighting].level)
    if (isMonsterHit()) {
        monsterHealth -=
            weapons[currentWeaponIndex].power +
            Math.floor(Math.random() * xp) +
            1
    } else {
        text.innerText += " You miss."
    }
    healthText.innerText = health
    monsterHealthText.innerText = monsterHealth
    if (health <= 0) {
        lose()
    } else if (monsterHealth <= 0) {
        defeatMonster()
        if (fighting === 2) {
            winGame()
        } else {
            defeatMonster()
        }
    }
    if (Math.random() <= 0.1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks."
        currentWeaponIndex--
    }
}

/**
 * Random monster hit
 * @returns Return true if monster hit
 */
function isMonsterHit() {
    return Math.random() > 0.2 || health < 20
}

/**
 * Monster hit
 * @param {number} level Monster level
 * @returns Return amount of damage
 */
function getMonsterAttackValue(level) {
    const hit = level * 5 - Math.floor(Math.random() - xp)
    console.log(hit)
    return hit
}

/**
 * Easter Egg win function
 */
function easterEgg() {
    update(locations[7])
}

/**
 * Choose a number2 or 8
 * @param {number} guess Number 2 or 8
 */
function pick(guess) {
    const numbers = []
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11))
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n"
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n"
    }
    if (numbers.includes(guess)) {
        text.innerText += "Right! You win 20 gold!"
        gold += 20
        goldText.innerText = gold
    } else {
        if (health <= 0) {
            lose()
        } else {
            text.innerText += "Wrong! You lose 10 health!"
            health -= 10
            healthText.innerText = health
        }
    }
}

/**
 * Choose number 2
 */
function pickTwo() {
    pick(2)
}

/**
 * Choose number 8
 */
function pickEight() {
    pick(8)
}

/**
 * Dodge function
 */
function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name
}

/**
 * Lose battle health <= 0
 */
function lose() {
    update(locations[5])
}

/**
 * Win battle
 */
function winGame() {
    update(locations[6])
}

/**
 * Defeat monster monster health <= 0
 */
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level
    goldText.innerText = gold
    xpText.innerText = xp
    update(locations[4])
}

/**
 * Start over
 */
function restart() {
    xp = 0
    health = 100
    gold = 50
    currentWeaponIndex = 0
    inventory = ["stick"]
    xpText.innerText = xp
    healthText.innerText = health
    goldText.innerText = gold
    goTown()
}