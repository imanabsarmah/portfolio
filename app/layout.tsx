import "./globals.css";

export const metadata = {
  title: "Manabjyoti Sarmah",
  description: "Portfolio website of Manabjyoti Sarmah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
