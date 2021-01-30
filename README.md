Second phase of project
Repository:github.com:gkalms/FirstGAProject.git
Branch - GKproject2

Project 1:
Initial project has a digital alphabet setup.
- An object array is set up to contain simple words that relate to each
- When each alphabet button is clicked, it presents random words based on the alphabet button value clicked

Technology used:
Bootstrap, Jquery, css and html file

Project 2:
Extend digital alphabet program to include 
1: Homepage, wher user selects Admin or Player function
2: Admin function includes:
- Login = Initail session setup, login authentication
- Create, update or delete words
3: Player function - relates to existing project 1.
- will showcase get functionality (for now geared to 20month old)
4: Form design html code removed from root index.html, app.js to individualised js files
5: Words are now stored in backend database
6: Words grouped/related to Alphabet categories

Technology in use:
Bootstrap, Jquery, css, html, Nodemon, Mongoose & MongoDb, Express & express-session, parcel-bundler, bcrypt, cors , ptoxy-middleware

Process flow:
1: Initialize program -> Homepage presented -> Choose admin or Player function
2: Admin function  -> exposes login screen, - on succesful login -> Admin form displayed
    2b: Admin form allows 
        -Creation of new words tied to alphabet category
        -Update words
        -Delete words
3: Player function -> alphabet form exposed -> On clicking alphabet key - words for that alphabet category doisplayed(read only); 
    clicking another key, clears former content

