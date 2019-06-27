const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

var pQuantity = 0;
var pId = 0;
var pPrice = 0;
var currQuantity = 0;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pokeoak2",
    database: "bamazon"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    run();
});

function run() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.table(res);
        prompting()
    });
};

function prompting() {
    inquirer.prompt([
        {
            type: "input",
            name: "idId",
            message: "What is the ID of the product that you would like to buy?"
        },
        {
            type: "list",
            name: "num",
            message: "How many units would you like to buy?",
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    ]).then(function (res) {
        pId = parseInt(res.idId);
        pQuantity = parseInt(res.num);
        connection.query("SELECT * FROM products WHERE ?", {item_id: pId} , 
        (err, response) => {
            if (err) throw err;
            pPrice = response[0].price;
            currQuantity = response[0].stock_quantity;
            if (response[0].stock_quantity >= pQuantity) enough();
            else {
                console.log("Insufficient quantity");
                run();
            }
        })
    });
}

function enough() {
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [(currQuantity - pQuantity), pId],
    (err, res) => {
        if (err) throw err;
        console.log("Your total is " + (pQuantity * pPrice));
        console.log("Thank you for your purchase");
        inquirer.prompt([
            {
                type: "list",
                name: "input",
                message: "Continue Shopping?",
                choices: ["YES", "NO"]
            }
        ]).then(function (res) {
            if (res.input == "YES") run();
            else if (res.input == "NO") {
                console.log("Thank you for using Bamazon.")
                connection.end()
            }
        });
    })
}