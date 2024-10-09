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

export default function RootLayout({children}) {
    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full pt-16 px-4`}
        >
        <div className="container">
            {children}
        </div>
            <header>
                <div className="nav-list fixed bottom-0 left-0 w-full bg-white p-4 drop-shadow-up">
                <ul className="flex justify-around">
                    <li><a href="/catalogue">Pills</a></li>
                    <li><a href="/">Alarmes</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
                </div>
            </header>
        </body>
        </html>
    );
}
