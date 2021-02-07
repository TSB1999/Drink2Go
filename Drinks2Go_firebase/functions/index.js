const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./util/FBAuth");

const { db } = require("./util/admin");

const {
    signup,
    login,
    addDrink,
    getDrinks
} = require("./handlers/users");

app.post("/signup", signup);
app.post("/login", login)
app.post("/addDrink", addDrink)
app.get("/getDrinks", getDrinks)


exports.api = functions.region("europe-west1").https.onRequest(app);
