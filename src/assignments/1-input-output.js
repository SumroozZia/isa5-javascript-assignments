/*
Program 1: Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/
// start here writing the code for program1

let firstName = prompt("Enter your name")
let lastName = prompt("Enter last Name","") 


console.log(`${firstName}${lastName}`)

let fullName = firstName + lastName

let nameLength = fullName.length

console.log(nameLength)

let uppercaseName = fullName.toUpperCase()
console.log(uppercaseName)

let thirdLetterOfName = fullName.slice(2,3)
console.log(thirdLetterOfName)
