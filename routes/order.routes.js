import express from 'express';
import { 
     createOrder,
     getAllOrders,
     getOrderById,
     updateOrder,
     deleteOrder,
    bulkCreateOrders 
 } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.post('/bulk', bulkCreateOrders);

 export default router;
