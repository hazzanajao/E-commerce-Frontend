const cookieSession = require("cookie-session")
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

const backendApp = express()

backendApp.use(cookieSession(
    {
        name:"session",
        keys :["hajaoecommerce"],
        maxAge:24 * 60 * 60 * 100
    }
));

backendApp.use(passport.initialize());
backendApp.use(passport.session());
backendApp.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

backendApp.use("/auth", authRoute);

backendApp.listen("3200", ()=>{
    console.log("backendServer is running!" )
})
