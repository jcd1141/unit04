//Joshua Dalton
//IT 505
//Unit 3

console.log("This is a madlib generator");
console.log("Select a story!");

console.log("1. The Snail's Tale")
console.log("2. The Neighbor Next Door");
console.log("3. Presidential Speech")

let user = prompt("Choice:"); //Choose story

//word prompts
let name = prompt("Enter a name:")?.trim(); //Trims whitespace
let place1 = prompt("Enter a place:")?.trim();
let place2 = prompt("Enter another place:")?.trim();
let adjective = prompt("Enter an adjective:")?.trim();
let noun = prompt("Enter a noun:")?.trim();
let verb = prompt("Enter a verb:")?.trim();
let verbWithIng = prompt("Enter a verb ending in -ing:")?.trim();

//Stories are template literals, gets rid of abudant concatenation
let story1 = `Once a snail by the name of ${name} decided it was time for a change. 
In the middle of ${place1}, he stood, eager to hit the ground ${verbWithIng}.
His snail life bored him, his shell had become ${adjective}, and his old mushroom home
was beginning to look like a ${noun}. "Enough of this!" he cried. "I am going to ${verb} to
a new life in ${place2}!`;

let story2 = `I have a strange neighbor. The only thing I really know about Mr.${name} is his
${adjective} obsession with ${noun}s. His yard is absolutely full of them. Worse yet, I've only
really seen Mr.${name} once when he was ${verbWithIng} through my backyard! Last I heard he's in
${place1} collecting more ${noun}s as we speak. I hope he takes a vacation far far away from here,
maybe in ${place2} so I can get to the bottom of what this mans true motives are.`;

let story3 = `To my fellow Americans: I, President ${name} make a promise to you. I promise to provide
${adjective} ${noun}s to all. I promise to move the Whitehouse to ${place1}, where we will ${verb} to
as one, to signify a new beginning of this country. I will also be making ${place2} our greatest ally,
as they continue ${verbWithIng} towards my vision. Thank you!`

console.log("\nThe Mad Lib:");

//Shows story based on user input
if(user == 1){
    console.log(story1);

    let searchWord = prompt("Enter a word to search for:");
    if(story1.indexOf(searchWord) == -1){ //if word not found, returns -1. Prints word not found.
        console.log("Word not found.")
    }
    else{
        console.log(`First Index occurrence: ${story1.indexOf(searchWord)}`);
        console.log(`Last Index occurrence: ${story1.lastIndexOf(searchWord)}`);
    }
    
}
else if(user ==2){
    console.log(story2);

    let searchWord = prompt("Enter a word to search for:");
    if(story2.indexOf(searchWord) == -1){
        console.log("Word not found.")
    }
    else{
        console.log(`First Index occurrence: ${story2.indexOf(searchWord)}`);
        console.log(`Last Index occurrence: ${story2.lastIndexOf(searchWord)}`);
    }
}
else if(user == 3){
    console.log(story3)

    let searchWord = prompt("Enter a word to search for:");
    if(story3.indexOf(searchWord) == -1){
        console.log("Word not found.")
    }
    else{
        console.log(`First Index occurrence: ${story3.indexOf(searchWord)}`);
        console.log(`Last Index occurrence: ${story3.lastIndexOf(searchWord)}`);
    }
}
else{
    console.log("Invalid"); //If user enters invalid option
}
