/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message*/
// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//Calling a function with by default value
make_shirt();
//Calling a function now with medium size and default message
make_shirt("Medium");
//Calling a function now with small size and also different print message
make_shirt("Small", "I Love JavaScript");
