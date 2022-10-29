let saveel = document.getElementById("save-el")
let countel = document.getElementById("count-el")

console.log(saveel);
console.log(countel)

let count =0
function increment(){
    count +=1
    countel.innerText = count
} 
function save(){
     let countstr = " "+count + " - " 
     saveel.textContent += countstr 
     countel.textContent = count = 0
}