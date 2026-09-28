//Joshua Dalton
//IT 505
//Unit 4

enum Position { //stores postitons
    QB,
    RB,
    WR,
    TE,
    OL,
    DL,
    LB,
    CB,
    S,
    K
}

interface Player { //defines player info
    readonly id: number;
    name: string;
    position: Position;
    jerseyNumber: number;
    rating?: number; //optional
}


console.log("Welcome To the Football Team Manager");

console.log("1. Create Player");
console.log("2. View Roster");
console.log("3. Search Player");
console.log("4. Exit");

let choice: string | null = prompt("Choice:");

if (choice === "1") {
    let name: string | null = prompt("Enter player name:");
    let jerseyInput: string | null = prompt("Enter jersey number:");

    let jerseyNumber: number = Number(jerseyInput); //jersey number from string to number

    console.log(`Input type: ${typeof jerseyInput}`);
    console.log(`Converted type: ${typeof jerseyNumber}`);

    console.log("\nSelect a position:");
    console.log("1. QB");
    console.log("2. RB");
    console.log("3. WR");
    console.log("4. TE");
    console.log("5. OL");
    console.log("6. DL");
    console.log("7. LB");
    console.log("8. CB");
    console.log("9. S");
    console.log("10. K");

    let positionChoice: string | null = prompt("Position:");

    let playerPosition: Position = Position.QB;

    if (positionChoice === "1") {
        playerPosition = Position.QB;
    }
    else if (positionChoice === "2") {
        playerPosition = Position.RB;
    }
    else if (positionChoice === "3") {
        playerPosition = Position.WR;
    }

    //shows player info
    console.log("\nPlayer Created:");
    console.log(`Player Name: ${name}`);
    console.log(`Jersey Number: ${jerseyNumber}`);
    console.log(`Position: ${Position[playerPosition]}`);
}