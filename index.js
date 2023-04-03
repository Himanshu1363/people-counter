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








