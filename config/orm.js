
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.
const connection = require('./connection');

const orm = {
    selectAll: function(table){
        return new Promise((resolve,reject)=>{
            
            let query = "select * from ??";
    
            connection.query(query,[table], (err,res)=>{
                if (err) throw err;
                resolve(res);
            });
        });
    },
    insertOne: function(table, column, value){
        
        return new Promise((resolve,reject)=>{
            let query = "INSERT INTO ?? (??) VALUES (?)"
            connection.query(query,[table,column,value], (err,res)=>{
                if (err) throw err;
                resolve(res.insertId);
            });
        });
    },
    updateOne: function(table,column,value,id){
        
        return new Promise((resolve,reject)=>{
            let query = `UPDATE ${table} SET ${column} = ${value} where id = ${id}`
            
            connection.query(query, (err,res)=>{
                if (err) throw err;
                resolve(res.affectedRows);
            });
        });
    }

}

module.exports = orm;