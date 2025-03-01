import prisma from "../config/db.js";

export const getProfileService = async (user) => {
  const result = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, name: true, email: true, activeSub: true },
  });
  return {
    success: true,
    data: result,
  };
};

export const validateSubService = async (user) => {
  // Find User
  console.log('ento')

  const result = await prisma.user.findUnique({
    where: { id: user.id },
    select: { name:false, email: false, id: false, activeSub: true },
  });
  return {
    success: true,
    data: result,
  };
};


export const activateSubService = async (user) => {
    const result = await prisma.user.update({
        where: { id: user.id },
        data: { activeSub: true },
        select: {
            activeSub: true
        }
      });
  return {
    success: true,
    data: result,
  };
};

export const cancelSubService = async (user) => {
    const result = await prisma.user.update({
        where: { id: user.id },
        data: { activeSub: false },
        select: {
            activeSub: true
        }
      });
  return {
    success: true,
    data: result,
  };
};
