let myMulyiplier= function (num1, num2){
    return num1*num2;
}

let guestUser = function (name='unName', courseCount=0) {
    return 'hello '+name +' and your course count is '+ courseCount;   
}

guestUser()

console.log(guestUser())
console.log(guestUser('John',5))