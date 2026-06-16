// STEP 1
// Convert the following identifiers to Camel Case notation:
// let some_month        --> let someMonth
// function the Month()  --> function theMonth()
// let current-month     --> let currentMonth
// let summer_month      --> let summerMonth
// let MyLibrary-function --> let myLibraryFunction

// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction


// STEP 2
// Give an example of a numeric literal expression, a string literal expression,
// a Boolean literal expression, and a null literal expression.

// 42                   // numeric literal expression
// 'Hello World'        // string literal expression
// true                 // Boolean literal expression
// null                 // null literal expression


// STEP 3
// Give two examples of complex / variable expressions.

// let sum = 10 + 5
// let fullName = 'Rene' + ' ' + 'Garcia'


// STEP 4
// Declare (but do not assign) 9 variables using Camel Case and Hungarian Notation:
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You

// let strFirstName
// let strLastName
// let strAddress
// let strCity
// let strState
// let strZipCode
// let intYourAge
// let strReferralSource
// let blnMayWeContactYou


// STEP 5
// Take 3 of the 9 variables above and demonstrate 3 ways to declare and assign values.

// Way 1 - declare first, then assign separately:
// let strFirstName
// strFirstName = 'Rene'

// Way 2 - declare and assign on the same line:
// let strLastName = 'Garcia'

// Way 3 - declare and assign multiple variables on one line:
// let strCity = 'San Diego', strState = 'CA'


// STEP 6
// Create a variable. Add a number and a string and display the coerced result in the console.

// let result = 25 + ' years old'
// console.log(result)
// Result: "25 years old" (the number 25 is coerced into a string)


// STEP 7
// Create two variables.
// First variable: add a Boolean and a string and display the coerced result.
// Second variable: add a number and a Boolean and display the coerced result.

// let boolAndString = true + ' is the answer'
// console.log(boolAndString)
// Result: "true is the answer" (Boolean coerced to string)

// let numAndBool = 10 + true
// console.log(numAndBool)
// Result: 11 (Boolean true is coerced to the number 1)


// STEP 8
// Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)
//
// It is NOT valid. The problem is the apostrophe in "I'm" — it closes the single-quoted string early.
// Fix option 1: escape the apostrophe with a backslash:
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)
//
// Fix option 2: use double quotes to wrap the string instead:
// let someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\""
// console.log(someString)


// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.

// let myNullVar = null
// console.log(myNullVar)
// Result: null

// let myUndefinedVar
// console.log(myUndefinedVar)
// Result: undefined


// STEP 10
// Use the unary typeof operator on various literals to return the following types in the console:
// string, number, Boolean, object, and undefined.

// console.log(typeof 'Hello')       // string
// console.log(typeof 42)            // number
// console.log(typeof true)          // boolean
// console.log(typeof null)          // object (this is a known quirk of JavaScript)
// console.log(typeof undefined)     // undefined


// STEP 11
// Use the concatenation operator (+) to display the following in an alert box:
// Hello Rene Garcia, welcome to the JavaScript class!
// Must use 2 concatenation operators.

// alert('Hello ' + 'Rene Garcia' + ', welcome to the JavaScript class!')


// STEP 12
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable.

// let name = 'Rene Garcia'
// alert('Hello ' + name + ', welcome to the JavaScript class!')


// STEP 13
// Declare a variable called course and set it equal to "JavaScript".
// Rework the alert string to use variables instead of hardcoded text.

// let name = 'Rene Garcia'
// let course = 'JavaScript'
// alert('Hello ' + name + ', welcome to the ' + course + ' class!')


// STEP 14
// Rework the string so that a line break (\n) is added before the word "Welcome".
// Alert should display:
// Hello Rene Garcia.
// Welcome to the JavaScript class!

// let name = 'Rene Garcia'
// let course = 'JavaScript'
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')


// STEP 15
// Replace the hardcoded name with a prompt that asks the user for their name.

// let name = prompt('What is your name?')
// let course = 'JavaScript'
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')


// STEP 16
// Replace the hardcoded course with a prompt that asks the user for the class they are taking.

// let name = prompt('What is your name?')
// let course = prompt('What class are you taking?')
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')


// STEP 17
// Declare x = 10 and y = 20. Display the sum in the console.

// let x = 10
// let y = 20
// console.log(x + y)
// Result: 30


// STEP 18
// Declare x = 20. Add and assign 20 to that variable. Display the result.
// Result should be 40.

// let x = 20
// x += 20
// console.log(x)
// Result: 40


// STEP 19
// Declare x = 20. Multiply and assign 5. Display the result.
// Result should be 100.

// let x = 20
// x *= 5
// console.log(x)
// Result: 100


// STEP 20
// Declare x equal to the remainder of 20 divided by 3.
// Divide and assign 1 to that variable. Display the result.
// Result should be 2.

// let x = 20 % 3
// x /= 1
// console.log(x)
// Result: 2
// Note: 20 % 3 = 2 (because 3 goes into 20 six times = 18, remainder is 2)
// Then 2 / 1 = 2
