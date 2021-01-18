var spy=0;
var i=0;
while(spy!=1){

var fn=prompt("First Name: ")
var ln=prompt("Last Name: ")
if (fn[0]==ln[0]){
  spy=1;
  console.log("Spy Detected")
  break;
  }
else{
  i++;
}

if(i=1){
  var age=prompt("Age: ")
  if(20<age && age <30){
    spy=1;
    console.log("Spy Detected")
    break;
  }
  else{
    i++
  }
}
if(i=2){
  var height=prompt("Height (in cms): ")
  if(height>=170){
    spy=1;
    console.log("Spy Detected")
    break;
  }
  else{
    i=3;
  }
}

if(i=3){
  var pn=prompt("Nickname: ")
  s=pn.length;
  if(pn[s]=="y"){
    spy=1;
    console.log("Spy Detected")
    break;
  }
  else{
    console.log("No Potential Threat19")
    break;
  }
}

}
