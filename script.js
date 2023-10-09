/*const arr = ['alma', "körte", "banán"]
arr.push("szilva", "birs", "szőlő")

console.log(arr.join()) */


const users = [
    {
        name: "Gipsz Jakab",
        age: 26
    },
    {
        name: "Kovács János",
        age: 54
    },
    {
        name: "Hamza Bernadett",
        age: 23
    }
]

//const userNames = []

//const result = users.forEach((user) => userNames.push(user.name))*/

const userNames = users.map((user, index) => {
   return {
    name: user.name,
    age: user.age,
    id: index + 1
   }
   
})
//EZZEL TULAJDONKÉPPEN EGY ÚJ TÖMBÖT CSINÁLTUNK, AMI UGYANAZOKBÓL AZ ELEMEKBŐL ÁLLNAK, CSAK MI ADJUK MEG, HOGY MIBŐL ÁLL ÉS KAP EGY ID-T IS
console.log(userNames)

//console.log(result)