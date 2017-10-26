function res()
{   
		var a = parseInt(document.getElementById("A").value);
		var b = parseInt(document.getElementById("B").value);
		var op = document.getElementById("Op").value;
		if (op == "+")
			var res = calcN(a, b, "plus");
		else
			var res = calcN(a, b, op);
		document.getElementById("Res").value = res;
}
function calcN(a, b, op) 
{
	var req = "num1=" + a + "&num2=" + b + "&op=" + op;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'calcServer.php?'+req, false);
	xhr.send(null);
	return xhr.responseText;
}