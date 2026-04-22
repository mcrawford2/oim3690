Javascript Intro 

What is JavaScript? 

HTML gives your page structure. CSS gives it style. JavaScript makes it do things. 

Respond to clicks and input 

Change content dynamically 

Fetch data from servers 

Build interactive applications 

What is the DOM? 

When the browser loads HTML, it builds a tree in memory called the DOM. JavaScript can read and change this tree  

document 

└── html 

    ├── head 

    │   └── title 

    └── body 

        ├── h1 

        ├── p 

        └── button 

Finding Elements 

Use document.querySelector() with any CSS selector:  

By tag: document.querySelector('h1') 

By class: document.querySelector('.card') 

By ID: document.querySelector('#intro') 

This returns the first matching element. Use querySelectorAll() for all matches. 

Two Ways to Select by ID 

You'll see both of these online and in AI-generated code: 

Old way (still common): document.getElementById('intro') 

Modern way (same result, more flexible): document.querySelector('#intro') 

querySelector works with any CSS selector, so we'll use it for everything. 

What is an Event? 

Events are actions that happen on the page: 

User clicks a button 

User types in an input 

Mouse hovers over an element 

A form is submitted 

JavaScript can listen for these events and respond. 

addEventListener 

This is the core pattern. Remember it: 

Find the element: const button = document.querySelector('button'); 

Listen for an event: button.addEventListener('click', function() { 

Do something:  alert('Button clicked!'); }); 

Three Syntaxes, Same Thing 

AI tools and online examples use different styles. They all do the same thing: 

Style 1: anonymous function (clearest for beginners)  

button.addEventListener('click', function() { ... }); 

Style 2: named function (good for reuse) 

function handleClick() { ... } 

button.addEventListener('click', handleClick); 

