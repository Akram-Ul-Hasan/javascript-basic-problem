const reverseString = inputString => {

let outputString = "";

for( let i of inputString){
    outputString= i + outputString;
}

return outputString;

}
reverseString("Hello World");