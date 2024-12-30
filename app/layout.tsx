import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hemp Finder App",
  description: "Explore hemp strains, relationships, and statistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CssBaseline /> {/* Ensures consistent baseline styles */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#f8f9fa",
          }}
        >
          {/* Header */}
          <header
            style={{
              background: "#0074d9",
              color: "#fff",
              padding: "1rem",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            Hemp Finder App
          </header>

          {/* Main Content */}
          <Box sx={{ flex: 1, padding: "1rem" }}>{children}</Box>

          {/* Footer */}
          <footer
            style={{
              background: "#0074d9",
              color: "#fff",
              textAlign: "center",
              padding: "0.5rem",
              marginTop: "auto",
              fontSize: "0.875rem",
            }}
          >
            &copy; 2024 Hemp Finder App
          </footer>
        </Box>
      </body>
    </html>
  );
}

