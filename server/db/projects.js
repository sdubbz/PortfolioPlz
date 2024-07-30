const Sequelize = require("sequelize");

const {dbConnection} = require("./index")

console.log(dbConnection)


const Projects = dbConnection.define('project', {
  name: {
    type: Sequelize.STRING
  }
});
