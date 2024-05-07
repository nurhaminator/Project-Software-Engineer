const word = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function checked(){
    const value = input.value
    const reverse = reverseString(value);


    if (value == reverse){
        alert(value + " is a palindrome.")
    }
    else {
        alert(value + " is not a palindrome.")
    }

    input.value = "";
    
}