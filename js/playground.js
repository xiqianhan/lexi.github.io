function showStar(){
	var width = document.getElementById("playground").offsetWidth;
	var svg = d3.select("#playground").select("svg")
      .attr("width","100%")
      .attr("height","100%");
	var colors = ['#1f77b4','#aec7e8','#ff7f0e','#ffbb78','#2ca02c','#98df8a','#d62728','#ff9896','#9467bd','#c5b0d5','#8c564b','#c49c94','#e377c2','#f7b6d2','#7f7f7f','#c7c7c7','#bcbd22','#dbdb8d','#17becf','#9edae5'];
	var stars = svg	
	.append("polygon")
	.attr("points",function(d){
		var size = Math.floor(Math.random() * 50)
		var startpointX = Math.floor(Math.random() * width);
		var startpointY = Math.floor(Math.random() * width);
		var leftbottomX = startpointX - (size / 3);
		var leftbottomY = startpointY + size;
		var lefttopX = startpointX - (size / 2);
		var lefttopY = startpointY + (size / 3);
		var righttopX = startpointX + (size / 2);
		var righttopY = lefttopY;
		var rightbottomX = startpointX + (size / 3);
		var rightbottomY = leftbottomY;
		return startpointX + "," + startpointY + " " + leftbottomX + "," + leftbottomY + " " + righttopX + "," + righttopY + " " + lefttopX + "," + lefttopY + " " + rightbottomX + "," + rightbottomY;
	})
	.style("fill",function(d,i){
		var n = Math.floor(Math.random() * 19);
		return colors[n];
	})
	.style("opacity",0)
	.transition()
	.duration(1000)
	.style("opacity",0.8)	
	.transition()
	.styleTween("fill",function(d,i,a){
		var n = Math.floor(Math.random() * 19);
       return d3.interpolate(a, colors[n]); 
	})
	.transition()
	.duration(1000)
	.style("opacity",0)
	.remove();
}