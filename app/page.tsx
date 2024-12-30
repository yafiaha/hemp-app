import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ClerkProvider>
      <main style={{ textAlign: "center", padding: "2rem" }}>
        {/* Show content only when signed in */}
        <SignedIn>
          <h1>Welcome to the Hemp App</h1>
          {/* <Image src="/logo.png" alt="Logo" width={150} height={150} /> */}
          <p>Explore hemp strains, reviews, and more.</p>
          <Link href="/strains" style={{ color: "blue", textDecoration: "underline" }}>
            Go to Strains
          </Link>
        </SignedIn>

        {/* Redirect to sign-in if not signed in */}
        <SignedOut>
          <h1>Welcome to the Hemp App</h1>
          <p>Please sign in to continue.</p>
          <RedirectToSignIn />
        </SignedOut>
      </main>
    </ClerkProvider>
  );
}

