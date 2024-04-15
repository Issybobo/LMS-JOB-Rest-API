const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
    new GoogleStrategy({
        clientID: "",
        clientSecret: "",
        callbackURL: "",
        scope: ["profile", "email"],
    },
    async function (profile, done) {
        console.log(profile);
        return done(null, user);

    }

)
);

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;