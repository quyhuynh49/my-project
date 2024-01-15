const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, try again later",
  };
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};
export default errorHandlerMiddleware;
