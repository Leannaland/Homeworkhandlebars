var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function() {
      orm.create("burgers", function(res) {
        cb(res);
      });
    },
    update: function() {
      orm.update("burgers",  function(res) {
        cb(res);
      });
    },
    delete: function() {
      orm.delete("burgers", function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;