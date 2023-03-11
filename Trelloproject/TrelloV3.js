let myTodos={
    day:'Monday',
    meetings:0,
    meetdone:0,
    addmeeting: function(num){
        this.meetings=this.meetings+num
    },
    meetingdone: function(num){
        this.meetings=this.meetings-num
        this.meetdone=this.meetdone+num
     },

    summary: function(){
        return `you have ${this.meetings} meetings today!`
    },
    reset: function(){
        this.meetings=0
        this.meetdone=0
    }    
}

let myTodostwo={
    day:'tuesday',
    meetings:3,
    meetdone:0,
    addmeeting: function(num){
        this.meetings=this.meetings+num
    },
    meetingdone: function(num){
        this.meetings=this.meetings-num
        this.meetdone=this.meetdone+num
     },
    reset: function(){
        this.meetings=0
        this.meetdone=0
    },  
    summary: function(){
        return `you have ${this.meetings} meetings today!`
    },



}
myTodos.addmeeting(6)
myTodostwo.addmeeting(3)
console.log(myTodos.summary())
console.log(myTodostwo.summary())
console.log(myTodostwo)
console.log(myTodos)
myTodos.meetingdone(4)
console.log(myTodos)
console.log(myTodos.summary())
console.log(myTodostwo.summary())