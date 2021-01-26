
const homepageForm = `
<form id="homepage">
<style>
body {background-color: powderblue;}
label   {color: blue;}
.form-control {width: 300px;}
</style>
<h1>Welcome</h1>
<div>
<button type="submit" id="admin" class="btn btn-danger">Admin</button>
</div>
<div>
<button type="submit" id="player" class="btn btn-danger">Player</button>
</div>
</form>

`;

const selectUser = () => {
    $(document).on("submit", "#homepage", async (event) => {
    event.preventDefault();
    });
    return homepageForm;
    console.log("Welcome!");
};

// If $("#admin").on("click", (e) => {
//     $("homepageForm").append(loginUser());
//     console.log("Welcome parent!");
// else
//     $("#admin").hide;
//     $("homepageForm").append(player());
//     console.log("more to come");
// });