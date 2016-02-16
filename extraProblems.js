/*ELEVEN(UNFINISHED)*/

var outputName=function(name){
  result "Hello"+name
}

console.log(outputName("Maggie"))

/*TWELVE*/

var anArray=[14,3,5,"Bob","Alfred", 3,5,7];

var everyOther=function(anArray){
  var result=""
  for(var i=1; i<anArray.length; i+=2){
    result+=anArray[i]
  }
  return result
}

console.log(everyOther(anArray))

/*keep the scope to "anArray", to keep in general. Don't use sampleArray!*/