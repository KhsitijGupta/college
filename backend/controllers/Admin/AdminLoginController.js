const Admin = require('../../models/AdminLogin/AdminLoginModel.js');  // path to your User model

module.exports.AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    // Email check
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid email." });
    }
console.log(password+ "\n"+admin.password)
    // Plain-text password comparison
    if (password !== admin.password) {

      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    // Successful login
    res.status(200).json({ success: true, message: "Login successful", adminId: admin._id });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// module.exports.AdminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     let admin = await Admin.findOne({ email });

//     // If admin not found, create and save a new admin
//     if (!admin) {

//       admin = new Admin({ email, password });

//       await admin.save();

//       return res.status(201).json({
//         success: true,
//         message: "Admin not found. New admin created and logged in.",
//       });
//     }

//     // If found, compare password
//     // const isMatch = await admin.comparePassword(password);
//     // if (!isMatch) {
//     //   return res.status(401).json({ success: false, message: "Invalid email or password." });
//     // }

//     res.json({ success: true, message: "Login successful" });

//   } catch (error) {
//     console.error("Error in AdminLogin:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };