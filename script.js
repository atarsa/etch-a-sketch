/* with a help from StackOverflow:
https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript
*/

(function (){
	"use strict";
	
	function createGridCell(){
		var gridCell = document.createElement('div');
		
		gridCell.className ='gridCell';
		gridCell.innerHTML = ' ';
		
		return gridCell;
	};

	function createBoardContainer(){
		var board = document.getElementById('board');
		var myDivs = [];
		var numOfDivs = 16*16;
		var i = 0;

		for (i; i < numOfDivs; i++){
			myDivs.push(createGridCell());
			board.appendChild(myDivs[i]);
		}
	};

	createBoardContainer();
	
	var board = document.getElementById("board");
	board.addEventListener("mouseover",function(event){
			event.target.style.backgroundColor = "black";
							
		});
	
}());







