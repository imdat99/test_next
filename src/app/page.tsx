import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li className="text-3xl font-bold underline">Save and see your changes instantly.</li>
        </ol>

        <div className="ctas">
          <a
            className="primary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 300 }}>
      <Button>Default</Button>
      <Button variant="outline" size="lg">Outline LG</Button>
      <Button variant="ghost" size="sm">Ghost SM</Button>
      {/* <Button isLoading>Loading...</Button> */}
      {/* <Button iconLeft="🔥">With Icon Left</Button> */}
      <Button >Next</Button>
    </div>
      </footer>
    </div>
  );
}
