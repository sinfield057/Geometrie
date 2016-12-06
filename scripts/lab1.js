var Coord = function(x, y, z) {
	return {
		"x" : x,
		"y" : y,
		"z" : z
	}
}

var runLab1 = function(){
	var a = new Coord(
		parseInt(document.getElementById('A1.x').value), 
		parseInt(document.getElementById('A1.y').value), 
		parseInt(document.getElementById('A1.z').value));
	var b = new Coord(
		parseInt(document.getElementById('A2.x').value), 
		parseInt(document.getElementById('A2.y').value), 
		parseInt(document.getElementById('A2.z').value));
	var c = new Coord(
		parseInt(document.getElementById('A3.x').value), 
		parseInt(document.getElementById('A3.y').value), 
		parseInt(document.getElementById('A3.z').value));

	console.log(a,b,c);

	if ( JSON.stringify(a) === JSON.stringify(b) ) {
		document.getElementById('ex1Result').innerHTML = "Coliniare \nA1 = A2 * 1 + 0 * A3";
		document.getElementById('ex1Lambda').innerHTML = 0;
	} else {
		if ( (c.x - a.x) * (b.y - a.y) == 
			 (b.x - a.x) * (c.y - a.y) && 
			 (c.x - a.x) * (b.z - a.z) == 
			 (b.x - a.x) * (c.z - a.z) ) {

			var lambda = 0;

	        if(a.x != b.x) {
	            lambda = (c.x - a.x) / (b.x - a.x);
	        } else {
	        	if(b.y != a.y) {
	                lambda = (c.y - a.y) / (b.y - a.y);
	            } else {
	                if(b.z != a.z) {
	                    lambda = (c.z - a.z) / (b.z - a.z);
	                }
	            }
	        }

			document.getElementById('ex1Result').innerHTML = "Coliniare \n A3 = " + (1 - lambda) + " * A1 + " + lambda + " * A2";
			document.getElementById('ex1Lambda').innerHTML = lambda;
		} else {
			document.getElementById('ex1Result').innerHTML = "Necoliniare";
			document.getElementById('ex1Lambda').innerHTML = '-';
		}
	
	}
}

document.getElementById('A1.x').oninput = runLab1;
document.getElementById('A1.y').oninput = runLab1;
document.getElementById('A1.z').oninput = runLab1;

document.getElementById('A2.x').oninput = runLab1;
document.getElementById('A2.y').oninput = runLab1;
document.getElementById('A2.z').oninput = runLab1;

document.getElementById('A3.x').oninput = runLab1;
document.getElementById('A3.y').oninput = runLab1;
document.getElementById('A3.z').oninput = runLab1;