import './globals.css';

import Footer from './components/Footer';

export const metadata = {
  title: 'AI Lead Qualifier',
  description: 'Qualify leads automatically via WhatsApp and SMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
