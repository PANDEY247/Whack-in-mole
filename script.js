
const squareDivs = document.querySelectorAll('.square')  // 1
const startButton = document.querySelector(".start");   /*  4 */
const level =document.querySelector(".difficulty");
const decreasingTime = document.querySelector(".decreasing-Time")
const score = document.querySelector('.score');
const over = document.querySelector('.over');
const end = document.querySelector('.end');
      /* 6   */
// console.log("squareDivs");
let gameScore= 0;
let gameTime = 15;
let selectRandomSquareTimer;
let decreaseTimeTimer;




squareDivs.forEach((squareDiv)=>{
    squareDiv.onclick=()=>{
       console.log('id is' ,squareDiv.classList.contains('mole-image'));
        if(squareDiv.classList.contains('mole-image')&& gameTime >0){
        gameScore = gameScore+1;
        score.innerText=gameScore;
        }
    }

})
const selectRandomSquare = () => {        /* 5 */
    squareDivs.forEach((squareDiv) => {      /* 5 */
        squareDiv.classList.remove('mole-image');   /* 5 */
    })       /* 5 */

    // const selectRandomSquare =() =>{   2 
    const randomSelectedDiv = squareDivs[Math.floor(Math.random() * 9)]  /* 3   */
    randomSelectedDiv.classList.add('mole-image')

}  

const decreaseTime =()=>{
    gameTime = gameTime-1;
    decreasingTime.innerText = gameTime;
    if(gameTime === 0){
        clearInterval(selectRandomSquareTimer);
        clearInterval(decreaseTimeTimer)
        over.innerText = 'Game Over'
        startButton.disabled =false;

    }
}

end.onclick =()=>{
    clearInterval(selectRandomSquareTimer);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over'
        startButton.disabled = false
        gameTime = 11
}



// startButton.onclick = () =>{
//     setInterval(selectRandomSquare,400) // add event listener    4 
// }

startButton.onclick = () => {     /* 6   */
    console.log(level.value);

    let intervalTime;

    if (level.value ===" easy") {
        intervalTime = 1000;
    }
    else if (level.value ===" medium") {
        intervalTime = 600;

    }
    else if (level.value === "hard") {
        intervalTime = 400;

    }else{
        intervalTime = 800
    }


    selectRandomSquareTimer =setInterval(selectRandomSquare, intervalTime);
    decreaseTimeTimer =setInterval(decreaseTime,1000);
    console.log('selectRandomSquareTimer',selectRandomSquareTimer);
    console.log('decreaseTimeTimer',decreaseTimeTimer);
    startButton.disabled =true;
    over.innerText = ' '
    gameTime =10
}
