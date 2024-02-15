export default function SiteFooter() {
  return (
    <div className="md:container md:max-w-6xl px-4 bg-slate-500">
      <div className="fixed bottom-8 select-none flex justify-between md:max-w-6xl w-full items-center  0 pr-8">
        <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href="https://ousama.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Maxima Communication
          </a>
          .
        </div>
      </div>
    </div>
  );
}
