// a business name genetrator with three different words and mix match it  without using arrays.

let random = Math.random()
let first,second,third;
// it generate the first word
if(random<0.33){
    first= "crazy"
}
else if(random<0.66 && random>0.33){
  first="amazing"
}
else{
    first="fire"
}

// generate the second word
 random = Math.random()
if(random<0.33){
    second= "engine"
}
else if(random<0.66 && random>0.33){
  second="food"
}
else{
    second="garments"
}

// generate the third word
 random = Math.random()
if(random<0.33){
    third= "bros"
}
else if(random<0.66 && random>0.33){
  third="limited"
}
else{
    third="hub"
}

console.log(`${first} ${second} ${third}`)