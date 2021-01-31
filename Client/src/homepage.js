// Establish session
$(document).ready(function () {
    const response = $.ajax({
        type: "GET",
        url: "/api/user/session/establish",
        contentType: "application/json",
    });
});

import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
import loginUser from "./loginUser";
import player from "./player";
import RegisterUser from "./registerUser";

const homepageForm = `
<form id="homepage">
<h1>WELCOME</h1>
<div>
<button type="button" id="register" class="btn btn-primary">Register</button>
</div>
<div>
<button type="button" id="admin" class="btn btn-primary">Admin</button>
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
    // On selecting Register button - load register user form
    $(document).on("click", "#register", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(RegisterUser());
    });
    // On selecting Admin button - load Login form
    $(document).on("click", "#admin", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(loginUser());
    });
    // On selecting Player button - load Player form
    $(document).on("click", "#play", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(player());
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
    });
    return homepageForm;
};

export default homePage;