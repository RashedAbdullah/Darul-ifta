"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/category");
  }, []);
  return (
    <main>
      Go to Category page{" "}
      <button onClick={() => router.push("/category")}>Category</button>
    </main>
  );
}
