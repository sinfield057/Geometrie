window.onload = function() { 
	
	loadHomePage();

	//Sticky header
	var header = document.getElementById("header"),
		clone  = header.cloneNode(true);
		clone.classList.add("headerClone");
		header.insertBefore(clone, undefined);
	window.onscroll = function() {
	    stickyCheck();
	};

	var homeLink = document.getElementsByClassName("home-button");
	for (var i = 0; i < homeLink.length; i++) {
		homeLink[i].onclick = function() {
			loadHomePage();
		}
	}
	
	var link1Link = document.getElementsByClassName("link1-button");
	for (var i = 0; i < link1Link.length; i++) {
		link1Link[i].onclick = function() {
			loadLink1Page();
		}
	}

	var link2Link = document.getElementsByClassName("link2-button");
	for (var i = 0; i < link2Link.length; i++) {
		link2Link[i].onclick = function() {
			loadLink2Page();
		}
	}

	var link3Link = document.getElementsByClassName("link3-button");
	for (var i = 0; i < link3Link.length; i++) {
		link3Link[i].onclick = function() {
			loadLink3Page();
		}
	}


	var about = document.getElementsByClassName("about-button");
	for (var i = 0; i < about.length; i++) {
		about[i].onclick = function() {
			loadAboutPage();
		}
	}
};

var loadHomePage = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'views/home.html', true);
	ajax.onreadystatechange= function() {
	    if (this.readyState!==4){
	    	document.getElementById('content').innerHTML= '<p>Failed to load</p>';
	    } 
	    if (this.status!==200) {
	    	document.getElementById('content').innerHTML= '<p>Failed to load</p>';
	    } 
	    document.getElementById('content').innerHTML= this.responseText;
	};
	ajax.send();
}

var loadLink1Page = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'views/link1.html', true);
	ajax.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200){
	    	document.getElementById('content').innerHTML= this.responseText;
	   	} else {
	    	document.getElementById('content').innerHTML= '<p>Failed to load HTML</p>';
	    }       	 
	};
	ajax.onload = function() {
		var script = document.createElement('script');
		script.src = 'scripts/lab1.js';
		document.head.appendChild(script);
	}
	ajax.send();
}

var loadLink2Page = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'views/link2.html', true);
	ajax.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200){
	    	document.getElementById('content').innerHTML= this.responseText;
	   	} else {
	    	document.getElementById('content').innerHTML= '<p>Failed to load HTML</p>';
	    }       	 
	};
	ajax.onload = function() {
		var script = document.createElement('script');
		script.src = 'scripts/lab2.js';
		document.head.appendChild(script);
	}
	ajax.send();
}

var loadLink3Page = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'views/link3.html', true);
	ajax.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200){
	    	document.getElementById('content').innerHTML= this.responseText;
	   	} else {
	    	document.getElementById('content').innerHTML= '<p>Failed to load HTML</p>';
	    }       	 
	};
	ajax.onload = function() {
		var script = document.createElement('script');
		script.src = 'scripts/lab3.js';
		document.head.appendChild(script);
	}
	ajax.send();
}

var loadAboutPage = function() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'views/about.html', true);
	ajax.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200){
	    	document.getElementById('content').innerHTML= this.responseText;
	   	} else {
	    	document.getElementById('content').innerHTML= '<p>Failed to load HTML</p>';
	    }       	 
	};
	ajax.onload = function() {
		// var script = document.createElement('script');
		// script.src = 'scripts/about.js';
		// document.head.appendChild(script);
	}
	ajax.send();
}

var stickyCheck = function(){		
	if( window.scrollY > 250 ){
		document.body.classList.add("down");
    } else {
      	document.body.classList.remove("down");
    }
}



