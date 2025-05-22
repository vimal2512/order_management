import db from "../models/index.js";

const Order = db.orders;

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bulkCreateOrders = async (req, res) => {
  try {
    const orders = req.body;

    if (!Array.isArray(orders)) {
      return res.status(400).json({ message: 'Request body must be an array' });
    }

    const createdOrders = await Order.bulkCreate(orders);
    res.status(201).json(createdOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) res.json(order);
    else res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const updateOrder = async (req, res) => {
  try {
    const result = await Order.update(req.body, { where: { id: req.params.id } });
    if (result[0] === 1) res.json({ message: 'Order updated successfully' });
    else res.status(404).json({ message: 'Order not found or not updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const deleteOrder = async (req, res) => {
  try {
    const result = await Order.destroy({ where: { id: req.params.id } });
    if (result === 1) res.json({ message: 'Order deleted successfully' });
    else res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
