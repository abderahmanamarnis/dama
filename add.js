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
let id =["d1","d2","d3","d4","d5","d6","d7","d8","d9"]
var k7al = document.getElementsByClassName("k7al")
var dowara = document.getElementsByClassName("cirle") 
var player2 = document.getElementsByClassName("player2") 
for(i=0 ; i<k7al.length;i++){
  k7al[i].setAttribute("ondrop" ,"drop(event)")
  k7al[i].setAttribute("ondragover" ,"allowDrop(event)") 

}
// function idi(){
//   D = Math.floor(Math.random()*8)
// }
for(i=0;i<dowara.length;i++){
  dowara[i].setAttribute("id" , id[i])
dowara[i].setAttribute("draggable" , "true")
dowara[i].setAttribute("ondragstart" , "drag(event)")
player2[i].setAttribute("id" , "player2"+i)
player2[i].setAttribute("draggable" , "true")
player2[i].setAttribute("ondragstart" , "drag(event)")


}
