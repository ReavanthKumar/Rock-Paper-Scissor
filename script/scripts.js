const score=JSON.parse(localStorage.getItem('score'))||{
  win:0,
  lose:0,
  draw:0
};
let resultDisplay=document.querySelector('#result');
let scoreCard=document.querySelector('#score');
scoreCard.innerHTML='Win: '+score.win+'  Lose: '+score.lose+'  Draw:'+score.draw;
function pickComputerMove(){
  const rand=Math.random();
  if(rand<0.34){
    return 'Rock';
  }
  else if(rand<0.67){
    return 'Paper';
  }
  else 
  {
    return 'Scissor';
  }
}
function result(humanMove){
  const computerMove=pickComputerMove();
  if(computerMove===humanMove){
    score.draw++;
    const move=humanMove==='Rock'?'&#9994;':(humanMove==='Paper'?'&#9995':'&#9996');
    resultDisplay.innerHTML='Draw!!! \n\nYou picked '+move+' and Computer picked '+move;
  }
  else if(humanMove==='Rock'){
    if(computerMove==='Paper'){
      score.lose++;
      resultDisplay.innerHTML='You Lose!!! You picked &#9994; and Computer picked &#9995;';
    }
    else{
      score.win++;
      resultDisplay.innerHTML='You Won!!! You picked &#9994; and Computer picked &#9996;';
    }
  }
  else if(humanMove==='Paper'){
    if(computerMove==="Rock"){
      score.win++;
      resultDisplay.innerHTML='You Won!!! You picked &#9995; and Computer picked &#9994;';
    }
    else{
      score.lose++;
      resultDisplay.innerHTML='You Lose!!! You picked &#9995; and Computer picked &#9996;';
    }
}
else{
  if(computerMove==='Rock'){
    score.lose++;
    resultDisplay.innerHTML='You Lose!!! You picked &#9996; and Computer picked &#9994;';
    }
  else{
    score.win++;
    resultDisplay.innerHTML='You Won!!! You picked &#9996; and Computer picked &#9995;';
    }
}
scoreCard.innerHTML='Win: '+score.win+'  Lose: '+score.lose+'  Draw:'+score.draw;
localStorage.setItem('score',JSON.stringify(score));
}
function reset(){
score.win=0;
score.lose=0;
score.draw=0;
localStorage.setItem('score',JSON.stringify(score));
resultDisplay.innerHTML='Score Reset';
scoreCard.innerHTML='Win: '+score.win+'  Lose: '+score.lose+'  Draw:'+score.draw;
}