// WHERE ARE THE DURGS???
// WHERE IS HERVY DUNT???
// CAN WE TRUST HURBY DONT??
// AWLFWED... WE NEED BWEAKFEST!


function toBinary(val) {
    let remainder = 0;
    let temp = "";
    let binVal = "";
    while( val > 0){
        remainder = val%2;
        temp += remainder;
        val = Math.floor(val / 2);
    }
    for(var i = temp.length-1; i >= 0; i--){
        binVal += temp[i];
    }
    return binVal;
}

console.log(toBinary(14));

