const express = require('express');
const router = express();
router.use(express.json())
const orders = require('./orders.controller.js')


router.get('/getOrders', orders.ordersList);
router.get('/getOrdersByDate', orders.filterOrderbyDate);
router.put('/editOrder/:id', orders.updateOrder);
router.delete('/deleteOrder/:id', orders.deleteOrder);
router.post('/placeOrder', orders.placeOrder);








router.listen(3000, () => {
  console.log('server up and running')
})
