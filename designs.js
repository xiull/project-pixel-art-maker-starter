// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
	const row=document.getElementById("inputHeight").value;
	const col=document.getElementById("inputWeight").value;
	const table=$('#pixelCanvas');
	let tabletr=new Array(row);
	for(let i=1;i<=row;i++){
		tabletr[i]=document.createElement("tr");
		table.append(tabletr[i]);
		for(let j=1;j<=col;j++){
			tabletr[i][j]=document.createElement("td");
			tabletr[i].append(tabletr[i][j]);
		}
	}
}

$('input[type="submit"]').on('click',function(){
	$('#pixelCanvas').empty();//clean origin Canvas
	document.getElementById("colorPicker").value='#000000';//restore default color
	makeGrid();//create a canvas
	return false;//prevent form submission
})

//change the color of table
$('#pixelCanvas').on('click','td',function(){
	let color=document.getElementById("colorPicker").value;
	$(this).css('background-color',color);
})