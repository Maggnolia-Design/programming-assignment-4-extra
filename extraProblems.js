/*ELEVEN(UNFINISHED)*/

var outputName=function(name){
  result "Hello"+name
}

console.log(outputName("Maggie"))

/*TWELVE*/

var anArray=[14,3,5,"Bob","Alfred", 3,5,7];

var everyOther=function(anArray){
  var result=[]
  for(var i=1; i<anArray.length; i+=2){
    result.push(anArray[i]);
  }
  return result
}

console.log(everyOther(anArray))

/*keep the scope to "anArray", to keep in general. Don't use sampleArray!*/
/*use tempArray.push, not result+=... this will push the new value onto the existing array.*/
/*Also, your result will be an array, not just a bunch of numbers*/

/*REVISED adding and Array*/
var addArray =function(anArray){
  var sum;
  for(var i=0;i<anArray.length; i++){
    sum=add(sum,anArray[i])
  }
  return sum;
}

var addthanDivide (num1,num2){
  add(num1,num2)/3
}
/*I forgot what this is about....I guess allows you to plug in numers mroe easily*/

/*THIRTEEN*/


