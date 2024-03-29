import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import User from "../models/User.js";
import attachCookie from "../utils/attachCookie.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  attachCookie({ res, token });
  res.status(201).json({
    user: {
      email: user.email,
      name: user.email,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("invalid credentials");
  }

  const token = user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;
  res.status(200).json({ user });
};

export { register, login };
