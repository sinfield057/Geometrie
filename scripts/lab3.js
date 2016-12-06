var returnA = function ( x1, y1, x2, y2 ) {
	return y1 - y2;
}

var returnB = function ( x1, y1, x2, y2 ) {
	return x2 - x1;
}

var returnC = function ( x1, y1, x2, y2 ) {
	return x1 * y2 - x2 * y1;
}

var returnDelta = function ( a1, b1, a2, b2 ) {
	return Math.abs( a1 * b2 - b1 * a2 );
}

var returnIntersection = function ( delta, a1, b1, c1, a2, b2, c2 ) {
	var M = new punct(0, 0);
	M.x = returnDelta( -c1, b1, -c2, b2 ) / delta;
	M.y = returnDelta( a1, -c1, a2, -c2 ) / delta;
	return M;
}

var punct = function(x, y){
	this.x = x;
	this.y = y;
}

var runLab3 = function() {
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

	var dreapta1a = returnA( a1.x, a1.y, a2.x, a2.y );
	var dreapta1b = returnB( a1.x, a1.y, a2.x, a2.y );
	var dreapta1c = returnC( a1.x, a1.y, a2.x, a2.y );

	var dreapta2a = returnA( a3.x, a3.y, a4.x, a4.y );
	var dreapta2b = returnB( a3.x, a3.y, a4.x, a4.y );
	var dreapta2c = returnC( a3.x, a3.y, a4.x, a4.y );

	var delta = returnDelta( dreapta1a, dreapta1b, dreapta2a, dreapta2b );

	console.log( delta );

	if ( delta != 0 ) {
		var Intersectie = returnIntersection( delta, dreapta1a, dreapta1b, dreapta1c, dreapta2a, dreapta2b, dreapta2c );
		document.getElementById("intersectie").innerHTML = "Rezultat: M(" + Intersectie.x + ", " + Intersectie.y + ")";
	} else {
		if ( returnDelta( dreapta1a, dreapta1b, dreapta2a, dreapta2b ) != 0 || returnDelta( dreapta1b, dreapta1c, dreapta2b, dreapta2c ) != 0 ) {
			document.getElementById("intersectie").innerHTML = "Nu se intersecteaza";
		} else {
			document.getElementById("intersectie").innerHTML = "A1A2 = A3A4";
		}
	}
}

document.getElementById('A1.x').oninput = runLab3;
document.getElementById('A1.y').oninput = runLab3;

document.getElementById('A2.x').oninput = runLab3;
document.getElementById('A2.y').oninput = runLab3;

document.getElementById('A3.x').oninput = runLab3;
document.getElementById('A3.y').oninput = runLab3;

document.getElementById('A4.x').oninput = runLab3;
document.getElementById('A4.y').oninput = runLab3;