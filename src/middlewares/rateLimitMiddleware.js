import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per `windowMs`
  message: {
    error: 'Too many requests, please try again later.',
  },
  standardHeaders: true, // Return rate-limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});