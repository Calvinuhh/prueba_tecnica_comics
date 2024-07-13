const { MAIN_URL, API_KEY } = process.env;

export const getIssuesController = async (req, res) => {
  const { format, limit } = req.query;

  try {
    const petition = await fetch(
      `${MAIN_URL}/issues?api_key=${API_KEY}&format=${format}&limit=${limit}`
    );

    const data = await petition.json();

    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getIssuesByIdController = async (req, res) => {
  const { issue } = req.params;
  const { format } = req.query;

  console.log(issue);

  try {
    const petition = await fetch(
      `${MAIN_URL}/issue/${issue}?api_key=${API_KEY}&format=${format}`
    );

    const data = await petition.json();

    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
