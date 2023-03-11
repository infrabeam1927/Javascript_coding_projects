// const days =['Mon','Tue','Wed','Thu','Fri','Sat']

// for (let i = 0; i < days.length; i++) {
//     const element = days[i];
//     console.log(element)
    
// }
const myTodos=[]

myTodos.push('buy bread')
myTodos.push('record videos')
myTodos.push('record thing')
myTodos.push('go to hym')

myTodos.forEach(function (todo,i) {
    console.log(`your task no. ${i} is ${todo}`);
    
})
