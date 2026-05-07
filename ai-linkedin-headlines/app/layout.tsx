import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'AI LinkedIn Headline Generator | Purven Hub',
  description: 'Create high-converting, professional LinkedIn headlines that attract recruiters and clients.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
