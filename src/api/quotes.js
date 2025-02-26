import axios from "axios";

export const getRandomQuote = async () => {
  const response = await axios.get(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    {
      params: {
        language_code: "fr",
      },
      headers: {
        "x-rapidapi-key": "5de7cd8da7msh5b5404c6f42c080p1de532jsn3f26e927a6ec",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    }
  );
  return response.data;
};
