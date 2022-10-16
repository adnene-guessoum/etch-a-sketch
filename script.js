const gridDiv = document.querySelector("#grid-container")

for (let i = 0 ; i<=255; i++) {

const gridItems = document.createElement("div")
gridItems.classList.toggle('grid-squares')
gridDiv.appendChild(gridItems)

}

const items = gridDiv.querySelectorAll("div")

function switchClass(obj) {
	/*
	obj.classList.toggle('grid-squares');
	obj.classList.toggle('color-switch')
	*/

	obj.classList.remove('grid-squares');
	obj.classList.add('color-switch')

}

function resetClass(obj) {
	obj.classList.add('grid-squares');
	obj.classList.remove('color-switch')
}

const coloredItem = items.forEach( item => item.addEventListener("mouseover", e =>  switchClass(e.target)));

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", e => items.forEach(resetClass)); 
