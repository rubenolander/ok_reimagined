import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-8 p-8 mt-8">
      <h1 className="text-3xl">Olander Kalender</h1>
      <p>A family calendar creation tool</p>
      <Link className="hover:underline" href="/howto">
        How to:
      </Link>
      <Link className="hover:underline" href="/calendar">
        To creation tool (Swedish month names for now.)
      </Link>
    </main>
  );
}
