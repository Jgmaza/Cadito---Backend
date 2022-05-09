const express = require("express")

const Cart = require("../models/Cart.js")

const router = express.Router();

router.get('/:user_id', async (req, res, next) => {
    const params = req.params;
    try {
        const history = await Cart.find({
            user_id: params.user_id,
            sold: true
        });
        res.status(200).json(history);
    } catch (error) {
        next(error);
    }
});

module.exports = router