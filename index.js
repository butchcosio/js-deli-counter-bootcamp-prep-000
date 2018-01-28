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
for (l=0; l < line.length; l++)  {
  (l+1) + ":" + currentLine(0)}
return "The line is currently:"
  
}
while (line.length ===0) {
return ("The line is currently empty.")
}
