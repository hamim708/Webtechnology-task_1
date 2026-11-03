
function enableButton() {
    let check = document.getElementById("agree");
    let button = document.getElementById("joinBtn");

    if (check.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function validateForm() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let date = document.getElementById("date").value;
    let main = document.getElementById("mainTrainer").value;
    let backup = document.getElementById("backupTrainer").value;
    let addons = document.getElementById("addons").value;

    let valid = true;

    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    document.getElementById("finalMessage").innerHTML = "";

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Your full name is missing.";
        valid = false;
    }
    else if (name.trim().length < 3) {
        document.getElementById("nameError").innerHTML = "Full name is too short (minimum 3 letters).";
        valid = false;
    }
    else {
        for (let i = 0; i < name.length; i++) {
            let ch = name.charAt(i);

            if (!((ch >= "A" && ch <= "Z") ||
                  (ch >= "a" && ch <= "z") || ch == " ")) {
                document.getElementById("nameError").innerHTML = "Digits and symbols are not allowed in the full name.";
                valid = false;
                break;
            }
        }
    }

    if (age == "" || isNaN(age) || age < 16 || age > 65) {
        document.getElementById("ageError").innerHTML = "Age must be a number from 16 to 65.";
        valid = false;
    }

    if (mobile.length != 11 ||
        mobile.charAt(0) != "0" ||
        mobile.charAt(1) != "1" ||
        mobile.charAt(2) < "3" ||
        mobile.charAt(2) > "9") {

        document.getElementById("mobileError").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
        valid = false;
    }
    else {
        for (let i = 0; i < mobile.length; i++) {
            if (mobile.charAt(i) < "0" || mobile.charAt(i) > "9") {
                document.getElementById("mobileError").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
                valid = false;
                break;
            }
        }
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email cannot be left empty.";
        valid = false;
    }
    else if (email.indexOf(" ") != -1 ||
             email.indexOf("@") == -1 ||
             email.charAt(0) == "@" ||
             email.indexOf(".", email.indexOf("@")) == -1) {

        document.getElementById("emailError").innerHTML = "This email does not look right.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Use a password of 8 or more characters.";
        valid = false;
    }
    else {
        let capital = false;
        let digit = false;

        for (let i = 0; i < password.length; i++) {
            let ch = password.charAt(i);

            if (ch >= "A" && ch <= "Z") {
                capital = true;
            }

            if (ch >= "0" && ch <= "9") {
                digit = true;
            }
        }

        if (!capital || !digit) {
            document.getElementById("passwordError").innerHTML = "Password needs at least one capital letter and one digit.";
            valid = false;
        }
    }

    if (confirmPassword != password) {
        document.getElementById("confirmPasswordError").innerHTML = "The two passwords are not the same.";
        valid = false;
    }

    if (plan == "") {
        document.getElementById("planError").innerHTML = "Please choose a plan.";
        valid = false;
    }

    if (date == "") {
        document.getElementById("dateError").innerHTML = "Please pick a start date.";
        valid = false;
    }

    let time = document.getElementsByName("time");
    let selectedTime = "";

    for (let i = 0; i < time.length; i++) {
        if (time[i].checked) {
            selectedTime = time[i].value;
        }
    }

    if (selectedTime == "") {
        document.getElementById("timeError").innerHTML = "Please choose a workout time.";
        valid = false;
    }

    if (main == "") {
        document.getElementById("mainTrainerError").innerHTML = "Please choose a main trainer.";
        valid = false;
    }

    if (backup == "") {
        document.getElementById("backupTrainerError").innerHTML = "Please choose a backup trainer.";
        valid = false;
    }
    else if (main == backup) {
        document.getElementById("backupTrainerError").innerHTML = "Backup trainer must be different from the main trainer.";
        valid = false;
    }

    if (addons == "" || isNaN(addons) ||
        addons.indexOf(".") != -1 ||
        addons < 0 || addons > 3) {

        document.getElementById("addonsError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        valid = false;
    }
    else {
        for (let i = 0; i < addons.length; i++) {
            if (addons.charAt(i) < "0" || addons.charAt(i) > "9") {
                document.getElementById("addonsError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
                valid = false;
                break;
            }
        }
    }

    if (valid == false) {
        return false;
    }

    let fee = 0;

    if (plan == "Monthly") {
        fee = 1500;
    }
    else if (plan == "Quarterly") {
        fee = 4000;
    }
    else if (plan == "Yearly") {
        fee = 14000;
    }

    let total = fee + (Number(addons) * 500);

    document.getElementById("finalMessage").innerHTML =
        "Welcome, " + name + "! Your " + plan +
        " membership starts on " + date +
        ". Total payable: " + total + " Taka.";

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("date").value = "";
    document.getElementById("addons").value = "";

    document.getElementById("plan").selectedIndex = 0;
    document.getElementById("mainTrainer").selectedIndex = 0;
    document.getElementById("backupTrainer").selectedIndex = 0;

    for (let i = 0; i < time.length; i++) {
        time[i].checked = false;
    }

    document.getElementById("agree").checked = false;
    document.getElementById("joinBtn").disabled = true;

    return false;
}
