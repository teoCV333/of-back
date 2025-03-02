import { body, validationResult } from "express-validator";
import cardValidator from 'card-validator';


export const validateRegister = [
  body("name").trim().notEmpty().withMessage("El nombre es obligatorio"),
  body("email").isEmail().withMessage("Ingrese un correo válido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateLogin = [
  body("email").notEmpty().isEmail().withMessage("Ingrese un correo válido"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateAddCard = [
  body("email").notEmpty().isEmail().withMessage("Ingrese un correo válido"),
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("idNumber").notEmpty().withMessage("El número de identificación es obligatorio"),

  // ✅ Fix: Use cardValidator for number validation
  body("cNumber")
    .custom((value) => {
      const cardValidation = cardValidator.number(value);
      if (!cardValidation.isValid) {
        throw new Error("Número de tarjeta inválido");
      }
      return true;
    })
    .withMessage("Ingrese un número de tarjeta válido"),

  // ✅ Fix: Use cardValidator for expiration date validation
  body("exp").notEmpty().withMessage("La fecha de vencimiento debe estar en formato MM/YY y no estar vencida"),

  // ✅ Fix: Use cardValidator for CVV validation
  body("cvv").notEmpty().withMessage("El CVV debe tener 3 o 4 dígitos según el tipo de tarjeta"),

  body("zip").notEmpty().withMessage("El código postal es obligatorio"),
  body("country").notEmpty().withMessage("El país es obligatorio"),
  body("state").notEmpty().withMessage("El estado es obligatorio"),
  body("address").notEmpty().withMessage("La dirección es obligatoria"),
  body("city").notEmpty().withMessage("La ciudad es obligatoria"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
