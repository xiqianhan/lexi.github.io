function drawSkill(){
	var svg = d3.select("body").select("#skills").append("svg");
	svg.attr("width", "100%")
	.attr("height", "100%");

	var width = d3.select("body").style("width");
	width = width.substring(0, width.length - 2);
	width = parseInt(width);

	var g = svg.append("g")
	.attr("transform","translate(" + (width * 0.2) + ",0)");
}