console.log("hello");

//Day of the week
const d = new Date();
$("h2").html("Today is the " + d.toLocaleDateString());  

//Get value from clicked button into text box
$(".btn").on("click", (e) => {
    console.log("button clicked")
    let input = e.target.innerHTML;
    console.log(input);
    $("p").append(input);
});

// Can i use frestyle button to add happy picture to paragraph??

//   Clear the text
$("#clear").on("click", () => {
    console.log("clear this field!");
    $("p").html("");
});
