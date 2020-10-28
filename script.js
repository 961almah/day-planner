document.querySelector("#currentDay").innerHTML = moment().format("MM-DD-YYYY hh:mm")
let currentTime = moment().format("HHHH")

let timeBoxes = document.querySelectorAll(".timebox")
let saveButtons = document.querySelectorAll(".timebox > button")

for(i=0;i<timeBoxes.length;i++){
    let storageSearch = toString(timeBoxes[i].dataset.time)

    if(localStorage.getItem(storageSearch)){
        timeBoxes[i].children[0].value = localStorage.getItem(storageSearch)
    }

    saveButtons[i].addEventListener("click",function(event){
        let content = event.target.previousElementSibling.value;
        console.log(event.target.parentElement.dataset.time);
        localStorage.setItem(label,content);
    })
    if(timeBoxes[i].dataset.time < currentTime){
        timeBoxes[i].classList.add("past");
    }
    else if(timeBoxes[i].dataset.time == currentTime){
        timeBoxes[i].classList.add("present")
    }
    else if(timeBoxes[i].dataset.time > currentTime){
        timeBoxes[i].classList.add("future")
    }
}