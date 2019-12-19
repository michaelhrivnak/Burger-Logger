// your model should do CRUD operations
const orm = require("../config/orm");

const burger = {

    newBurger: function(id,name,devoured){
        return {id,name,devoured};
    },

    getAllBurgers: function(){
        return new Promise((resolve,reject) =>{
            orm.selectAll("burgers").then(res=>{
                resolve(res);
            });
        });
    },

    addBurger: function(burgerName){
        return new Promise((resolve,reject) =>{
            orm.insertOne("burgers","burger_name",burgerName).then(res=>{
                console.log("burger.js " + res);
                resolve(res);
            });
        });
    },

    eatBurger: function(burgerID){
        return new Promise((resolve,reject) =>{
            orm.updateOne("burgers","devoured","1",burgerID).then(res=>{
                resolve(res);
            });
        });
    }

};

module.exports = burger;