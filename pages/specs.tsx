import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';

export default function Specs() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>标准</h1>
    </Layout>
  );
}
