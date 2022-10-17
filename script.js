const gridDiv = document.querySelector("#grid-container")

function createGrid(size) {

	// clear canvas
	while ( gridDiv.firstChild ) gridDiv.removeChild( gridDiv.firstChild );

	//check prompt
	if (size > 100) {
		alert("No more than 100 squares per line/column");
		size = 16;
	}

	//set size from user input
	gridDiv.style.setProperty('--grid-rows', size);
    gridDiv.style.setProperty('--grid-cols', size);

	//rebuild canvas with new size
	for (let i = 0 ; i<=((size*size - 1)); i++) {
		const gridItems = document.createElement("div")
		gridItems.classList.toggle('grid-squares')
		gridDiv.appendChild(gridItems)
	}

}

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

function interactionLogic(size) {
	createGrid(size);
	const items = gridDiv.querySelectorAll("div")
	const coloredItem = items.forEach( item => item.addEventListener("mouseover", e =>  switchClass(e.target)));

	const clearBtn = document.getElementById("clear");
	clearBtn.addEventListener("click", e => items.forEach(resetClass)); 

}

interactionLogic(16)

const sizeBtn = document.getElementById("size");
sizeBtn.addEventListener("click", function(e) {
	sizeGrid = prompt("what size grid do you need ? (max 100x100)", 16);
	interactionLogic(sizeGrid)
});



