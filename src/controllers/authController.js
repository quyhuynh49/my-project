const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.json({
    user: {
      email,
      name,
    },
  });
};

export { register };
