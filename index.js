// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} */

/* const gifts =["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrap ${gifts[i]} and added a bowl!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts); */


function writeCards(stringName, eventName) {
    let result =[];
    for (let i = 0; i < stringName.length; i++) {
        result.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return result;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return number;
} 

countDown(10);


