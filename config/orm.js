var connection = require("../config/connection.js");


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createburger();
  }); 

function createburger() {
    console.log("Inserting a new burger..\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "CheeseBurger",
        devoured: "true",
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
function updatetable() {
    console.log("Updating burgers_db\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          burger_name: "Cheese Burger"
        },
        {
          devoured: "True"
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        readProducts();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }


  function readProducts() {
    console.log("Selecting all burgers..\n");
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(module.exports);
      connection.end();
    });
  }
  