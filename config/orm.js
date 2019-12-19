
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.
const connection = require('./connection');

const orm = {
    selectAll: function(table){
        let result;
        let query = "select * from ?";

        connection.query(query,[table], (err,res)=>{
            if (err) throw err;
            result = res;
        });
        return result;
    },
    insertOne: function(table, column, value){
        let result;
        let query = "INSERT INTO ? (?) VALUES ?"
        connection.query(query,[table,column,value], (err,res)=>{
            if (err) throw err;
            result = res.id;
        });
        return result;
    },
    updateOne: function(table, column,value,id){
        let result;
        let query = "UPDATE ? SET ? = ? where id = ?"
        connection.query(query,[table,column,value,id], (err,res)=>{
            if (err) throw err;
            result = res.id;
        });
        return result;
    }

}

module.exports = orm;