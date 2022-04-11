require("dotenv").config()
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))

// midleware untuk mengatur folder publik

app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))

// bikin eror 404

app.use((err, req, res, next) =>{
    console.log(err.stack);
    res.status(500).send({
        message:err.message,
    })
})


app.listen(process.env.PORT,() => {
    console.log("server Berjalan di" + process.env.PORT);
})