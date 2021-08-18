// import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const name = 'The CSS Show';
export const siteTitle = 'The CSS Show';

export interface HeaderProps {
  // children?: ReactNode;
}

export default function Header({}: HeaderProps) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              priority
              src="/images/profile.svg"
              className="w-10 h-10 text-white p-2 rounded-full"
              height={40}
              width={40}
              alt={name}
            />
            <span className="ml-3 text-xl font-black">{siteTitle}</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/guides/">
            <a className="mr-5 hover:text-gray-900">指南</a>
          </Link>
          <Link href="/specs/">
            <a className="mr-5 hover:text-gray-900">标准</a>
          </Link>
        </nav>
        <Link href="/search/">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            搜索
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
