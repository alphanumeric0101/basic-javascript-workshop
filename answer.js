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