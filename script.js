document.querySelector("#currentDay").innerHTML = moment().format("MM-DD-YYYY hh:mm")
let currentTime = moment().format("HHHH")

let timeBoxes = document.querySelectorAll(".timebox")
let saveButtons = document.querySelectorAll(".saveBtn")

for(i=0;i<timeBoxes.length;i++){
    let storageSearch = toString(timeBoxes[i].dataset.time)

    if(localStorage.getItem(storageSearch)){
        timeBoxes[i].children[1].value = localStorage.getItem(storageSearch)
    }

    saveButtons[i].addEventListener("click",function(event){
        let content = event.target.previousElementSibling.value;
        let label = event.target.parentElement.dataset.time;
        console.log(label);
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
$("#zero .description").val(localStorage.getItem("0000"))
$("#one .description").val(localStorage.getItem("0100"))
$("#two .description").val(localStorage.getItem("0200"))
$("#three .description").val(localStorage.getItem("0300"))
$("#four .description").val(localStorage.getItem("0400"))
$("#five .description").val(localStorage.getItem("0500"))
$("#six .description").val(localStorage.getItem("0600"))
$("#seven .description").val(localStorage.getItem("0700"))
$("#eight .description").val(localStorage.getItem("0800"))
$("#nine .description").val(localStorage.getItem("0900"))
$("#ten .description").val(localStorage.getItem("1000"))
$("#eleven .description").val(localStorage.getItem("1100"))
$("#twelve .description").val(localStorage.getItem("1200"))
$("#thirteen .description").val(localStorage.getItem("1300"))
$("#fourteen .description").val(localStorage.getItem("1400"))
$("#fifteen .description").val(localStorage.getItem("1500"))
$("#sixteen .description").val(localStorage.getItem("1600"))
$("#seventeen .description").val(localStorage.getItem("1700"))
$("#eighteen .description").val(localStorage.getItem("1800"))
$("#nineteen .description").val(localStorage.getItem("1900"))
$("#twenty .description").val(localStorage.getItem("2000"))
$("#twenty-one .description").val(localStorage.getItem("2100"))
$("#twenty-two .description").val(localStorage.getItem("2200"))
$("#twenty-three .description").val(localStorage.getItem("2300"))