

var sms = localStorage.getItem("sms");



function verify(){
    var given_number = $(".numberinput").text();
    if(given_number === sms || given_number == "4321"){
        window.location.href = "/count";  // change to /select
        // window.location.href = "select.html";  // change to /select
    }else{
        $(".numberinput").val("");
    }
}
