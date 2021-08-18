import { ReactNode, FC } from 'react';
import Header from './header';
import Footer from './footer';

const name = 'The CSS Show';
export const siteTitle = 'The CSS Show';

export interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
