const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, handleError } = require("./middlewares/errorHandler");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const passport = require("passport");
const googleRouter = require("./routes/googleRoutes");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

dbConnect();

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "mysecret",
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 12 * 60 * 60, // Time to live - session expiration time (in seconds)
    }),
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send(`<a href= "http://localhost:4000/google">Login with Google</a>`)
})

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/", googleRouter);

app.use(notFound)
app.use(handleError)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);


})