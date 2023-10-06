/*function myFunc() {
    console.log('This is my function.')
}

myFunc() */

/*function greetMe(parameter) {
    console.log(`szia ${parameter}`)

}
greetMe("argumentum")*/

/*function addTwoNumbers(number1, number2) {
    let sum = number1 + number2
    console.log(`the sum of two numbers (${number1}, ${number2}) is: ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`the result of resultOfAddTwoNumbers: ${resultOfAddTwoNumbers}`)*/

function cbExample() {
    console.log("i am a callback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Berni", cbExample)