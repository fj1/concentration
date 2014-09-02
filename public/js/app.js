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
    // currentCard.html("<img src='" + pic + "'>");
    currentCard.css("background-image", "url(" + pic + ")");
  }
}

// ************ SHUFFLE BUTTON ************
$('.shuffleButton').click(function() {
  shuffle(cards);
  dealCards();
  // play game
  gameOn();
});

// ************ GAME PLAY ************
function gameOn() {
  // var cardsShowing;

  $('.card img').click(function() {
    $(this).fadeOut();
    $(this).addClass('cards-showing');

    if ( $('.cards-showing').length === 2 ) {
      console.log("hey there are two cards showing!");
      compareCards();
    }

    // cardsShowing++;
    // // console.log("after click, cardsShowing is ", cardsShowing);
    // if (cardsShowing === 2) {
    //   console.log("hey there are two cards showing!");
    //   compareCards();
    // }
  });
}

function compareCards() {
  // what if, instead of looking for display:none
  // i add a class to the element when it is clicked
  // and then i only have to find 2 instances of that class?

  
}









