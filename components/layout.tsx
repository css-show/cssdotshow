import { ReactNode, FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '@/styles/utils.module.scss';
import Link from 'next/link';

const name = 'The CSS Show';
export const siteTitle = 'The CSS Show';

export interface LayoutProps {
  home?: boolean;
  children?: ReactNode;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.svg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.svg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}