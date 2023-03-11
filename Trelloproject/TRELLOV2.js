let myTodos={
    day:'Monday',meetings:0,meetdone:0
}
let addmeeting=function (todo,meet=0) {
    todo.meetings= todo.meetings+meet    
}


let meetdone = function(todo,meet=0){
    todo.meetings= todo.meetings-meet
    todo.meetdone=todo.meetdone+meet
}

let resetday=function(todo){
    todo.meetings=0
    todo.meetdone=0
}

let getsummaryofday= function(todo){
    let meetleft=-todo.meetings+todo.meetdone
    return`you have ${meetleft} meetings left today`
}
addmeeting(myTodos,4)
addmeeting(myTodos,2)
meetdone(myTodos,5)
let a= getsummaryofday(myTodos)
console.log(myTodos)
console.log(a)