let customSelect = document.getElementById("custom-select");
let listItems = document.querySelectorAll(".dropdown-list-item")
let currentSelected = document.querySelector(".current-selected span")

customSelect.addEventListener("click", () => {
    customSelect.classList.toggle("active");
})

listItems.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        currentSelected.innerText = e.target.innerText;
    })
})

