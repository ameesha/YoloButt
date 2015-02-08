function getCurrentContent(){
	console.log("hello");
	
	root = document.getElementByTagName("HTML");
	rootNode = root[0]
	for (var i = 0; i < allNodes.length; i++){
		if (allNodes[i].nodeType == 3){
			text = allNodes[i].textContent;
			text.replace(/[a-z]+/g, "yolo");
			allNodes[i].textContent = text;
		}
	}


	// text = document.body.innerText;
	// if(text){
	// 	text = text.replace(/[a-z]+/g, "yolo");
	// 	//document.body.innerText = text;
	// 	//	alert("hurrah!");
}

window.addEventListener('load', function() {
	this.getCurrentContent();
});