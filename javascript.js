window.onload = function() {
    let submitButton = document.getElementById("submit");
    submitButton.disabled = true;

    document.getElementById("exampleInputPassword1").onkeyup = function() {
        let regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
        if(this.value.match(regex)) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
    }
}