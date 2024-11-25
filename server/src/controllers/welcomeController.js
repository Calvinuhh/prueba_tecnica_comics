const welcomeController = (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to the Server!, to see the comics go to the route: /issues"
      );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default welcomeController;
