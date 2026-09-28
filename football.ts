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

let player1: Player = { //creates a player using the Player interface
    id: 1,
    name: "Drake Maye",
    position: Position.QB,
    jerseyNumber: 10
};

console.log("Welcome To the Football Team Manager");

console.log("1. Create Player");
console.log("2. View Roster");
console.log("3. Search Player");
console.log("4. Exit");
console.log(player1)

let choice: string | null = prompt("Choice:");