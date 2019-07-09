const express=require("express");
const userRouter=require("./routes/user.js");
const bodyParser=require("body-parser");
var app=express();
app.listen(8080);

app.use( express.static("myajax"));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use("/user",userRouter);