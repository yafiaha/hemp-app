import { SignedIn, SignedOut } from "@clerk/nextjs";

const Strains = () => {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <SignedIn>
        <h1>Hemp Strains</h1>
        <p>Here is where your hemp strain data will go.</p>
      </SignedIn>

      <SignedOut>
        <p>You must be signed in to view this page.</p>
      </SignedOut>
    </main>
  );
};

export default Strains;
