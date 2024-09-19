import User from "../models/user.models.js";
import CatchAsyncError from "../utils/catchAsyncError.utils.js";
import ErrorHandler from "../utils/errorHandler.utils.js";
import SendResponse from "../utils/responseHandler.utils.js";

export const signIn = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/classroom");
    }
    return res.render("signin", { title: "Real Book | Sign In" });
  } catch (err) {
    next(err);
  }
};

export const signUp = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/classroom");
    }
    return res.render("signup", { title: "Real Book | Sign Up" });
  } catch (err) {
    next(err);
  }
};

export const register = CatchAsyncError(async (req, res, next, session) => {
  const { name, password, confirm_password, email } = req.body;
  let user = await User.findOne({ email }).session(session);
  if (user) return ErrorHandler(res, 400, "User already exists");

  if (password !== confirm_password)
    return ErrorHandler(res, 400, "Passwords do not match");

  // create user
  user = await User.create([{ name, email, password, role }], { session });

  return SendResponse(res, 201, "User created", { user });
});
