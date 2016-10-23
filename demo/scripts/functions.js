
// split, match, substric, replace, join

var colorsArray = [
	[255, 0, 0], 
	[0, 255, 0], 
	[0, 0, 255], 
	[0, 0, 0], 
	[255, 255, 255]
];

var leftColor = "white";
var rightColor = "white";
var middleColor = null

function disableClick(event){
	if (event.which == 2)
		return false;
}

function mixColors(colorA, colorB){
	var newColor = [];
	var firstColor = colorA.substring(4, colorA.length-1).replace(/ /g, '').split(',');
	var secondColor = colorB.substring(4, colorB.length-1).replace(/ /g, '').split(',');

	for (index = 0; index < 3; index++)
		newColor.push(parseInt(firstColor[index] / 2) + parseInt(secondColor[index] / 2));

	console.log(firstColor + "/" + secondColor + "/" + newColor);
	return newColor;
}

function combineClick(){
	$(document).ready(function(){
		var colorA = $('#left').attr("fill")
		var colorB = $('#right').attr("fill");
		var newColor =  mixColors(colorA, colorB).join(',');

		$("#middle").attr("fill", 'rgb(' + newColor + ')');
	});
}

function getColorMouseDown(event){
	switch(event.which){
		case 1:
			console.log("Mouse left");
			leftColor = $(this).attr("fill");
			leftBox.attr("fill", leftColor);
			break;
		case 2:
			console.log("Mouse middle");
			break;
		case 3:
			console.log("Mouse right");
			rightColor = $(this).attr("fill");
			rightBox.attr("fill", rightColor);
			break;
		default:
			console.log("Mouse wtf");
			break;
	}
}

function switchColors(){
	var colorA = $("#left").attr("fill");
	var colorB = $("#right").attr("fill")
	var temp = colorA;

	colorA = colorB;
	colorB = temp;

	$("#left").attr("fill", colorA);
	$("#right").attr("fill", colorB);

}

$(document).ready(function () {
	var leftBox = $('#left')
	var rightBox = $('#right')

	$('.svg-get-color').each(function (index) {
		var yAxis = 50
		var circleRadius = parseInt($(this).attr('r')) - 5
		var combineBox = $('#middle')

		$(this).attr('fill', 'rgb(' + colorsArray[index].join(',') + ')');
		$(this).attr('r', circleRadius.toString());
		$(this).attr('cx', (index * 125 + circleRadius + 5).toString());
		$(this).attr('cy', yAxis.toString());
	
		$(this).mousedown(function (event){
			switch(event.which){
				case 1:
					console.log("Mouse left");
					leftColor = $(this).attr("fill");
					leftBox.attr("fill", leftColor);
					break;
				case 2:
					console.log("Mouse middle");
					break;
				case 3:
					console.log("Mouse right");
					rightColor = $(this).attr("fill");
					rightBox.attr("fill", rightColor);
					break;
				default:
					console.log("Mouse wtf");
					break;
			}
		});
	});

	$('.svg-get-color').on('click', function (event) {
		console.log($(this).attr('fill'))
	})

	$('.svg-get-color').hover(function () {
		$(this).css('cursor', 'pointer')
	});

	$('#combine-button').hover(function () {
		$(this).css('cursor', 'pointer')
	});

	$("#left, #right").mousedown(function(event){
		if (event.which == 2)
			switchColors();
	});

	$("#middle").mousedown(function (event){
			switch(event.which){
				case 1:
					console.log("Mouse left");
					leftColor = $(this).attr("fill");
					leftBox.attr("fill", leftColor);
					break;
				case 2:
					console.log("Mouse middle");
					break;
				case 3:
					console.log("Mouse right");
					rightColor = $(this).attr("fill");
					rightBox.attr("fill", rightColor);
					break;
				default:
					console.log("Mouse wtf");
					break;
			}
		});

	$("#middle").hover(function(){
		$(this).css('cursor', 'pointer')		
	});

	$("#big-svg>g").attr("transform", "translate(0, 100)");

	console.log($("#big-svg>g>circle").length + " circles ");

	$("#big-svg>g>circle").each(function(index){
		
	});

	$("#big-svg>g>circle").hover(function(){
		if ($(this).attr("fill") != "black"){
			$(this).attr("fill", $("#left").attr("fill"));
			console.log("1");
		}
	});

	document.onmousedown = disableClick;
});
