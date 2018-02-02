/* with a help from StackOverflow:
https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript
*/

	
	function createGridCell(){
		var gridCell = document.createElement('div');
		
		gridCell.className ='gridCell';
		gridCell.innerHTML = ' ';
		
		return gridCell;
	};

	function createBoardContainer(gridNumber){
		var board = document.getElementById('board');
		var myDivs = [];
		var numOfDivs = gridNumber * gridNumber;
		var i = 0;
		board.innerHTML = "";
		for (i; i < numOfDivs; i++){
			myDivs.push(createGridCell());
			board.appendChild(myDivs[i]);
		}
	};

	var gridNumber = 16;
	createBoardContainer(gridNumber);
	
	var board = document.getElementById("board");
	board.addEventListener("mouseover",function(event){
			event.target.style.backgroundColor = "black";
							
		});
	
	var handlers = {
		resetGrid: function(){

			var resetGridButton = document.getElementById("reset");
			resetGridButton.addEventListener("click", createBoardContainer());
			resetGridButton.addEventListener("click", function(){
				gridNumber = parseInt(prompt('how big the grid?',16),10);
				return gridNumber;
			});
		}
	}








