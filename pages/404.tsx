import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>页面没找到</title>
      </Head>
      <section className="filter drop-shadow-lg animate-pulse">
        <h1 className="">404 - Page Not Found</h1>
        <Link href="/">回到首页</Link>
      </section>
    </Layout>
  );
}
