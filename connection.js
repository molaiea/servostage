/*const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "mabase2"
})
module.exports = client;*/

const DB_URI = "postgresql://postgres:uyhiuJA9huh9mpny00Px@containers-us-west-27.railway.app:7267/railway"
const client = new Sequelize(DB_URI, {
    define: {
      timestamps: false
    }
  });