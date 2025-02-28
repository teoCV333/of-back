import { addPaymentMethodService, getPaymentsMethodByUserService, removePaymentMethodService } from "../services/paymentService.js";

export const getPaymentsMethodByUser = async (req, res) => {
    try {
        const response = await getPaymentsMethodByUserService(req.user);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const addPaymentMethod = async (req, res) => {
    try {
        const userId = req.user.id;
        const body = req.body;
        const response = await addPaymentMethodService(userId, body);
        if(!response.data) {
            return res.status(response.error).json({ message: response.errorMessage });
          }
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Server error" + error });
    }
};

export const removePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const response = await removePaymentMethodService(userId, id);
        if(!response.data) {
            return res.status(response.error).json({ message: response.errorMessage });
          }
        res.json({ message: 'Payment method deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Server error" + error });
    }
};


