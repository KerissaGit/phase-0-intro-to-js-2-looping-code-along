// Code your solutions in this file

for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++
  }

  return gifts;
}

wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"]
const gift = "surprise"

function writeCards(cards, gift) {
    let messages = []; 
    for (let i = 0; i < cards.length; i++) {
      let message = `Thank you, ${cards[i]}, for the wonderful ${gift} gift!`;
      messages.push(message);
    }
    return messages;
  }
  

function countDown(n){
    while(n >= 0) {
        console.log(n);
        n--;
    }
}

