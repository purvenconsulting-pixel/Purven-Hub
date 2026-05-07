import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {currentYear} Purven Consulting. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
