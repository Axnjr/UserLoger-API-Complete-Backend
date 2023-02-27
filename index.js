const router = require("./database/ServeApi")
const colors = require("colors") // helps to console log in diffrent colors and underline them .
const PORT = process.env.PORT || 16108
const exprees = require("express")
const dotenv = require("dotenv").config()
const path = require("path");
const MongoDBConnector = require("./database/MongoConnecter")
const app = exprees()

MongoDBConnector() // connect with mongoDB
.then(() => {
    app.listen(PORT, () => {console.log("done", __dirname,"/",__filename)});
})

app.use(exprees.json())

app.use(exprees.urlencoded({ extended : false }))

app.use(exprees.static(path.join(__dirname,"public")))

app.use("/logtheuser" , router )