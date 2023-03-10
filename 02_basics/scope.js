// difference between var and let
// let iglobal='someValue'
// console.log(iglobal);
// if(true){
//     var iamlocal='sommorevalue'
//     iglobal='superman'
//     console.log(iglobal);
//     console.log(iamlocal);
// }
// console.log(iglobal);
// console.log(iamlocal);


//kings teritory problem

let king='John'

if (true) {
    let king='sam'
    if (true) {
        //let king='Aaadi'
        console.log(king)        
    }
    
}
if (true) {
    console.log('I am seconf part' + king);
}  
