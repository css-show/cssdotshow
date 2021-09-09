// import { ReactNode } from 'react';
import { title } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';

export interface FooterProps {
  // children?: ReactNode;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              priority
              src="/images/profile.svg"
              className="w-10 h-10 text-white p-2 rounded-full"
              height={40}
              width={40}
              alt={title}
            />
            <span className="ml-3 text-xl font-black">{title}</span>
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 {title}
        </p>
        <p className="text-sm text-right text-gray-500 sm:pl-4 sm:py-2 sm:mt-0 mt-4 sm:ml-auto">
          京ICP备16043114号-9
          <br />
          Powered by{' '}
          <Link href="https://webify.cloudbase.net/">
            <a>CloudBase Webify</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
