function showMembershipCard(event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = Number(prompt("Enter your age"));

    let plan = document.querySelector(
        'input[name="membership"]:checked'
    ).value;

    let category = age < 13 ? "Junior" : "Regular";

    let fee = plan == "Basic" ? 500 :
              plan == "Silver" ? 1000 : 1500;

    let sections = ["Fiction", "Science", "History"];

    for (let section of sections) {
        console.log(section);
    }

    document.getElementById("card").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Category: " + category + "<br>" +
        "Plan: " + plan + "<br>" +
        "Fee: Tk " + fee;
}