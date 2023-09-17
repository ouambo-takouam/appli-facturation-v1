import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Main page</p>
      <Link href="/get-things-done">Access to DASHBOARD</Link>
    </main>
  );
}
