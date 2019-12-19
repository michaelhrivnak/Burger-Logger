// placeholder for controller code
const express = require('express');
const burger = require('../models/burger');

module.exports = function(app){

    app.get("/",(req,res)=>{
        app.render("index",{
            burgers: burger.getALLBurgers() 
        });
    });

    app.get("/api/all",(req,res)=>{
        res.json(burger.getALLBurgers());
    });

    app.post("/api/add",(req,res)=>{
        let burgerName = req.body.name;
        res.send(burger.addBurger(burgerName));
    });
    
    app.put("/api/burgers/:id",(req,res)=>{
        let burgerID = req.params.id;
        res.send(burger.eatBurger(burgerID));
    });

}

