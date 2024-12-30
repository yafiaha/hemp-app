"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const google_1 = require("next/font/google");
require("./globals.css");
const material_1 = require("@mui/material");
const geistSans = (0, google_1.Geist)({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = (0, google_1.Geist_Mono)({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
exports.metadata = {
    title: "Hemp Finder App",
    description: "Explore hemp strains, relationships, and statistics.",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <material_1.CssBaseline />
        <material_1.Box sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "var(--background-color)",
        }}>
          {/* Header */}
          <header style={{
            background: "var(--primary-color)",
            color: "white",
            padding: "1rem",
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
            Hemp Finder App
          </header>

          {/* Main Content */}
          <material_1.Box sx={{ flex: 1, padding: "1rem" }}>{children}</material_1.Box>

          {/* Footer */}
          <footer style={{
            background: "var(--primary-color)",
            color: "white",
            textAlign: "center",
            padding: "0.5rem",
            marginTop: "auto",
            fontSize: "1rem",
        }}>
            &copy; 2024 Hemp Finder App
          </footer>
        </material_1.Box>
      </body>
    </html>);
}
