function takeANumber (katzDeliLine,name){
katzDeliLine.push (name)
return ("Welcome, " +name + ". You are number " + (katzDeliLine.length)+ " in line.")
} 

function nowServing (deliLine) {

while (deliLine.length>0) {
  return ("Currently serving " +deliLine.shift()+ ".")
 }
  return ("There is nobody waiting to be served!")
}

function currentLine(line){

while (line.length>0) {
var line2 = []  
for (l=0; l < line.length; l++)  {
 line2.push (l+1) + ":" + currentLine(0)}
return "The line is currently:" + line2()
}

return ("The line is currently empty.")
}
