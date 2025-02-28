import prisma from "../config/db.js";


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
    await prisma.paymentMethod.create({
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