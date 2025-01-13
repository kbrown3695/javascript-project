/* let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + "-";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
 
console.log("let's count people on the subway");*/

// two variables
/* let firstName = "Brown";
let lastName = "Kennedy";

// concatenate the two variables
let fullName = firstName + " " + lastName;

// log fullname
console.log(fullName); */
// Open the browser console to see the output
// In most browsers, you can open the console with F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)

// To open the console in VS Code editor, you can use the shortcut Ctrl+` (backtick) or go to View > Terminal

// To run JavaScript code in the browser console, simply type your code and press Enter

// To run JavaScript code in the VS Code terminal, you need to have Node.js installed
// Then you can run your JavaScript file by typing `node /d:/counting-project/index.js` and pressing Enter

/* let name = "linda";
let greeting = "hi there";

function greetLinda() {
    console.log(greeting + ", " + name  + "!");
}
greetLinda();  */

/* let myPoint = 3;

function add3points() {
    myPoint += 3;
}

function remove1pont() {
    myPoint -= 1;
}

add3points();
add3points();
add3points();
remove1pont();
remove1pont();
console.log(myPoint) ; */

/* console.log("2" + 2);
console.log(11 + 7);
console.log(6 + "5");
console.log("My point: " + 5 + 5);
console.log(2 + 2);
console.log("11" + "14"); */
let errorParagraph = document.getElementById("error");
console.log(errorParagraph);


function Purchase() {
    console.log("button clicked");
    errorParagraph.textContent="Something went wrong please try again!";
}

