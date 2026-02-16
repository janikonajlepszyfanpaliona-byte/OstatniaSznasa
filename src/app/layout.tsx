import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wikak.Pl - Montaż Filmów i Edycja Wideo",
  description: "Profesjonalny montaż filmów, edycja wideo i produkcja treści dla YouTuberów",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent image dragging globally
              document.addEventListener('dragstart', (e) => {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Prevent text selection on UI elements
              document.addEventListener('selectstart', (e) => {
                if (e.target.closest('img, button, a, [role="button"], nav')) {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
