import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import loginUser from "./loginUser";
import player from "./player";

const homepageForm = `
<form id="homepage">
<style>
body {background-color: powderblue;}
</style>
<h1>Admin login</h1>
<div>
<button type="button" id="admin" class="btn btn-primary">Admin</button>
</div>
<div>
<button type="button" id="player" class="btn btn-primary">Player</button>
</div>
</form>
`;

// homepage form
const homePage = () => {
    // On selecting Admin button - load Login form
    $(document).on("click", "#admin", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(loginUser());
    });
    // On selecting Player button - load Player form
    $("document").on("click", "#player", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(player());
    });

    return homepageForm;
};

export default homePage;