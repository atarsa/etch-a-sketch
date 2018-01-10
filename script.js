/* with a help from StackOverflow:
https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript
*/

(function (){
	"use strict";
	
	function createGridDiv(){
		var gridDiv = document.createElement('div');
		
		gridDiv.className ='gridDiv';
		gridDiv.innerHTML = ' ';
		
		return gridDiv;
	};

	function createContainer(){
		var container = document.querySelector('#container');
		var myDivs = [];
		var numOfDivs = 256;
		var i = 0;

		for (i; i < numOfDivs; i++){
			myDivs.push(createGridDiv());
			container.appendChild(myDivs[i]);
		}
	}
	
	createContainer();
}());

 





