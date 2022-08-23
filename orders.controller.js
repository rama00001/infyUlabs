const db = require('./db.js').connection

const ordersList = (req, res) => {

    const query = "select * from orders"

    db.query(query, (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}

const filterOrderbyDate = (req, res) => {

    const date = req.body.date;

    const query = "select * from orders where date =?"

    db.query(query, [date], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}


const updateOrder = (req, res) => {
    const order_id = req.body.order_id;
    const name = req.body.name;
   
    const query = "update users set order_id=?,name=?"
    db.query(query, [order_id, name], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "successfully updated" });
        }
    })
}


const deleteOrder = (req, res) => {
    const order_id = req.body.order_id;
    const query = "DELETE FROM orders WHERE order_id= ?";
    db.query(query, [order_id], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "deleted successfully" });
        }
    })
}

const placeOrder = (req, res) => {
    let name = req.body.name;
    let order_id = req.body.order_id;
    const query = `INSERT INTO users( name,order_id) VALUES (?,?)`;
    db.query(query, [name, order_id], function (err, data) {
        if (err) {
            res.json({ error });
        }
        else {
            res.json({ message: "order placed successfully" });
        }
    })
}

module.exports = { ordersList, filterOrderbyDate, placeOrder, deleteOrder,updateOrder };


