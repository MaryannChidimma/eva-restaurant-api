const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoder = jwt.verify(token, process.env.JWT_KEY)
        req.adminData = decoder;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Authentication failed" })
    };

};
