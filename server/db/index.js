const Sequelize = require("sequelize");

const dbConnection = new Sequelize("postgres://localhost:5432/PortfolioNew");



console.log(dbConnection)
module.exports ={ dbConnection};
