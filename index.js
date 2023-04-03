let saveEl= document.getElementById("saveEl")
let countEl=document.getElementById("count")
 let count = 0
 function incerment() {
    count += 1 
    countEl.textContent=count

 }
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent =0
    count = 0
}

let myPoints = 3
function add3points(){
    myPoints += 3
}

console.log(myPoints)



let err = document.getElementById ("error")
 let a = "something went wrond, please try again"
 function ren()
 {
 err.textContent = a
 }

let firstName = "himanshu"
let lastName = "sharma"
let fullName = firstName +" " + lastName
console.log(fullName)


