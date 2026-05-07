import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mt-12 py-8 text-center text-sm text-gray-500">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">© {currentYear} Purven Consulting. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
