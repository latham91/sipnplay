import "./globals.css";

export const metadata = {
  title: "Sip & Play",
  description: "Park slope's first board game cafe!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
