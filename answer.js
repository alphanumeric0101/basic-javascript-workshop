// takes given string as input and return the first letter

function firstLetter(input) {
    return input[0];
}

//returns the last letter of given string

function lastLetter(input) {
    return input[input.length - 1];
}

// takes a string and a number and returns the character at the number index of the string

function indexOfString(str, num) {
    return str[num];
}

//adds two numbers. if a string is provided, it concatenates to the other input.

function addition(n1, n2) {
    return n1 + n2;
}

// multiplies two inputs. if a string is provided, error code is NaN

function multiply(n1, n2) {
    return n1 * n2;
}

// takes two numbers and calculates the result of a given operation
// if operand is malformatted or missing, function returns 0

function calcULater(n1, n2, oper) {
    if (oper === 'add') {return n1 + n2;}
    else if (oper === 'subtract') {return n1 - n2;}
        else if (oper === 'mult') {return n1 * n2;}
            else if (oper === 'div') {return n1 / n2;}
    else return 0
}

// this function takes a phrase and a number and repeats that phrase the number of times provided

function parrot(phrase, num) {
    var parroted = [];
    for (i = 0; i < num; i++) { 
        parroted.push(phrase);
    }
return parroted.join(" ")
}

//this function reverses a given string so it reads backwards

function flipper(phrase) {
    var flipped = ""; 
    var count = phrase.length - 1;
    for (i = count; i > -1; i--) { 
        flipped += phrase[i];
    }
return flipped
}


// this function returns the factorial of a given number

function factorial(num) {
    if (num === 0) {return 1}
    else {
    var result = num;
    for (num; num > 1; num--) {
         result = result * (num - 1);
        }
return result
    }
}

// checks a given string for the longest word and returns it

function longWord(phrase) {
    var sort = phrase.split(" ");
    var longest = "";
    for (i = 0; i < sort.length; i++) {
        if (sort[i].length > longest.length) {
            longest = sort[i]
        }
    }
    return longest;
}

//fucntion to capitalize each first letter of a given phrase

function capitalize(phrase) {
    var sort = phrase.split(" ");
    var capitalized = [];
    for (i = 0; i < sort.length; i++) {
        capitalized.push(sort[i].charAt(0).toUpperCase() + sort[i].substr(1));
            }
    return capitalized.join(" ");
}

// find the largest number in an array

function bigNum(num) {
    var biggest = 0;
    for (i = 0; i < num.length; i++) {
        if (num[i] > biggest) {
            biggest = num[i];
        }
    }
    return biggest;
}

// takes an array and returns a new array out of the truthy elements of the first

function filtered(input){
    var pass = [];
    input.filter(function(val){
        if (val == true) {
            pass.push(val);    
        }
    }); 
    return pass
}

// sums all numbers in a given array

function summed(input){
    var total = 0;
    for (i = 0; i < input.length; i++){
        total += input[i];
    }
    return total;
}

//Compares two arrays and returns a new array consisting of only those elements that were not present in the other array

function uniq(ar1,ar2){
    var hipsters = [];
    
    for (i=0;i<ar1.length;i++){
         if (ar2.indexOf(ar1[i]) === -1 && hipsters.indexOf(ar1[i]) === -1){
        hipsters.push(ar1[i]);
        }
    }
    
    for (i=0;i<ar2.length;i++){
        if (ar1.indexOf(ar2[i]) === -1 && hipsters.indexOf(ar1[i]) === -1){
            hipsters.push(ar2[i]);
        }
    }
    return hipsters;
}