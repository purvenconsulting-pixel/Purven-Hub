import './globals.css';

import Footer from './components/Footer';

export const metadata = {
  title: 'AI Review Responder',
  description: 'Generate perfect responses to customer reviews in seconds',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
