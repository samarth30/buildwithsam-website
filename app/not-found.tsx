import Link from "next/link";

import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="shell prose">
      <h1>Not found</h1>
      <p>
        That URL is not on {site.name}’s site.{" "}
        <Link href="/">Go to the homepage</Link>.
      </p>
    </main>
  );
}
