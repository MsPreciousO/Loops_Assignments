// 0
// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, 
// and display a message to the screen with console.log().

// for (let num = 0; num <= 15; num++){
//     if(num % 2 === 0 && num !== 0){
//         console.log(`${num} is an even number`)

//     } else if (num % 2 !==0 && num !== 0) {
//         console.log(`${num} is an odd number`)
//     }else {
//       console.log(`then ${num} is not either an even or an odd number`)
// }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1
//  Write a JavaScript function  which takes 1 value and  uses a for loop .
// The for loop iterates the integers from 1 to the value passed into the function. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".


// function funcNum(num){
//     for(let funcNum = 1; funcNum <= num; funcNum++){
//         if(funcNum % 3 === 0 && funcNum % 5 === 0){
//             console.log('FizzBuzz');
//         }else if (funcNum % 3 === 0){
//             console.log('Fizz');
//         }else if (funcNum % 5 === 0){
//             console.log('Buzz')
//     }else {
//         console.log(funcNum);
//     }
//     }
// }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2
// define a variable named total and make it equal the number 0.

// Define a second variable named limit and make it equal the number 10.

// Create a for loop with a variable i starting at 0 and increasing by 1 each time through the loop. 
// The loop should run as long as i is less than limit.

// On each iteration of the loop, add the number i to the total variable. To do this, you can use this statement:
// total += i
// After the for loop, use console.log() to print the total variable to the terminal.


// let total = 0;
// let limit = 10;
// for (let i = 0; i < limit; i++){
//     total += i;
//     console.log(total)
// }
// console.log(total)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3
//  define an array variable named pets.
//  It holds 3 values cat, dog, rabbit
//  Create a for loop that changes each string in the array so that they are plural.
//  Use console.log to print the modified array.


// const pets = ['cat', 'dog', 'rabbit'];
//     for(let num = 0; num < pets.length; num++){
//         let morPets = pets[num]+'s';
//         pets.splice (num, 1, morPets);
//         // console.log(morPets)
//     }
//     console.log(pets)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  4
//  define an array variabe names that has 7 values: pearl jewel prince andy irene charles nadine.
//  use a for loop to iterate through this array.
//  in each iteration change the first letter of each name to uppercase.
//  Create a new empty array called newNames and push each transformed name there.
//  Use console.log to print the newName array.


// const arrVar = ['pearl', 'jewel', 'prince', 'andy', 'irene', 'charles', 'nadine'];
// for(let num = 0; num < arrVar.length; num++){
    
//     // console.log(arrVar)
//     arrVar[num] = arrVar[num][0].toUpperCase(+1) + arrVar[num].substr(1);
//     // console.log(arrVar)
//     const newName = [];
//         console.log(arrVar[num])
//     }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  5
//  Write a function vowel_count which has one arguement and counts the number of vowels in a given string.
//  Define a variable wowel_list and asign aeiouAEIOU to it.
//  declare another variable vcount and initialize it with 0;
//  write a for loop whose condition for repeating is less than the length of the received arguemnt.
//  within the for loop use an if statement with the indexOf method to check if the values in the given string
//  are present in the vowel_count variable. 
// whenever a character is present in vowel_count,
//  vcount increments by 1. if the character is not present, -1 is returned and vcount is not incremented

// return the value of vcount.
// use console.log to call vowel_count pass in this string: The quick brown fox

function vowel_count(arg){
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
    let vowelListArry = vowel_list.split("");

   let argArry = arg.split("");
    for(i = 0; i <= argArry.length; i++){
     if(vowelListArry.indexOf(argArry[i]) !== -1){
         vcount = vcount + 1;
   }
}
console.log(vcount);

}
vowel_count('The quick brown fox ran through the forest')
