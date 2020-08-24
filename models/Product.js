const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("products");
};
