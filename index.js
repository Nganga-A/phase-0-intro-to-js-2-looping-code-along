// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);
*/

const cards = []; //array to hold the card messages
function writeCards(name) {
        for (let i = 0; i < name.length; i++) {
          const message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
          cards.push(message); //append message at the end
        }
        return cards;
      }
      
function countDown (name) {
    for (let i=10; i>=0; i--) {
        console.log(i);
    }
}
      
      
      
      
      
