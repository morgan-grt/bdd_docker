let div = d3.select("#text-div-custom");
let button = d3.select("#btn-hide");
let button2 = d3.select("#btn-text-hide");
$("#btn-text-hide").hide();

let hide = function(event) {
	$("#text-div-custom").toggle('slide');
	$("#btn-hide").toggleClass('btn-hide-active');
	$("#btn-text-hide").toggle('slide');
};

button.on("click", hide);
button2.on("click", hide);
div.on("click", hide);