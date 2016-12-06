var ecDreapta = function(x, y, x1, y1, x2, y2) {
	return x*y1 + x1*y2 + x2*y - y1*x2 - x*y2 - y*x1;
}

var perimetru = function(x1, y1, x2, y2, x3, y3) {
	return Math.abs(ecDreapta(x1, y1, x2, y2, x3, y3)) / 2;
}

var punct = function(x, y){
	this.x = x;
	this.y = y;
}

var runLab2 = function() {
	var a1 = new punct(
		parseInt(document.getElementById('A1.x').value), 
		parseInt(document.getElementById('A1.y').value));
	var a2 = new punct(
		parseInt(document.getElementById('A2.x').value), 
		parseInt(document.getElementById('A2.y').value));
	var a3 = new punct(
		parseInt(document.getElementById('A3.x').value), 
		parseInt(document.getElementById('A3.y').value));
	var a4 = new punct(
		parseInt(document.getElementById('A4.x').value), 
		parseInt(document.getElementById('A4.y').value));

	console.log(a1, a2, a3, a4);

	if (ecDreapta(a3.x, a3.y, a1.x, a1.y, a2.x, a2.y) * ecDreapta(a4.x, a4.y, a1.x, a1.y, a2.x, a2.y) > 0 &&
		ecDreapta(a1.x, a1.y, a2.x, a2.y, a3.x, a3.y) * ecDreapta(a4.x, a4.y, a2.x, a2.y, a3.x, a3.y) > 0 &&
		ecDreapta(a1.x, a1.y, a3.x, a3.y, a4.x, a4.y) * ecDreapta(a2.x, a2.y, a3.x, a3.y, a4.x, a4.y) > 0 &&
		ecDreapta(a2.x, a2.y, a1.x, a1.y, a4.x, a4.y) * ecDreapta(a3.x, a3.y, a1.x, a1.y, a4.x, a4.y) > 0) {
		document.getElementById('ex1convex').innerHTML = "Patrulaterul A1A2A3A4 este convex";
	} else {
		document.getElementById('ex1convex').innerHTML = "Patrulaterul A1A2A3A4 nu este convex";
	}

	var m = new punct(
		parseInt(document.getElementById('M.x').value), 
		parseInt(document.getElementById('M.y').value));

	if( perimetru(a1.x, a1.y, a2.x, a2.y, a3.x, a3.y) == perimetru(a1.x, a1.y, a2.x, a2.y, m.x, m.y) + perimetru(a1.x, a1.y, a3.x, a3.y, m.x, m.y) + perimetru(a3.x, a3.y, a2.x, a2.y, m.x, m.y) ||
		perimetru(a1.x, a1.y, a2.x, a2.y, a4.x, a4.y) == perimetru(a1.x, a1.y, a2.x, a2.y, m.x, m.y) + perimetru(a1.x, a1.y, a4.x, a4.y, m.x, m.y) + perimetru(a4.x, a4.y, a2.x, a2.y, m.x, m.y) ||
		perimetru(a4.x, a4.y, a2.x, a2.y, a3.x, a3.y) == perimetru(a4.x, a4.y, a2.x, a2.y, m.x, m.y) + perimetru(a4.x, a4.y, a3.x, a3.y, m.x, m.y) + perimetru(a3.x, a3.y, a2.x, a2.y, m.x, m.y) ||
		perimetru(a1.x, a1.y, a4.x, a4.y, a3.x, a3.y) == perimetru(a1.x, a1.y, a4.x, a4.y, m.x, m.y) + perimetru(a1.x, a1.y, a3.x, a3.y, m.x, m.y) + perimetru(a3.x, a3.y, a4.x, a4.y, m.x, m.y)) {

		document.getElementById('ex1acoperire').innerHTML = "M se afla in acoperirea convexa a {A1, A2, A3, A4}";
	} else {
		document.getElementById('ex1acoperire').innerHTML = "M nu se afla in acoperirea convexa a {A1, A2, A3, A4}";
	}
}

document.getElementById('A1.x').oninput = runLab2;
document.getElementById('A1.y').oninput = runLab2;

document.getElementById('A2.x').oninput = runLab2;
document.getElementById('A2.y').oninput = runLab2;

document.getElementById('A3.x').oninput = runLab2;
document.getElementById('A3.y').oninput = runLab2;

document.getElementById('A4.x').oninput = runLab2;
document.getElementById('A4.y').oninput = runLab2;

document.getElementById('M.x').oninput = runLab2;
document.getElementById('M.y').oninput = runLab2;