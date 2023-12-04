// for(/* iterator def */; /* test */; /* chage */){

// }
/* iterator ex.= let, var, const */
/* def ex.= i = 0 */
/* ++ = i++ -> i = i + 1
   -- = i-- -> i = i - 1
   += = i+=5 -> i + 5
   -+ = i-=5 -> i - 5
   "="  = i=79 -> i is now 79
   "==" = i==value -> returns a boolean (meaning returns either true or false)
   "===" = skip
   < = i<b -> returns a boolean, test if i is less than b
   <=
   >
   >=
   +
   -
   */

   /*
   int
   number
   stirng
   */


// begining ex 1
console.log("beginning ex 1")
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627

let arr_1_sum=0
let arr_2_sum=0
for(let i=0; i<arr_1.length; i++) {
    arr_1_sum = arr_1_sum + arr_1[i]
}
for(let i=0; i<arr_2.length; i++) {
    arr_2_sum = arr_2_sum + arr_2[i]
}
let arr_sum = arr_1_sum + arr_2_sum

console.log("arr_1_sum:", arr_1_sum)
console.log("arr_2_sum:", arr_2_sum)
console.log("arr_sum:", arr_sum)

console.log("type of arr_1_sum:", typeof arr_1_sum)


// ex 2
console.log("beggining ex 2")
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
 
let outcome = ""
let count = 0; 

for(let i=2; i <= n1; i = i + 2){
    outcome = outcome + i + " ";
    count = count + 1; 
}

console.log (outcome)
console.log (count)

// ex3
console.log("begginign ex 3")
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

