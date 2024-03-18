import mysql from 'mysql2'

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Madusanka2000",
  database:"blog",
})

