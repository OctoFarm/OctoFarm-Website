//APP Version
const pjson = require("./package.json");
process.env.OCTOFARM_VERSION = `${pjson.version}`;
const db = require("./server_src/config/databaseURI").MongoURI;

//Requires
const express = require("express");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const initVersionCheck = require("./server_src/lib/githubCheck.js");

// Server Port
const app = express();

// Passport Config
require("./server_src/config/passport.js")(passport);

app.use(express.json());

// EJS
app.set("view engine", "ejs");

// Bodyparser
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Express Session Middleware

app.use(
  session({
    secret: "supersecret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Remember Me!
app.use(passport.authenticate("remember-me"));

// Connect Flash Middleware
app.use(flash());

const serverStart = async () => {
    const client = await mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }).then(connect => {
            console.log("Database connected: ", connect.connection.readyState)
        }).catch(e => {
            console.error("Failed to connect to database", e)
        });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`You can now access your server on port: ${PORT}`);
  });
  // Routes
  app.use(express.static(`${__dirname}/views`));
  app.use("/", require("./server_src/routes/index", { page: "route" }));
  app.use("/users", require("./server_src/routes/users", { page: "route" }));
};
// Mongo Connect
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => serverStart())
serverStart();
