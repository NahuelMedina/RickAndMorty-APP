const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.find(
    (u) => u.email === email && u.password === Number(password)
  );
  user
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = login;
