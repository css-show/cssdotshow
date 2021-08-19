import Head from 'next/head';
import Link from 'next/link';
// import { title } from '@/lib/config';
import Layout from '@/components/layout';

export default function Offline() {
  return (
    <Layout>
      <Head>
        <title>页面离线中</title>
      </Head>
      <section className="filter drop-shadow-lg animate-pulse">
        <h1 className="">页面离线中...</h1>
        <Link href="/">回到首页</Link>
      </section>
    </Layout>
  );
}
