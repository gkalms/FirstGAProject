// Import dependent pages
import Word from "./admin";
import homePage from "./homepage";

// Build login page
const form = `
<form id="register-user">
<h1>Admin login</h1>
    <div class="form-group">
    <label for="username">User name</label>
    <input type="text" class="form-control" placeholder="Please Enter Username" name="username">
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" placeholder="Please Enter Password" name="password">
    </div>
    <div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  <div>
    <button type="button" id="exit" class="btn btn-primary">Exit</button>
    </div>
</form>
`;

// Register Admin users
const registerUser = () => {
    $(document).on("submit", "#register-user", async (event) => {
        event.preventDefault();

        const formData = {
            name: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        console.log("form data", formData);
        const response = await $.ajax({
            type: "POST",
            url: "/api/user/register",
            contentType: "application/json",
            data: JSON.stringify(formData),
        });
        alert("User registered");
    });
    // Exit
    $(document).on("click", "#exit", async (event) => {
        event.preventDefault();
        $("body").empty();
        $("body").prepend(homePage());
    });
    return form;
};

export default registerUser;
