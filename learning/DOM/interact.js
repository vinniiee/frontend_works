// var headOne=document.querySelector("#one")
// var headTwo=document.querySelector("#two")
// var headThree=document.querySelector("#three")
//
// headOne.addEventListener('mouseover',function(){
//   headOne.textContent="Mouse Currently Over";
//   headOne.style.color='red';
// })
// headOne.addEventListener("mouseout",function(){
//   headOne.textContent="HOVER OVER ME!";
//   headOne.style.color="black";
// })
// console.log("Connected!")


var restart =document.querySelector("#b") //grab the restart button
var squares = document.querySelectorAll("td"); //grab all the squares of the table
function clearBoard() {
  for (var i = 0; i< squares.length; i++){
    squares[i].textContent='';
  }
}

restart.addEventListener("click",clearBoard);

function changeMarker(){
  if(this.textContent===''){
    this.textContent='X';
  }else if (this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent='';
  }
}


for (var i=0; i< squares.length; i++){
  squares[i].addEventListener('click',changeMarker)
}
