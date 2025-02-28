import { useEffect, useState } from "react";
import { getRandomQuote } from "../api/quotes";

export default function HomePage() {
  const [quote, setQuote] = useState({
    id: 0,
    content: "",
    url: "",
    language_code: "fr",
    originator: {
      id: 0,
      name: "",
    },
    tags: [],
  });
  useEffect(() => {
    getRandomQuote().then((results) => {
      setQuote(results);
    });
  }, []);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl  text-[#d000ff] font-extrabold leading-tight tracking-tighter md:text-4xl">
          {quote.content}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {quote.originator.name}
        </p>
      </div>
    </section>
  );
}
