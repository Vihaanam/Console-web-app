console.log("Hi viewer! This is my first project focusing on the console and the first project on Visual Studio overall. I have provided you with a calculator. I also have provided an area on which you can do whatever you want to words. Don't forget to read the information and share it with others who want to view consoles. Thankyou! (For more information about what is happening in this project, keep looking at the console!) Thank you !(For the final time)!");
var fullword = "";
function add() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_add = parseInt(number1) + parseInt(number2);
    console.log(result_add);
    document.getElementById("result_of_calc").innerHTML = result_add;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_add + ", (check console)");
}
function subtract() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_subtract = parseInt(number1) - parseInt(number2);
    console.log(result_subtract);
    document.getElementById("result_of_calc").innerHTML = result_subtract;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_subtract + ", (check console)");
}
function multiply() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_multiply = parseInt(number1) * parseInt(number2);
    console.log(result_multiply);
    document.getElementById("result_of_calc").innerHTML = result_multiply;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_multiply + ", (check console)");
}
function divide() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_divide = parseInt(number1) / parseInt(number2);
    console.log(result_divide);
    document.getElementById("result_of_calc").innerHTML = result_divide;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_divide + ", (check console)");
}
function maxi() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_max = Math.max(parseInt(number1), parseInt(number2));
    console.log(result_max);
    document.getElementById("result_of_calc").innerHTML = result_max;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_max + ", (check console)");
}
function mini() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_min = Math.min(parseInt(number1), parseInt(number2));
    console.log(result_min);
    document.getElementById("result_of_calc").innerHTML = result_min;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_min + ", (check console)");
}
function power() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var number2 = document.getElementById("number_2").value;
    console.log(number2);
    var result_pow = Math.pow(parseInt(number1), parseInt(number2));
    console.log(result_pow);
    document.getElementById("result_of_calc").innerHTML = result_pow;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    window.alert("The answer is " + result_pow + ", (check console)");
}
function root() {
    var number1 = document.getElementById("number_1").value;
    console.log(number1);
    var result_sqrt = Math.sqrt(parseInt(number1));
    console.log(result_sqrt);
    document.getElementById("result_of_calc").innerHTML = result_sqrt;
    document.getElementById("number_1").value = "";
    window.alert("The answer is " + result_sqrt + ", (check console)");
}
function join() {
    var word1 = document.getElementById("word_1").value;
    console.log(word1);
    var word2 = document.getElementById("word_2").value;
    console.log(word2);
    fullword = word1.concat(word2);
    console.log(fullword);
    document.getElementById("joined_word").innerHTML = fullword;
    window.alert("The full word is " + fullword + ", (view console)");
}
function upper() {
    var upper_word = fullword.toUpperCase();
    console.log(upper_word);
    document.getElementById("joined_word").innerHTML = upper_word;
}
function lower() {
    var lower_word = fullword.toLowerCase();
    console.log(lower_word);
    document.getElementById("joined_word").innerHTML = lower_word;
}