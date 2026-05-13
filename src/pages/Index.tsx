import { useEffect } from "react";
import logo from "@/assets/logo.jpeg";

const REDIRECT_URL = "https://ailaptopwala.com/links";

const Index = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.replace(REDIRECT_URL);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-soft)" }}
      />
      <main className="relative flex flex-col items-center text-center animate-fade-up">
        <div className="rounded-full bg-gradient-brand p-1 shadow-hover">
          <img
            src={logo}
            alt="AI Laptopwala logo"
            className="h-28 w-28 rounded-full border-4 border-background object-cover"
          />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Welcome To <span className="text-gradient-brand">AI Laptopwala</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Redirecting you to our links page…</p>
        <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full origin-left animate-[loadbar_2s_ease-in-out_forwards] bg-gradient-brand" />
        </div>
        <a
          href={REDIRECT_URL}
          className="mt-6 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Click here if you are not redirected
        </a>
      </main>
      <style>{`@keyframes loadbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
};

export default Index;
