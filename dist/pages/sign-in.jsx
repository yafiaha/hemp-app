"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextjs_1 = require("@clerk/nextjs");
const SignInPage = () => {
    return (<main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Sign In</h1>
      <nextjs_1.SignIn />
    </main>);
};
exports.default = SignInPage;
