import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pbox",
  description: "Application pour utiliser votre pilulier préféré",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mt-16`}
      >
        {children}
      <header><ul className="nav-list">
          <li><a href="/catalogue">Pills</a></li>
          <li><a href="/">Alarmes</a></li>
          <li><a href="#">Profile</a></li>

      </ul></header>
      </body>
    </html>
  );
}
