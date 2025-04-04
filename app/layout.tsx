import { Metadata } from 'next';
import '../styles/globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: 'DrivePay - %s',
    default: 'DrivePay test3', // a default is required when creating a template
  }
}