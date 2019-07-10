const express=require("express");
const router=express.Router();
const pool=require("../pool.js");
//登录
router.get("/v1/login/:uname&:upwd",(req,res)=>{
    var $uname=req.params.uname;
    var $upwd=req.params.upwd;

    var sql="select uname,upwd from censh_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if (result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
//注册 ---没有做好
router.post("/v1/reg",(req,res)=>{
    var $uname=req.body.uname;
    var sql="insert into censh_user set uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
module.exports=router;