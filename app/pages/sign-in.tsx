import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Sign In</h1>
      <SignIn />
    </main>
  );
};

export default SignInPage;
