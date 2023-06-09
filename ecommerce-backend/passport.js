const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "You CAN PUT YOURS HERE";
const GOOGLE_CLIENT_SECRET ="You CAN PUT YOURS HERE ";



passport.use(
    new GoogleStrategy(
        {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
        },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));



passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
