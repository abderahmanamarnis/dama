function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log((ev.target.parentElement.id))

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let play=document.getElementById(data)
  ev.target.appendChild(play);
  if (play.parentElement.parentElement.classList.contains("greenhouse") && play.classList.contains("player2")){
    play.style.border = "  3px solid blue"
   }
   if (play.parentElement.parentElement.classList.contains("redhouse") && play.classList.contains("cirle")){
    play.style.border = " 3px solid purple"
   }
// console.log(play.parentElement.parentElement.classList.contains("greenhouse"))
}


let id2 = 1
let id = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12"]
var k7al = document.getElementsByClassName("k7al")
var byad = document.getElementsByClassName("byad")
var player1 = document.getElementsByClassName("cirle")
var player2 = document.getElementsByClassName("player2")
let bord = byad.length + k7al.length
for (i = 0; i < k7al.length; i++) {
  k7al[i].setAttribute("ondrop", "drop(event)")
  k7al[i].setAttribute("ondragover", "allowDrop(event)")
  k7al[i].setAttribute("id", id2)
  id2 += 2

}
// function idi(){
//   D = Math.floor(Math.random()*8)
// }
for (i = 0; i < player1.length; i++) {
  player1[i].setAttribute("id", id[i])
  player1[i].setAttribute("draggable", "true")
  player1[i].setAttribute("ondragstart", "drag(event)")
  player2[i].setAttribute("id", "player2" + i)
  player2[i].setAttribute("draggable", "true")
  player2[i].setAttribute("ondragstart", "drag(event)")}
//   player2[i].addEventListener("dragend",drageditem);
// function drageditem(){
//   console.log("ss")
// }
for (j = 0; j < k7al.length; j++) {
  let position = k7al[j].id;
  console.log(position);
  // if (position === 3 || position === position - 14) {
  //   console.log("hawhaw");
  // }
}


// var parentDiv = document.querySelectorAll('.row');
// var indexxx = Array.from(parentDiv).indexOf(parentDiv[7])
// console.log(indexxx);

// var drgitem = k7al.querySelectorAll('k')

//<<<<<< queen coming>>>>>
