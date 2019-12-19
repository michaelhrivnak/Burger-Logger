// placeholder for controller code
const express = require('express');
const burger = require('../models/burger');

module.exports = function(app){

    app.get("/",(req,res)=>{
        burger.getAllBurgers().then((burgers)=>{
            
            res.render("index",{
                unEatenBurgers: burgers.filter(e => e.devoured === 0),
                eatenBurgers: burgers.filter(e => e.devoured === 1)  
            });
        });
    });

    app.get("/api/all",(req,res)=>{
        burger.getAllBurgers().then((burgers)=>{
            res.json(burgers);
        });
    });

    app.post("/api/add",(req,res)=>{
        let burgerName = req.body.burger_name;
        burger.addBurger(burgerName).then((result)=>{
            console.log("added burger controller", result);
            res.json(result);            
        });
    });

    app.put("/api/burger/:id",(req,res)=>{
        let burgerID = req.params.id;
        burger.eatBurger(burgerID).then(result=>{
            console.log("burger controller "+ result);
            res.json(result);
        });
    });

}

