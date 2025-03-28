"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">Redirecting you to the homepage...</p>
    </div>
  );
}
