// Establish session
$(document).ready(function () {
    const response = $.ajax({
        type: "GET",
        url: "/api/user/session/establish",
        contentType: "application/json",
    });
});

import registerUser from "./registerUser";
import loginUser from "./loginUser";
import player from "./player";


const homepageForm = `
<form id="homepage">
<h1>WELCOME</h1>
<div>
<button type="button" id="register" class="btn btn-primary">Register</button>
</div>
<div>
<button type="button" id="login" class="btn btn-primary">Login</button>
</div>
<div>
<button type="button" id="play" class="btn btn-primary">Play</button>
</div>
<div>
<button type="button" id="exit" class="btn btn-primary">Exit</button>
</div>
</form>
`;

// homepage form
const homePage = () => {
    // On selecting button - load register user form
    $(document).on("click", "#register", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").append(registerUser());
    });
    // On selecting button - load Login form
    $(document).on("click", "#login", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").append(loginUser());
    });
    // On selecting button - load Player form
    $(document).on("click", "#play", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").append(player());
    });
    // Exit
    $(document).on("click", "#exit", async (event) => {
        event.preventDefault();
        const response = await $.ajax({
            // Expire session
            type: "GET",
            url: "/api/user/session/expire",
            contentType: "application/json",
        });
        window.alert("Session ended!");
    });
    return homepageForm;
};

export default homePage;