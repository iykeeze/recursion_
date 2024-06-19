    //    NUMBER ONE (DECISION MAKING)

/*Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. 
Leap years are divisible by 4, but not by 100 unless they are also divisible by 400 */

function isLeapYear(year) {
    // Leap years are divisible by 4
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020));  
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000));  
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));  



/* Ticket Pricing: Write a program that prompts the user to enter their 
age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20 */

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10; // Children
    } else if (age >= 13 && age <= 17) {
        return 15; // Teenagers
    } else {
        return 20; // Adults
    }
}

// Prompting the user to enter their age
let userAge = prompt("Please enter your age:");

// Converting the input to a number
userAge = parseInt(userAge);


if (!isNaN(userAge)) {

    let ticketPrice = calculateTicketPrice(userAge);
    console.log("The price of the movie ticket for your age is: $" + ticketPrice);
} else {
    console.log("Invalid input. Please enter a valid age.");
}

// NUMBER TWO (RECURSIVE ALGORITHM)

/*Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts
 with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).*/
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0)); 
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(3)); 
console.log(fibonacci(4)); 
console.log(fibonacci(5)); 
console.log(fibonacci(6)); 
                                


/*Palindrome Checker: Create a recursive function to check if a given string is a palindrome
 (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.*/
 function isPalindrome(str) {
    // Helper function to remove spaces, punctuation, and convert to lowercase
    function normalizeString(s) {
        return s.replace(/[\W_]/g, '').toLowerCase();
    }

    // Recursive function to check if a string is a palindrome
    function checkPalindrome(s) {
        if (s.length <= 1) {
            return true;
        } else if (s[0] !== s[s.length - 1]) {
            return false;
        } else {
            return checkPalindrome(s.slice(1, -1));
        }
    }

    const normalizedStr = normalizeString(str);
    return checkPalindrome(normalizedStr);
}


console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("Was it a car or a cat I saw?")); 



// Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    
    if (exponent === 1) {
        return base;
    }

    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }

    return base * power(base, exponent - 1);
}

console.log(power(2, 3));  
console.log(power(5, 0)); 
console.log(power(10, 4));
