const form = document.querySelector("form")
const boxParent = document.querySelector(".boxParent")



form.addEventListener("submit",(e)=>{

let name = e.target.username.value
let email = e.target.email.value
let phone = e.target.phone.value


let localData = JSON.parse(localStorage.getItem("sutdentData")) || []


localData.push({
    name: name,
    email: email,
    phone: phone
})
localStorage.setItem("sutdentData", JSON.stringify(localData))

e.target.reset()
displayData()
e.preventDefault()
})
//Display Data
const displayData = ()=>{
    let localData = JSON.parse(localStorage.getItem("sutdentData")) || []
    let dData=""
localData.forEach((element, index) => {
dData+=`<div class="userBox">
<span onclick = "removeData(${index})"  class="cross">&times;</span>
<h5>Name:</h5>
<span>${element.name}</span>
<h5>Email:</h5>
<span>${element.email}</span>
<h5>Phone:</h5>
<span>${element.phone}</span>

</div>`


});
boxParent.innerHTML= dData
}

displayData()

//...Remove Data

const removeData = (index)=>{
    let localData = JSON.parse(localStorage.getItem("sutdentData")) || []
   localData.splice(index,1)
   localStorage.setItem("sutdentData", JSON.stringify(localData))
 displayData()
}