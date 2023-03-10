//&& - AND operator
// || -or operator
let isVerified=true
let isLoggedin=true
let hasPayemntToken= false
let isGuest=true

if (isVerified && isLoggedin && hasPayemntToken) {
    console.log('greetig maessage to user')   
    console.log('access granted')
}else if (isVerified|| isGuest) {
    console.log('allow free previw')
    
} else {
    console.log('Message admin for more info')
    
}