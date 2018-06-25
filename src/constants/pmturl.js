const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://159.65.78.65:8082/" //change url when the application is in production
    : "http://localhost:3001";

export default PAYMENT_SERVER_URL;
