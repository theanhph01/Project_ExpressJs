const bcrypt = require("bcryptjs");

const start = async () => {
  const a = "theanhh01";
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(a, salt);
  const b = "theanhh01";
  const isPassword = await bcrypt.compare(password, b);
  console.log(isPassword);
};
start();
