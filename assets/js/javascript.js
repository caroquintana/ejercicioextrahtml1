function convertirCelsius() {
	var grados = document.getElementById('farenheit').value;
	var gradosNum = parseFloat(grados);
	var resultado = ((gradosNum-32)/1.8).toFixed(2);
	document.getElementById('gradosCelsius').value=resultado;
};

