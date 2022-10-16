
const gridDiv = document.querySelector("#grid-container")

for (let i = 0 ; i<=255; i++) {

const gridItems = document.createElement("div")
gridItems.classList.toggle('grid-squares')
gridDiv.appendChild(gridItems)

}



