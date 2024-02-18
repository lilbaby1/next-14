import './ui/global.css';
import { inter } from './ui/fonts';
import { Navbar } from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
