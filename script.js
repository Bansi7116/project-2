
function rentNow() {
    alert("Thank you for choosing HavenHub!\nOur team will contact you soon.");
}

// Property Search
function searchProperty() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let city = cards[i].getElementsByClassName("city")[0].innerText.toLowerCase();

        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (city.includes(input) || title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Welcome Message
window.onload = function () {
    console.log("Welcome to HavenHub!");
};

// Contact Form Validation
let form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = form.querySelector("input[type='text']").value.trim();
        let email = form.querySelector("input[type='email']").value.trim();
        let message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        form.reset();

    });

}

// Add to Favorites
let favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(button.innerHTML == "🤍"){
            button.innerHTML = "❤️";
        }else{
            button.innerHTML = "🤍";
        }

    });

});