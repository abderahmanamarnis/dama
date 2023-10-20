function allowDrop(ev) {
   ev.preventDefault();
   
 }
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
   
 }
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }
let id =["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12"]
var k7al = document.getElementsByClassName("k7al")
var byad = document.getElementsByClassName("byad")
var player1 = document.getElementsByClassName("cirle") 
var player2 = document.getElementsByClassName("player2") 
let bord = byad.length + k7al.length
for(i=0 ; i<k7al.length;i++){
  k7al[i].setAttribute("ondrop" ,"drop(event)")
  k7al[i].setAttribute("ondragover" ,"allowDrop(event)") 

}
// function idi(){
//   D = Math.floor(Math.random()*8)
// }
for(i=0;i<player1.length;i++){
  player1[i].setAttribute("id" , id[i])
player1[i].setAttribute("draggable" , "true")
player1[i].setAttribute("ondragstart" , "drag(event)")
player2[i].setAttribute("id" , "player2"+i)
player2[i].setAttribute("draggable" , "true")
player2[i].setAttribute("ondragstart" , "drag(event)")

}

var parentDiv = document.querySelectorAll('.row');
var indexxx = Array.from(parentDiv).indexOf(parentDiv[7])
console.log(indexxx);
 
