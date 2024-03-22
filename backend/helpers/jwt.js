import "dotenv/config";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.SECRET_KEY || "2t35zhgbfewefs";

export function issueJWT(user) {
  const payload = {
    id: user._id,
  };

  return jwt.sign(payload, jwtSecret, { expiresIn: "15h" });
}

export function verifyToken(req, res, next) {
  const token = req.cookies.jwt;
  
  if (!token) {
    return res.status(401).send("Access denied. No token provied!");
  }

  jwt.verify(token, jwtSecret, (error, decoded) => {
    if (error) return res.status(401).send("Invalid Token!");
    req.user = decoded;
    next();
  });
}