// your model should do CRUD operations
const orm = require("../config/orm");

const burger = {

    newBurger: function(id,name,devoured){
        return {id,name,devoured};
    },
    
    getALLBurgers: function(){
        return orm.selectAll("burgers");
    },

    addBurger: function(burgerName){
        return orm.insertOne("burgers","burger_name",burgerName);
    },

    eatBurger: function(burgerID){
        return orm.updateOne("burgers","devoured","1",burgerID);
    }

};

module.exports = burger;