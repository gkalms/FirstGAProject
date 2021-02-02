// Import dependent pages
import Word from "./admin";
import homePage from "./homepage";

// Build login page
const form = `
<form id="login-user">
<h1>Log in</h1>
    <div class="form-group">
    <label for="username">User name</label>
    <input type="text" class="form-control" placeholder="Please Enter Username" name="username">
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" placeholder="Please Enter Password" name="password">
    </div>
    <div>
  <button type="submit" class="btn btn-primary" id="submit">Submit</button>
  </div>
</form>
`;

// Log in
const loginUser = () => {
    $(document).on("submit", "#login-user", async (event) => {
        event.preventDefault();
        const formData = {
            name: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        try {
            const response = await $.ajax({
                type: "POST",
                url: "/api/user/login",
                contentType: "application/json",
                data: JSON.stringify(formData),
            });
            $("body").empty();
            $("body").append(Word());
        } catch (err) {
            window.alert("Unable to log you in!");
            $("body").empty();
            $("body").append(homePage());
        }
    });
    return form;
};

export default loginUser;
