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
<button type="submit" id="logout" class="btn btn-danger">Logout</button>
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
    // Logout
    $(document).on("click", "#logout", async (event) => {
        event.preventDefault();
        const response = await $.ajax({
            type: "GET",
            url: "/api/user/logout",
            contentType: "application/json",
        });
        const response2 = await $.ajax({
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