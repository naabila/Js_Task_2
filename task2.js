// Task 1
var deciNumber = 555;
console.log("Decimal to binary number:"+deciNumber.toString(2));

var binary_num= 101111;
console.log("Binary to decimal number:"+parseInt(binary_num,2));


//task 2
let arr1 = [0, 1,10, 2, [3, 4]].toString().split(",").map(Number);
var max = Math.max.apply( null,arr1 );
console.log(max);


//Task 3
//frequency of words in an string

var sentance = "Amar amar sonar bangla ami tomay valobasi"
sentance= sentance.replace("."," ");
sentance=sentance.toUpperCase();
const word = sentance.split(" ");
const word_frq=word.map(f=>{
    return{
        word :f,
        freq:word.filter(w=>w===f).length

    }
})
console.log(word_frq);