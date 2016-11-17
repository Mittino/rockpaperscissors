
'use strict';

$(document).ready(function() {
  //  $('.tooltipped').tooltip({delay: 50});

// var personChoice =
var computerChoice;

var computerGen = function() {
  var choice = [ "rock","paper", "scissors"];
  var computer = Math.floor(Math.random() * choice.length);
  computerChoice = computer;
  return computerChoice;
};

console.log(computerGen());

($("#rock")).click(function() {
  computerGen();
  if (computerChoice == 0) {

  Materialize.toast('You have a tie!', 4000);

} else if (computerChoice == 1) {

  Materialize.toast('Computer wins!', 4000);

} else if (computerChoice == 2) {

  Materialize.toast('You win!', 4000);
}

});

($("#scissors")).click(function() {
  computerGen();
  if (computerChoice == 2) {

  Materialize.toast('You have a tie!', 4000);

} else if (computerChoice == 0) {

  Materialize.toast('Computer wins!', 4000);

} else if (computerChoice == 1) {

  Materialize.toast('You win!', 4000);
}


});

($("#paper")).click(function() {
  computerGen();
  if (computerChoice == 1) {

  Materialize.toast('You have a tie!', 4000);

} else if (computerChoice == 2) {

  Materialize.toast('Computer wins!', 4000);

} else if (computerChoice == 0) {

  Materialize.toast('You win!', 4000);
}

});

});
