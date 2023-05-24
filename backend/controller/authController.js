import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from "../model/userSchema.js"
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {

  try {
    console.log(req.body.username);
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not Found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or Username"));
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {

  try {
    console.log(req.body.username);
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully Logout" });
  } catch (error) {
    next(error);
  }
};
