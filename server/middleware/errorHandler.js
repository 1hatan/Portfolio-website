/**
 * Catch-all error handler. Keeps error responses consistent and avoids
 * leaking stack traces in production.
 */
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong on the server.",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
}
