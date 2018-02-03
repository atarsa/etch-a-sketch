	/* create boardContainer with a help from StackOverflow:
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
		Using Css variables in js with a help of this article:
		https://medium.com/@fionnachan/dynamic-number-of-rows-and-columns-with-css-grid-layout-and-css-variables-cb8e8381b6f2
		*/ 

	let htmlStyles = window.getComputedStyle(document.querySelector("html"));
	let columnNumber = parseInt(htmlStyles.getPropertyValue("--columnNumber"));
	
	createBoardContainer(columnNumber);
	
	var board = document.getElementById("board");
	board.addEventListener("mouseover",function(event){
		
		if (board.classList[1] === "randomColor"){
			event.target.style.backgroundColor = createRandomColor();
		} else if (board.classList[1] === "eraser"){
			event.target.style.backgroundColor = "#ededed"

		} else if (board.classList[1] === "colorPicked") {
			event.target.style.backgroundColor = colorPickerButton.value;
		} else 	{
			event.target.style.backgroundColor = "#000";
		}
							
	});
	/*
	buttons global variabls
	*/
	var resetGridButton = document.getElementById("reset");
	var blackColorButtun = document.getElementById("blackColor");
	var colorPickerButton = document.getElementById("colorPicker");
	var randomColorButton = document.getElementById("randomColor");
	var eraserButton = document.getElementById("eraser");
	
	/*
	Helpers functions
	*/
	// A function to create random number from min to max
	function getRandomInt(min,max){
		min = Math.ceil(min);
		max = Math.floor(max)
		return Math.floor(Math.random()* (max - min) + min);
	
	};

	function createRandomColor(){
		var r = getRandomInt(0,256);
		var g = getRandomInt(0,256);
		var b = getRandomInt(0,256);
		return "rgb(" + r + "," + g + "," + b + ")";
	}

	function removeClass(){
		var classToBeRemoved = board.classList.item(1);
		board.classList.remove(classToBeRemoved);
	}

	var handlers = {
		resetGrid: function(){
			view.resetGrid();
		},
		blackColor: function(){
			view.blackColor();
		},
		colorPicker: function(){
			view.colorPicker();
		},
		randomColor: function(){
			view.randomColor();
		},
		eraser: function(){
			view.eraser();
		}
		
	}

var view = {
	resetGrid: function(){
		gridNumber = parseInt(prompt('How many squares per side would you like? (Default: 16)'),10);
		document.documentElement.style.setProperty("--columnNumber", gridNumber);
		createBoardContainer(gridNumber);
		removeClass();
	},
	blackColor: function(){
		removeClass();
		board.classList.add("blackColor");
	},
	colorPicker: function(){
		removeClass();
		board.classList.add("colorPicked");
	},
	randomColor: function(){
		removeClass();
		board.classList.add("randomColor");
	},
	eraser: function(){
		removeClass();
		board.classList.add("eraser");
	},
	setUpEventListeners: function() {
		var buttons = document.getElementsByClassName("btn");
		var numButtons = buttons.length;
		
		for (var i = 0; i < numButtons; i++){
			buttons[i].addEventListener("click", function(event){
			var elementClicked = event.target;
			});
		};
	}			
};
view.setUpEventListeners();






