import loginUser from "./loginUser";

// Build registration page
const form = `
<form id="register-user">
<h1>Registration</h1>
    <div class="form-group">
    <label for="username">Register name</label>
    <input type="text" class="form-control" placeholder="Please Enter username" name="username">
    </div>
    <div class="form-group">
    <label for="password">Register Password</label>
    <input type="password" class="form-control" placeholder="Please Enter Password" name="password">
    </div>
    <div>
  <button type="submit" class="btn btn-primary" id="submit">Submit</button>
  </div>
</form>
`;

// Register Admin users
const registerUser = () => {
    $(document).on("submit", "#register-user", async (event) => {
        event.preventDefault();
        const registrationData = {
            name: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        try {
        const response = await $.ajax({
            type: "POST",
            url: "/api/user/register",
            contentType: "application/json",
            data: JSON.stringify(registrationData),
        });
        $("body").empty();
        $("body").prepend(loginUser());
    } catch (err){
        window.alert("Sorry, Unable to register you!");
    }
    });
    return form;
};

export default registerUser;
