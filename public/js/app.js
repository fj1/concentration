var cards = [
  { 
    "value": "1",
    "imgUrl": "public/images/kitten1.jpg"
  },
  { 
    "value": "2",
    "imgUrl": "public/images/kitten1.jpg"
  },
  { 
    "value": "3",
    "imgUrl": "public/images/kitten2.jpg"
  },
  { 
    "value": "4",
    "imgUrl": "public/images/kitten2.jpg"
  },
  { 
    "value": "5",
    "imgUrl": "public/images/kitten3.jpg"
  },
  { 
    "value": "6",
    "imgUrl": "public/images/kitten3.jpg"
  },
  { 
    "value": "7",
    "imgUrl": "public/images/kitten4.jpg"
  },
  { 
    "value": "8",
    "imgUrl": "public/images/kitten4.jpg"
  },
  { 
    "value": "9",
    "imgUrl": "public/images/kitten5.jpg"
  },
  { 
    "value": "10",
    "imgUrl": "public/images/kitten5.jpg"
  },
  { 
    "value": "11",
    "imgUrl": "public/images/kitten6.jpg"
  },
  { 
    "value": "12",
    "imgUrl": "public/images/kitten6.jpg"
  }
]

// ************ SHUFFLE ALGORITHM ************
// Fisher-Yates shuffle
function shuffle(array) {
  var m = array.length
  var t;
  var i;
  // While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// ************ DEAL CARDS ************
function dealCards() {
  for (var i = 0; i < 12; i++) {
    var pic = cards[i].imgUrl;
    var currentCard = $('.card:eq(' + i + ')');
    currentCard.css("background-image", "url(" + pic + ")");
  }
}

// ************ SHUFFLE BUTTON ************
$('.shuffleButton').click(function() {
  shuffle(cards);
  dealCards();
  gameOn();
});

// ************ GAME PLAY ************
function gameOn() {
  $('.card img').click(function() {
    $(this).fadeOut();
    $(this).parent().addClass('cards-showing');

    if ( $('.cards-showing').length === 2 ) {
      console.log("hey there are two cards showing!");
      compareCards();
    }
  });
}

function compareCards() {
  var c = $('.cards-showing');
  console.log("c is ", c);

  if ( c[0].style.cssText == c[1].style.cssText ) {
    console.log("we have a match!");
  }
  else {
    console.log("no match");
  }
};