Style 3: arrow function (you'll see this in AI code) 

button.addEventListener('click', () => { ... }); 

How they connect: 

document.querySelector(): finds elements on the page 

addEventListener('click', ...): waits for a click 

Debugging: console.log 

Your best friend for understanding what's happening: 

Use it to check values, find bugs, and understand code. 

Common Events 

Event				When it fires 

click				Element is clicked 

mouseover / mouseout	Mouse enters/leaves 

keydown			Key is pressed 

submit			Form is submitted 

input				Input value changes (every keystroke) 

change			Input loses focus after changing 

 

Javascript Basics 

Declaring Variables 

Use let for values that change, const for values that stay the same. 

Use let for values that change 

let score = 0; 

score = 10;  // OK 

Use const for values that don't change 

const MAX_SCORE = 100; 

MAX_SCORE = 200;  // Error! 

Avoid var (old way) 

var oldWay = 'outdated'; 

Variable Naming 

Rules: 

Start with letter, _, or $ 

No spaces or special characters 

Case sensitive (myVar ≠ myvar) 

Conventions:  

camelCase for variables: userName, totalScore 

UPPER_CASE for constants: MAX_SIZE, API_KEY 

Data Types: Primitive 

JavaScript has a few basic data types. You'll use strings, numbers, and booleans most often. 

String 

let name = "Alice"; 

let greeting = 'Hello'; 

let message = `Hi ${name}`;  // Template literal 

Number (integers and decimals) 

let age = 25; 

let price = 19.99; 

Boolean 

let isActive = true; 

let isLoggedIn = false; 

Undefined (no value assigned) 

let unknown; 

Null (intentionally empty) 

let empty = null; 

Checking Types 

Use typeof to check what type a value is. Note: arrays return "object" (a JS quirk). 

typeof "hello"    // "string" 

typeof 42         // "number" 

typeof true       // "boolean" 

typeof undefined  // "undefined" 

typeof null       // "object" (historical bug) 

typeof {}         // "object" 

typeof []         // "object" 

Template Literals 

const name = "Alice"; 

const age = 25; 

Old way (concatenation) 

let msg1 = "Hello, " + name + "! You are " + age + "."; 

New way (template literals) 

let msg2 = `Hello, ${name}! You are ${age}.`; 

Multi-line strings 

let html = ` 

  <div> 

    <h1>${name}</h1> 

    <p>Age: ${age}</p> 

  </div> 

`; 

Arithmetic Operators  

Standard math works as expected. % (modulo) gives the remainder, ** is for exponents. 

let a = 10, b = 3; 

+ b // 13 (addition) a - b // 7 (subtraction) a * b // 30 (multiplication) a / b // 3.33... (division) a % b // 1 (remainder/modulo) a ** b // 1000 (exponentiation) 

// Shortcuts a++ // increment by 1 a-- // decrement by 1 a += 5 // same as a = a + 5 a *= 2 // same as a = a * 2 

String Operations 

Strings have built-in methods for common transformations. 

let first = "Hello"; 

let last = "World"; 

Concatenation 

first + " " + last  // "Hello World" 

Length 

first.length  // 5 

Methods 

first.toUpperCase()  // "HELLO" 

first.toLowerCase()  // "hello" 

first.includes("ell")  // true 

first.startsWith("He") // true 

Comparison Operators 

Always use === (strict equality) in JavaScript to avoid unexpected type conversions.  

5 == "5"    // true  (loose equality - converts types) 

5 === "5"   // false (strict equality - no conversion) 

5 != "5"    // false 

5 !== "5"   // true 

10 > 5      // true 

10 >= 10    // true 

5 < 10      // true 

5 <= 5      // true 

Always use === and !== (strict comparison) 

Logical Operators 

Combine conditions with && (both must be true), || (either can be true), ! (reverse). 

AND (both must be true 

true && true   // true 

true && false  // false 

OR (at least one must be true) 

true || false  // true 

false || false // false 

NOT (inverts) 

!true   // false 

!false  // true 

Example 

let isAdult = age >= 18; 

let canVote = isAdult && isCitizen; 

What is a Function? 

A reusable block of code that performs a task: 

Define function 

function greet() { 

  console.log("Hello!"); 

} 

Call function 

greet();  // prints "Hello!" 

greet();  // prints "Hello!" Again 

Functions with Parameters 

Parameters let functions work with different inputs each time you call them. 

function greet(name) { 

  console.log(`Hello, ${name}!`); 

} 

 

greet("Alice");  // "Hello, Alice!" 

greet("Bob");    // "Hello, Bob!" 

  

// Multiple parameters 

function add(a, b) { 

  console.log(a + b); 

} 

  

add(5, 3);  // 8 

 

Return Values 

Use return to send a result back. Without it, the function returns undefined.  

function add(a, b) { 

  return a + b; 

} 

  

let sum = add(5, 3);  // sum = 8 

  

// Use the result directly 

console.log(add(10, 20));  // 30 

  

// No return = undefined 

function sayHi() { 

  console.log("Hi"); 

  // implicitly returns undefined 

} 

 

Arrow Functions 

Arrow functions are shorthand. AI-generated code uses them often, so learn to recognize them. 

  

// Traditional function 

function add(a, b) { 

  return a + b; 

} 

  

// Arrow function 

const add = (a, b) => { 

  return a + b; 

}; 

  

// Short form (implicit return) 

const add = (a, b) => a + b; 

  

// Single parameter (no parentheses needed) 

const double = x => x * 2; 

 

Functions as Event Handlers 

You can pass any of these function styles to addEventListener. 

// Named function 

function handleClick() { 

  console.log('Clicked!'); 

} 

button.addEventListener('click', handleClick); 

  

// Anonymous function 

button.addEventListener('click', function() { 

  console.log('Clicked!'); 

}); 

  

// Arrow function 

button.addEventListener('click', () => { 

  console.log('Clicked!'); 

}); 

 

Object Basics 

Objects group related data together. Access properties with dot notation. 

// Create an object 

const person = { 

  name: "Alice", 

  age: 25, 

  isStudent: true 

}; 

  

// Access properties 

person.name        // "Alice" 

person["age"]      // 25 

  

// Modify properties 

person.age = 26; 

  

// Add new properties 

person.email = "alice@example.com"; 

 

Objects with Methods 

Methods are functions inside objects. Use this to access other properties in the same object. 

const calculator = { 

  add: function(a, b) { 

    return a + b; 

  }, 

  

  // Shorthand 

  subtract(a, b) { 

    return a - b; 

  } 

}; 

  

calculator.add(5, 3);       // 8 

calculator.subtract(10, 4); // 6 

 

Javascript Conditionals 

What are Conditionals? 

Conditionals let your code make decisions: 

If the user is logged in, show their profile 

If the form is invalid, show an error 

If the score is high enough, show "You Win!" 

Basic if 

The condition must be in parentheses. The code block runs only when the condition is true. 

 if (condition) { 

  // code runs if condition is true 

} 

Example: 

let age = 20;  

if (age >= 18) { 

  console.log("You are an adult"); 

} 

 

if...else 

Use else when you have exactly two paths.  

let age = 15; 

if (age >= 18) { 

  console.log("You are an adult"); 

} else { 

  console.log("You are a minor"); 

} 

 

if...else if...else 

Conditions are checked in order. The first true condition runs and the rest are skipped. 

let score = 85; 

if (score >= 90) { 

  console.log("A"); 

} else if (score >= 80) { 

  console.log("B"); 

} else if (score >= 70) { 

  console.log("C"); 

} else if (score >= 60) { 

  console.log("D"); 

} else { 

  console.log("F"); 

} 

 

Comparison Operators 

Always use === (strict equality) to avoid unexpected type conversions. 

Operator	Meaning 

===		Equal (strict) 

!==		Not equal (strict) 

>		Greater than 

<		Less than 

>=		Greater than or equal 

<=		Less than or equal 

 

Strict vs Loose Equality 

Loose equality (==) - converts types 

5 == "5"     // true (string converted to number) 

0 == false   // true 

null == undefined  // true 

Strict equality (===) - no conversion 

5 === "5"    // false (different types) 

0 === false  // false 

null === undefined  // false 

Always use === and !== 

Logical Operators 

AND (&&) 

Both conditions must be true. Useful for checking multiple requirements at once. 

let age = 25; 

let hasID = true; 

if (age >= 21 && hasID) { 

  console.log("Can enter the bar"); 

} 

true && true = true 

true && false = false 

false && true = false 

false && false = false 

OR (||) 

At least one condition must be true. Useful when any of several conditions will work.  

let isStudent = false; 

let isSenior = true;  

if (isStudent || isSenior) { 

  console.log("Eligible for discount"); 

} 

true || true = true 

true || false = true 

false || true = true 

false || false = false 

NOT (!) 

Reverses a condition. Read !isLoggedIn as "not logged in." 

let isLoggedIn = false; 

if (!isLoggedIn) { 

  console.log("Please log in"); 

} 

!true = false 

!false = true 

Combining Operators 

Use parentheses to group conditions for clarity. 

let age = 25; 

let hasLicense = true; 

let hasInsurance = true;  

if (age >= 18 && hasLicense && hasInsurance) { 

  console.log("Can rent a car"); 

} 

Use parentheses for clarity 

if ((age >= 18 && age <= 65) || isExempt) { 

  console.log("Eligible"); 

} 

Falsy Values 

These six values are falsy. Everything else (including the string "false") is truthy. 

false 

0 

"" (empty string) 

null 

undefined 

NaN 

Using Truthy/Falsy 

let name = ""; 

  

if (name) { 

  console.log(`Hello, ${name}`); 

} else { 

  console.log("No name provided"); 

} 

  

// Shortcut for checking if value exists 

let username = inputValue || "Guest"; 

 

Other conditional patterns: 

Ternary Operator 

Shorthand for simple if/else. Use only for brief assignments, not complex logic. 

  

// condition ? valueIfTrue : valueIfFalse 

  

let age = 20; 

let status = age >= 18 ? "adult" : "minor"; 

  

// Same as: 

let status; 

if (age >= 18) { 

  status = "adult"; 

} else { 

  status = "minor"; 

} 

 

switch Statement 

Use switch when comparing one value against multiple specific cases. Don't forget break. 

  

let day = "Monday"; 

  

switch (day) { 

  case "Monday": 

    console.log("Start of work week"); 

    break; 

  case "Friday": 

    console.log("TGIF!"); 

    break; 

  case "Saturday": 

  case "Sunday": 

    console.log("Weekend!"); 

    break; 

  default: 

    console.log("Regular day"); 

} 

 

Practical examples: 

Form Validation 

This checks that email exists and password meets minimum length before allowing submission. 

  

function validateForm() { 

  let email = document.getElementById('email').value; 

  let password = document.getElementById('password').value; 

  

  if (!email) { 

    alert("Email is required"); 

    return false; 

  } 

  

  if (password.length < 8) { 

    alert("Password must be at least 8 characters"); 

    return false; 

  } 

  

  return true; 

} 

 

Toggle Visibility 

classList.toggle() is cleaner because it handles both adding and removing in one call. 

  

function toggleMenu() { 

  let menu = document.querySelector('.menu'); 

  

  if (menu.classList.contains('hidden')) { 

    menu.classList.remove('hidden'); 

  } else { 

    menu.classList.add('hidden'); 

  } 

  

  // Or simply: 

  menu.classList.toggle('hidden'); 

} 

 

Check User Input 

This gives real-time visual feedback as the user types. 

  

let input = document.querySelector('input'); 

  

input.addEventListener('input', function() { 

  let value = input.value; 

  

  if (value.length === 0) { 

    input.style.borderColor = 'gray'; 

  } else if (value.length < 3) { 

    input.style.borderColor = 'red'; 

  } else { 

    input.style.borderColor = 'green'; 

  } 

}); 

 

 

 

 

 

Arrays and Loops 

 

What is an Array? 

An array stores multiple values in a single variable: 

const fruits = ['Apple', 'Banana', 'Orange']; 

  

// Access by index (starting from 0) 

console.log(fruits[0]);     // 'Apple' 

console.log(fruits[1]);     // 'Banana' 

console.log(fruits[2]);     // 'Orange' 

  

// Get the length 

console.log(fruits.length); // 3 

  

// Get the last item 

console.log(fruits[fruits.length - 1]); // 'Orange' 

 

Modifying Arrays 

push() adds to the end (most common). unshift() adds to the start. 

const fruits = ['Apple', 'Banana', 'Orange']; 

  

// Change an item 

fruits[1] = 'Mango'; 

console.log(fruits); // ['Apple', 'Mango', 'Orange'] 

  

// Add to the end 

fruits.push('Kiwi'); 

console.log(fruits); // ['Apple', 'Mango', 'Orange', 'Kiwi'] 

  

// Add to the beginning 

fruits.unshift('Cherry'); 

console.log(fruits); // ['Cherry', 'Apple', 'Mango', 'Orange', 'Kiwi'] 

 

Removing from Arrays 

pop() removes from the end, shift() from the start. Use splice() to remove by index. 

const fruits = ['Cherry', 'Apple', 'Mango', 'Orange', 'Kiwi']; 

  

// Remove from the end 

const last = fruits.pop(); 

console.log(last);   // 'Kiwi' 

console.log(fruits); // ['Cherry', 'Apple', 'Mango', 'Orange'] 

  

// Remove from the beginning 

const first = fruits.shift(); 

console.log(first);  // 'Cherry' 

console.log(fruits); // ['Apple', 'Mango', 'Orange'] 

 

Searching Arrays 

includes() returns true/false. indexOf() returns the position (or -1 if not found).  

const fruits = ['Apple', 'Mango', 'Orange']; 

  

// Find the index of an item 

console.log(fruits.indexOf('Mango'));     // 1 

console.log(fruits.indexOf('Pineapple')); // -1 (not found) 

  

// Check if item exists 

console.log(fruits.includes('Mango'));    // true 

console.log(fruits.includes('Pineapple')); // false 

 

Array vs String 

string 

const word = 'Apple'; 

console.log(word[0]);     // 'A' 

console.log(word.length); // 5 

// word[0] = 'B';         // This will NOT work! 

array 

const letters = ['A', 'B', 'C']; 

console.log(letters[0]);     // 'A' 

console.log(letters.length); // 3 

letters[0] = 'Z';            // This works! 

console.log(letters);        // ['Z', 'B', 'C'] 

Strings are immutable (cannot be changed) 

Arrays are mutable (can be changed) 

 

The for Loop 

The three parts: initialize, check condition, update. The loop stops when the condition is false. 

  

for (let i = 0; i < 5; i++) { 

  console.log(i); 

} 

// Output: 0, 1, 2, 3, 4 

Initialize: let i = 0 - starting point 

Condition: i < 5 - keep going while true 

Update: i++ - what to do after each loop 

 

Looping Through Arrays 

The most common loop pattern: go from index 0 to array.length - 1.  

const fruits = ['Apple', 'Banana', 'Orange']; 

  

for (let i = 0; i < fruits.length; i++) { 

  console.log(fruits[i]); 

} 

// Output: 

// Apple 

// Banana 

// Orange 

 

The while Loop 

A while loop checks the condition before each iteration. Make sure the counter updates, or you'll loop forever. 

let count = 0; 

  

while (count < 5) { 

  console.log(count); 

  count++; 

} 

// Output: 0, 1, 2, 3, 4 

Use while when you don't know how many iterations you need. 

 

Common Loop Patterns 

Start with total = 0, then add each element. This works for any cumulative calculation. 

const numbers = [10, 20, 30]; 

let sum = 0; 

  

for (let i = 0; i < numbers.length; i++) { 

  sum = sum + numbers[i]; 

} 

console.log(sum); // 60 

 

Common Loop Patterns (cont.) 

Use break to exit the loop once you find what you're looking for. 

const names = ['Alice', 'Bob', 'Charlie']; 

let found = false; 

  

for (let i = 0; i < names.length; i++) { 

  if (names[i] === 'Bob') { 

    found = true; 

    break; // Exit the loop early 

  } 

} 

console.log(found); // true 

 

break and continue 

break exits the entire loop. continue skips the current iteration and moves to the next. 

// break: exit the loop entirely 

for (let i = 0; i < 10; i++) { 

  if (i === 5) break; 

  console.log(i); 

} 

// Output: 0, 1, 2, 3, 4 

  

// continue: skip to next iteration 

for (let i = 0; i < 5; i++) { 

  if (i === 2) continue; 

  console.log(i); 

} 

// Output: 0, 1, 3, 4 

 

for...of Loop 

A cleaner way to loop through arrays when you don't need the index. 

const fruits = ['apple', 'banana', 'cherry']; 

  

// Classic for loop 

for (let i = 0; i < fruits.length; i++) { 

  console.log(fruits[i]); 

} 

  

// for...of - same result, less boilerplate 

for (const fruit of fruits) { 

  console.log(fruit); 

} 

Use for...of when you just need each value. Use classic for when you need the index. 

 

forEach Method 

Arrays have a built-in forEach method that calls a function for each element. 

const fruits = ['apple', 'banana', 'cherry']; 

  

fruits.forEach(function(fruit) { 

  console.log(fruit); 

}); 

  

// With arrow function 

fruits.forEach((fruit, index) => { 

  console.log(`${index}: ${fruit}`); 

}); 

forEach vs for...of: forEach is an array method (can't use break). for...of works on any iterable and supports break/continue. 

 

 

Review Questions 

 

S16 

Where is the <script> tag? 

Above and below javascript text 

How does JavaScript find HTML elements on the page? 

By interacting with the Document Object Model (DOM) 

DOM is a tree-like representation of the web page 

Uses objects to locate specific nodes based on their attributes, tags, or position 

What makes the "Add" button actually do something? 

Event listeners 

AddEventListener() attaches an event handler to a specific element without overwriting existing event handlers 

What does typeof null return? What about typeof []? 

typeof null returns the string ‘object’ 

historical bug in the original implementation of JavaScript, can’t be changed because doing so would break millions of existing websites and applications 

typeof [] returns the string ‘object’ 

Identifies arrays as objects 

What happens if you type let name = "Other" again? Why? 

If you type let name = "Other" a second time in the same scope, JavaScript will throw a SyntaxError 

let keyword was introduced in modern JavaScript specifically to prevent the accidental redeclaration of variables, which often led to bugs when using the older var keyword (like Other) 

What's the difference between let and const? 

let can be reassigned to new values 

const creates an immutable variable that cannot be reassigned once initialized 

 

S17 

You wrote const btn = document.querySelector('button') but clicking the button does nothing. What line of code is missing? 

document.querySelector line only finds the button; it does not assign behavior to it 

An event listener is missing to tell the browser what to do when the button is clicked 

Example: 

// 1. Find the element 
const btn = document.querySelector('button'); 
 
// 2. Add the listener 
btn.addEventListener('click', () => { 
  alert('It works!'); 
}); 

document.querySelector('myButton') returns null, but <button id="myButton"> is right there in the HTML. What's wrong? 

use document.querySelector('#myButton') - include the # 

You changed a heading's color in the Console and it worked. After refreshing the page, it's gone. Why? 

the browser re-downloads the original HTML and CSS files, discarding all temporary changes in local memory 

You see onclick="doSomething()" in someone's HTML. What's a better way to set up that event in JavaScript, and why? 

use the addEventListener() method in a separate JavaScript file or <script> tag 

keeps your logic (JavaScript) separate from your structure (HTML), making the code cleaner and easier to maintain 

Allows for multiple listenersso you can attach multiple functions to a single event on one element. An inline onclick attribute only supports one function and will be overwritten if you try to add another 

What's the difference between let and const? 

let can be reassigned to new values 

const creates an immutable variable that cannot be reassigned once initialized 

What happened when you tried "5" + 3 vs "5" - 3? 

"5" + 3 results in the string "53" (concatenation) 

"5" - 3 results in the number 2 (subtraction) 

+ operator converts the number to a string when a string is present 

- operator forces both sides to become numbers 

 

S18 

You wrote const total = price + tax and got "1005" instead of 15. What happened, and how do you fix it? 

at least one of the variables (price or tax) is a string (text), not a number 

Addition only happens with the + operator when both values are numbers 

If one or both values are strings, both get converted to string 

Switch “10” or “05” to 10 and 05 

Your code has const counter = 0 and later counter = counter + 1. It crashes. Why, and what's the one-word fix? 

Switch const to let, make it mutable 

Rewrite this using a template literal: "Hello, " + name + "! You have " + count + " items." 

Why does 5 == "5" return true but 5 === "5" returns false? 

Loose Equality (==) returns true because it uses type coercion, converts values to match the other before being compared 

Strict Equality (===) returns false because it does not perform type coercion, both the value and the data type must be identical 

What's the difference between a function declaration and an arrow function? 

Function declaration: function name() {} 

Can be called before they are written,  

Arrow function: const name = () => {} 

Can't be called before they are written,  

When would you use if...else if vs a simple if...else? 

if...else if when you have multiple mutually exclusive options 

if...else is used for binary (two-way) decisions 

 

S19 

You wrote function getGrade(score) but calling getGrade(85) returns undefined. What's most likely missing inside the function?  

The getGrade(score) function is missing a return keyword before the value you are trying to output 

Also possible that the logic does not cover all possible score ranges, resulting in no return value 

Your function checks if (score >= 60) first, then else if (score >= 90). What would a student with 95 get? Why? 

Students with >=60 and 95 would all be in the same group and have the same return because the structure is executed sequentially and moves on when a condition is met 

What does this arrow function do? const f = x => x ** 2;  

takes a single input x and returns its square (the value of x raised to the power of 2) 

F(5) = 25, identical to Math.pow(x, 2) 

You wrote let username = prompt("Enter your name"); and the user clicked OK without typing anything. Does if (username) run? 

The block does not run because an empty string is returned and an empty string ("") is considered "falsy" 

An if statement only executes its code block if the value inside is "truthy" 

What's the difference between push() and unshift()? 

The primary difference in the position where they add elements to an array 

push(): Adds one or more elements to the end of an array 

unshift(): Adds one or more elements to the beginning of an array 

When would you use a for loop vs a while loop? 

Use a For Loop When: 

The number of iterations is known 

Iterating over collections 

Readability is a priority 

Limiting variable scope 

Use a While Loop When: 

The number of iterations is unknown 

Waiting for an external event 

Complex or non-counter conditions 

Infinite loops 

 

S20 

You have const items = ['a', 'b', 'c']. What does items.push('d') return? What does the array look like after? 

returns the new length of the array: 4 

Array looks like: ['a', 'b', 'c', 'd'] 

Your friend wrote const colors = ['red', 'blue']; colors = ['green']; and it crashed. Why? How would you add 'green' without crashing? 

Change const to let, const is immutable 

Change Using .push() (Adds to the end) 

const colors = ['red', 'blue']; 
colors.push('green');  
// colors is now ['red', 'blue', 'green'] 

Using .unshift() (Adds to the beginning) 

const colors = ['red', 'blue']; 
colors.unshift('green'); 
// colors is now ['green', 'red', 'blue'] 

What is the difference between items.indexOf('x') and items.includes('x')? When would you use each? 

Return Value: 

indexOf('x') returns the index (a number) of the first occurrence of the element, or -1 if it is not found 

includes('x') returns a boolean (true or false) based on whether the element exists in the array 

Handling NaN: 

indexOf cannot find NaN because it uses strict equality (===), and NaN === NaN is false. It will return -1 even if NaN is present 

includes correctly finds NaN because it uses the SameValueZero algorithm, which treats NaN as equal to itself 

Handling Undefined/Empty Slots: 

includes treats missing or empty array slots as undefined 

indexOf may skip them 

Use includes() when: 

You only need to know if an item exists (e.g., in a conditional if statement). 

Your array might contain NaN. 

You want cleaner, more readable code that clearly expresses intent. 

Use indexOf() when: 

You need the exact position of the element to perform an operation like splice(), slice(), or to find other related data at that index. 

You are working in older environments that do not support ES2016 (though includes is now widely supported) 

When would you use a for loop vs for...of? 

Use a for Loop When: 

You need the index: If your logic requires the current position (index i) of an element, such as for accessing multiple arrays at once or logging progress. 

Complex iteration patterns: Use it for non-sequential jumps, such as skipping every second item (i += 2) or iterating backward through an array. 

Fixed number of runs: When you need to execute code a specific number of times that isn't tied to a data structure's length. 

Performance for massive datasets: In some high-performance scenarios involving hundreds of thousands of items, a traditional for loop may be slightly faster than more modern alternatives.  

Use a for...of Loop When: 

Iterating over values: It is the standard way to loop through the values of iterables like Arrays, Strings, Maps, and Sets without needing a counter variable. 

Readability and simplicity: It provides a cleaner, more concise syntax that is easier to maintain and less prone to "off-by-one" errors. 

Using break or continue: Unlike .forEach(), for...of allows you to prematurely exit or skip iterations using these keywords. 

Asynchronous operations: It is the preferred way to use await inside a loop to ensure that asynchronous calls happen sequentially 

What does break do inside a loop? When is it useful? 

Break ends the loop immediately 

Useful for: 

Searching and ending search after item is found 

Preventing Infinite Loops 

Premature Termination: Used to stop processing when a task is completed early 

Simplifying Code Structure 

 

Truthy/falsy review 

Falsy values: 

False 

0 

“” 

Null 

Undefined 

NaN 

Document.all 

All else is truthy 

Including “0” and “false”, because they are non-empty strings 

[] empty arrays are truthy 

“ “ a string containing a space is non-empty 

You have a loop: for (let i = 0; i < 10; i++). How many times does it run? What's the last value of i inside the loop? 

Runs 10 times (starting with 0), stops at 9 

Your friend wrote a loop to sum an array but the result is always 0. What's probably wrong? 

const nums = [10, 20, 30]; 

for (let i = 0; i < nums.length; i++) { let sum = 0; sum += nums[i]; } 

Let sum = 0 is probably inside the loop, forcing it to reset to 0 on every iteration 

What does for (const item of items) do differently than for (let i = 0; ...)? 

For...of vs for: for...of - iterates over values directly, for – iterates over the index i 

 

4/9 

AI generated a button that doesn't work when clicked. What's the first thing you'd check? 

If it has an event listener 

You ask AI to "show the user's name on the page." It gives you innerHTML instead of textContent. Does it matter? When? 

TextContent is safer for sensitive information, such as usernames, and is more specific about intent of inputs. InnerHTML also works but may have security holes.  

You see const on every variable in AI-generated code. Can you still change an array declared with const? Why or why not? 

You can still modify the array because const locks the binding, not the contents. You can use .push, .pop. Or array[x]=y, but not array = [x].  

AI built a loop but it runs forever. What's the most likely mistake? 

the loop condition never becomes false 

 

 

What’s on the quiz? 

DOM - querySelector, getElementById, textContent, innerHTML 

Events - addEventListener, onclick, event types (click, input, submit) 

Variables & Types - let, const, strings, numbers, booleans, template literals 

Functions - declaring, calling, parameters, return values 

Conditionals - if/else, comparison operators, logical operators 

Arrays - creating, push, pop, includes, indexOf, length 

Loops - for, while, for...of, forEach, break 

 

DOM:  

getElementById - finds one element by its id 

QuerySelector - finds the first element matching any CSS selector 

textContent - gets or sets the plain text inside an element 

innerHTML - gets or sets the HTML inside an element 

Events:  

event object - every handler receives it automatically 

input - fires on every keystroke as the user types 