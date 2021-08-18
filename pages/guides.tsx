import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>指南</h1>
    </Layout>
  );
}
