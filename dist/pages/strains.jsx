"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextjs_1 = require("@clerk/nextjs");
const Strains = () => {
    return (<main style={{ textAlign: "center", padding: "2rem" }}>
      <nextjs_1.SignedIn>
        <h1>Hemp Strains</h1>
        <p>Here is where your hemp strain data will go.</p>
      </nextjs_1.SignedIn>

      <nextjs_1.SignedOut>
        <p>You must be signed in to view this page.</p>
      </nextjs_1.SignedOut>
    </main>);
};
exports.default = Strains;
