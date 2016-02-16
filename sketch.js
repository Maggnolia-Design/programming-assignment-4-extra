/*ONE*/

var AddMe=function(x,y){
  return x+y
}

console.log(AddMe(2,3))

/*TWO*/

var DivideMe=function(x,y){
  return x/y
}

console.log(DivideMe(144,12))

/*THREE*/

myArray=[6,2,7,9,5]

var AddArray=function(myArray){
  var sum=0
  for (var i=0; i<myArray.length; i++){
    sum=sum+myArray[i]
  }
  return sum
}

console.log(AddArray(myArray))

/*FOUR*/

var MultiplyArray=function(myArray){
  var product=1
  for (var i=0; i<myArray.length; i++){
    product=product*myArray[i]
  }
  return product
}

console.log(MultiplyArray(myArray))

/*FIVE*/

var median=function(x,y,z){
  if(x<y && y<z){
    return "middle number is between the other two"
    }
  else if (z<y && y<x){
    return "middle number is between the other two"
  }
  else{
    return "middle number is not between the other two"
  }
}

console.log(median(1,10,3))
