const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'oders were fetched'
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    Quantity: req.body.Quantity
  };
  res.status(201).json({
    message: 'oders was created',
    order: order
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'oders details fetched',
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'oders details deleted',
    orderId: req.params.orderId
  });
});

module.exports = router;
