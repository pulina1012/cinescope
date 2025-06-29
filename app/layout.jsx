import NextTopLoader from "nextjs-toploader";
import { inter } from "./font";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "CineScope Movies Database",
  description: "Find your favorite movie ratings and recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#1dd1a1" speed={400} crawlSpeed={400} />
        {children}
      </body>
    </html>
  );
}
