document.getElementsById('FarenheitACelisius').onclick=convertirCelsius();

function convertirCelsius() {
	var far = parseFloat(document.getElementById('far').value);
   
	var cel= ((far - 32)*.5556);
  
	document.getElementById('cel').value = cel; 

};

