const numbers=['one','two','three','four','five','six']
// numbers.shift()
// console.log(numbers.shift())
// console.log(numbers)
// console.log(numbers.unshift('something'))
// console.log(numbers)

//end

console.log('the element to be delted is  '+ numbers.pop())
console.log(numbers)

numbers.push('Seven')
console.log(numbers)

numbers.splice(2,1,'something')
console.log(numbers)

numbers.splice(2,3,'something')
console.log(numbers)
