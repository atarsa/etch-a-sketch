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
/*
Using Css variables in js
with a help of this article:
 https://medium.com/@fionnachan/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
*/ 

	let htmlStyles = window.getComputedStyle(document.querySelector("html"));
	let columnNumber = parseInt(htmlStyles.getPropertyValue("--columnNumber"));
	
	createBoardContainer(columnNumber);
	
	var board = document.getElementById("board");
	board.addEventListener("mouseover",function(event){
			event.target.style.backgroundColor = "black";
							
		});
	
	var handlers = {
		resetGrid: function(){

			var resetGridButton = document.getElementById("reset");
			resetGridButton.addEventListener("click", function(){
				gridNumber = parseInt(prompt('how big the grid?'),10);
				document.documentElement.style.setProperty("--columnNumber", gridNumber);
				createBoardContainer(gridNumber);
			});
		}
	}








