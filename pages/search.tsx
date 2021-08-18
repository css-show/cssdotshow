import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>搜索</h1>
    </Layout>
  );
}
