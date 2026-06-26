import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Token not found. Please log in." });
        }

        // Token verify kiya
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodeToken) {
            return res.status(401).json({ message: "Token verification failed." });
        }

        console.log("Decoded Token Data:", decodeToken);

        // Dono patterns ko support karne ke liye fallback laga diya hai
        // Agar aapke token me 'userId' hai ya '_id' hai, dono case me req.userId set ho jayega
        req.userId = decodeToken.userId || decodeToken._id; 
        const ownerId = req.userId || req.user?._id;

        if (!req.userId) {
            return res.status(401).json({ message: "Invalid token payload: User ID missing." });
        }

        next();

    } catch (error) {
        // Terminal me exact error dekhne ke liye console.error laga diya hai
        console.error("🚨 isAuth Middleware Error Details 👉:", error.message); 
        return res.status(500).json({ message: "isAuth error", error: error.message });
    }
};

export default isAuth;
/*import jwt from "jsonwebtoken"
const isAuth=async(req,res,next)=>{
    try{
        const token =req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!decodeToken){
            return res.status(400).json({message:"token not verify"})
        }
        console.log(decodeToken)
        req.userId=desodeToken.userId
        next()

    }catch(error){
        return res.status(500).json({message:"isAuth error"})
    }
}
export default isAuth/*
import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "token not found" }); // 401 Unauthorized રાખવું વધુ સારું
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodeToken) {
            return res.status(401).json({ message: "token not verified" });
        }

        console.log("Decoded Token Data:", decodeToken);

        // ⬇️ આ બંને લાઈનના સ્પેલિંગ ફિક્સ કર્યા છે
        req.userId = decodeToken.userId; 
        
        next();

    } catch (error) {
        console.error("isAuth Middleware Error Details 👉:", error.message); // ટર્મિનલમાં અસલી એરર જોવા માટે
        return res.status(500).json({ message: "isAuth error", error: error.message });
    }
};

export default isAuth;*/