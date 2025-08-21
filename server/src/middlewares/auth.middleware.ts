import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const authVerify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      (await req.cookies.token) ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.status(400).json({ success: false, message: "Invalid access token" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    if (decode) {
      if (typeof decode as "string") {
        res.status(403).json({ message: "You are not logged in" });
      }
      req.userId = (decode as JwtPayload).id;
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default authVerify;
