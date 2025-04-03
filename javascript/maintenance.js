//Contains the form from maintenance form
const form = document.getElementById("maintenance_form");

//This is the output of user given
const output = document.getElementById("output");

//when the form submits it runs the function
form.addEventListener("submit", function(e) {

    //"e" just prevents to refresh the site
    e.preventDefault();
    console.log("Thank you for submitting your issues")

    //Gets the values from each issue text input
    const name = document.getElementById("name").value;
    const unit = document.getElementById("unit_number").value;
    const issue = document.getElementById("issue").value;

    //if name, unit_number,issue are in text input alerts and resets input else alert saying submit information
    if (name && unit_number && issue) {

        form.reset();
        
        alert("Thank you for sharing issue! \n\n Your Issue will be reviewed within 2-3 business days, and we will do our best to schedule with the manager as soon as possible. \n\n Thank you.");

    } else {

        alert("Please fill all the information and issues before submitting");
    }
});
    



