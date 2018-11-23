

// for number index
function input_verify() {
    var a = $(".numberinput").text();
	localStorage.setItem("num", a);
    if (a == "") {
        console.log("Null");
        // show();
        return false;
    } else {
        return true;
    }
}


function sms() {
    
       if(input_verify()){
        var bs = $(".numberinput").text();
        console.log(bs);
        var sms = sms_verification_number()
        var num = bs;
        
        // cashe item
        localStorage.setItem("sms", sms);
        localStorage.setItem("num", num);

        // localStorage.setItem("n", num);
        var id = localStorage.getItem('id');
        var a = localStorage.getItem('mr');
        var b = localStorage.getItem('fst');
        var c = localStorage.getItem('lst');
        
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(Number(this.responseText) === 200){
                console.log('done');
                window.location.href = "/otp";
            }
            console.log(this.responseText);
            
            }
		};
        var api = '1';
        var device = '104'; // change device id based on Device

        // sms api send
         xhttp.open("POST", "http://www.vaseline.online/phpAPI/api.php", true);
         xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xhttp.send("api=" + api + "&id=" + id +"&mr=" + a + "&fst=" + b + "&lst=" + c + "&num=" + num + "&sms=" + sms + "&deviceid=" + device);

         // setTimeout(re, 1000);
        // window.location.href = "/otp";
	}
    
}

function re(){
	window.location.href = "/otp";
}


// Generate Random Number
function sms_verification_number() {
    return Math.floor(Math.random() * 5999) + 1000;  /// for four digits number
}




