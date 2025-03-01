import axios from "axios";

export type Quote = {
  id: number;
  content: string;
  url: string;
  language_code: string;
  originator: {
    id: number;
    name: string;
  };
  tags: [];
};

export const getRandomQuote = async () => {
  const response = await axios.get<Quote>(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    {
      params: {
        language_code: "en",
      },
      headers: {
        "x-rapidapi-key": "5de7cd8da7msh5b5404c6f42c080p1de532jsn3f26e927a6ec",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    }
  );
  return response.data;
};
