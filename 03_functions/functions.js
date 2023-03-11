//consolelog is a function
let sayHello = function (name) {
    console.log(`GREEETINGS OLD ${name}`)
    console.log(`HEY ${name}`)
    
}
sayHello('john')

let fullname= function (firstName, lastName) {
    console.log('Welcome to Lco')  
    console.log(`Happy to have you here ${firstName} ${lastName}`)      
}
fullname('Aadi', 'roshan')

let myaddr=function (num1,num2) {
        let added=num1+num2;
        return added
}
let result=myaddr(3,5)
console.log(result)