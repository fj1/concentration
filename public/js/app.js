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

// ************ TIMER ************

var timerID;

function startTimer() {
    var sec = 0;
    // padding the values for expected time output: hh:mm:ss
    // if the value is over 9, it returns the val: ie. val = 19
    // otherwise it returns 0 + value: ie. val = 04
    function pad(val) { 
      return val > 9 ? val : "0" + val; 
    }
    timerID = setInterval(function () {
        $("#seconds").html(pad(sec++ % 60));
        // parseInt parses a string and returns an int
        // the 10 says to use base 10 
        $("#minutes").html(pad(parseInt(sec / 60, 10) % 60));
    }, 1000);
}

var seconds;
var minutes;

function stopTimer() {
  clearInterval(timerID);
  seconds = $('#seconds').text();
  console.log("seconds are", seconds);
  minutes = $('#minutes').text();
  console.log("minutes are ", minutes);
}

$('.startGame').click(function() {
  startTimer();
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
  // populate .cards-showing
  c = $('.cards-showing');

  if ( c[0].style.cssText == c[1].style.cssText ) {
    console.log("we have a match!");
    c.each(function() {
      $(this).addClass('matched-pair');
      if ( $('.matched-pair').length === 12) {
        gameOver();
      }
      $(this).removeClass('cards-showing');
    });
  }
  else {
    console.log("not a match");
    // clear unmatched pair of images
    clearUnmatchedPair();
    // remove 'cards-showing' class
    setTimeout(function() {
      c.each(function() {
        $(this).removeClass('cards-showing');
      });
    }, 2750);
  }
};

function clearUnmatchedPair() {
  setTimeout(function() {
    $('.cards-showing img').fadeIn();
  }, 2500);
}

function gameOver() {
  console.log("you won!");
  stopTimer();
  $('.endGameText').text("Good job! You found all the matching pairs of kittens in " + minutes + " minutes and " + seconds + " seconds!");
  $('#gameOverModal').modal('show');
}

$('.newGameButton').click(function() {
  $('.card').removeClass('matched-pair');
  $('.card').html("<img src='public/images/back.jpg'>");
  shuffle(cards);
  dealCards();
  gameOn();
  startTimer();
});








