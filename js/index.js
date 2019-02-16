var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('Add your guess between 1 to 6');

if (parseInt(guess) === randomNumber){
  document.write("<p class='top'>There you go, you found your love <i class='em em-heart'></i><i class='em em-heart'></i></p>");
}else{
  document.write("<p class='bottom'>Sorry, try hard to find your love </p>");
}
