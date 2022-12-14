const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

const users = document.getElementById("result-user-stat");
const computers = document.getElementById("result-comp-stat");
const winners = document.getElementById("result-final-stat");

let spanTagOne = document.createElement("span");
spanTagOne.setAttribute("id", "user");
users.appendChild(spanTagOne);

let spanTagTwo = document.createElement("span");
spanTagTwo.setAttribute("id", "com");
computers.appendChild(spanTagTwo);

let spanTagThree = document.createElement("span");
spanTagThree.setAttribute("id", "win");
winners.appendChild(spanTagThree);
// console.log(winners)

const winner = document.querySelector("#win");
const choices = document.querySelectorAll(".choice img");

const winnerDecide = [
  {
    user: "Rock",
    comp: "Scissors",
    winner: "You Win ๐",
  },
  {
    user: "Scissors",
    comp: "Paper",
    winner: "You Win ๐",
  },
  {
    user: "Paper",
    comp: "Rock",
    winner: "You Win ๐",
  },
  {
    user: "Scissors",
    comp: "Rock",
    winner: "You Loss ๐๐Computer Win ๐ช",
  },
  {
    user: "Paper",
    comp: "Scissors",
    winner: "You Loss ๐๐Computer Win ๐ช",
  },
  {
    user: "Rock",
    comp: "Paper",
    winner: "You Loss ๐๐Computer Win ๐ช",
  },
];

const randomArrayValue = ["Rock", "Paper", "Scissors"];

//click event
for (const choice of choices) {
  choice.addEventListener("click", (e) => {
    // console.log(e.target.id)
    userChoose = e.target.id;
    spanTagOne.textContent = userChoose;
    compChoose =
      randomArrayValue[Math.floor(Math.random() * randomArrayValue.length)];
    spanTagTwo.textContent = compChoose;
    gotWinner(userChoose, compChoose);
  });
  // console.log(choice)
}

userCount = 0;
compCount = 0;

function gotWinner(userInput, compRandomChoose) {
  spanTagOne.textContent = userInput;
  spanTagTwo.textContent = compRandomChoose;
  if (userInput === compRandomChoose) {
    spanTagThree.textContent = "Game Draw! Better Luck Next Time";
    //  }  else if(userInput === "Rock" && computerRandomInput === "Scissors"){
    //     winners.textContent = "You Win ๐๐"
    //    }else if(userInput === "Scissors" && computerRandomInput === "Paper"){
    //     winners.textContent = "You Win ๐๐"
    //    }else if(userInput === "Paper" && computerRandomInput === "Rock"){
    //     winners.textContent = "You Win ๐๐"
    //    }
    //    else if(userInput === "Scissors" && computerRandomInput === "Rock"){
    //     winners.textContent = "You Loss ๐๐ Computer win"
    //    }else if(userInput === "Paper" && computerRandomInput === "Scissors"){
    //     winners.textContent = "You Loss ๐๐ Computer win"
    //    }else if(userInput === "Rock" && computerRandomInput === "Paper"){
    //     winners.textContent = "You Loss ๐๐ Computer win"
  }
  for (const findWinner of winnerDecide) {
    if (findWinner.user === userInput && findWinner.comp === compRandomChoose) {
      if (findWinner.winner === "You Win ๐") {
        userCount += 1;
      } else if (findWinner.winner === "You Loss ๐๐Computer Win ๐ช") {
        compCount += 1;
      }
      userScoreVal.textContent = userCount;
      compScoreVal.textContent = compCount;
      //   if(userScoreVal.innerHTML < compScoreVal.innerHTML){
      //     alert("less than")
      //   }
      winner.textContent = findWinner.winner;
    }
  }
}
