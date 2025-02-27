export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome To My Personal Page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is a small paragraph describing the content of my personal page.
          Here you can find information about my projects, blog posts, and more.
        </p>
      </div>
    </section>
  );
}
