const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')

//--------------------------------------------------------------------------------------------

// 1. register -

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser)
            return res.json({
                success: false,
                message: "User Already exists with the same email! Please try again",
            });

        const hashPassword = await bcryptjs.hash(password, 12);
        const newUser = new User({
            userName, email, password: hashPassword,
        });

        await newUser.save(); //to save the new user to mongodb database
        res.status(200).json({
            success: true,
            message: "Registration successful"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        });
    }
};
// --------------------------------------------------------------------------------------
// 2. login - 

// const login = async (req, res) => {
//     try {

//     } catch (e) {
//         console.log(e);
//         res.status(500).json({
//             success: false,
//             message: "Some error occured",
//         });
//     }
// }

// 3. logout - 



// 4. auth middleware -


module.exports = { registerUser };