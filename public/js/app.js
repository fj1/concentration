// create a filename for an image, given a Card obj
function cardName() {
  return "kitten" + this.num + ".jpg";
}

// constructor for Card objects
function Card(num) {
  this.num = num;
}
