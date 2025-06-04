const Admin = require('../../models/AdminLogin/AdminLoginModel.js');  // path to your User model

module.exports.AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ success: false, message: "Invalid email or password." });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid email or password." });

    // On successful login, send success response or token etc.
    res.json({ success: true, message: "Login successful" });

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
