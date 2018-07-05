var cardNums = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cardSuits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
var cardList = [];
var cardColor = "";

for(x=0;x<cardNums.length;x++){
  for(i=0;i<cardSuits.length;i++){
    if(cardSuits[i] === "&hearts;" || cardSuits[i] === "&diams;"){
      cardColor = "red";
    } else{
      cardColor = "black";
    }
    cardList.push("<span style='color: " + cardColor + "'> " + cardNums[x] + cardSuits[i] +  "</span>");
  }
}

document.getElementById('cardsds').innerHTML = cardList;


function shuffleDeck(){
  document.getElementById('cardsds').innerHTML = "";
  for(x=cardList.length -1;x>0;x--){
    var randomNum = Math.floor(Math.random() * x);
    var placeholder = cardList[x];
    cardList[x] = cardList[randomNum];
    cardList[randomNum] = placeholder;
  }
  document.getElementById('cardsds').innerHTML = cardList;
}
