import Head from 'next/head';
import { title } from '@/lib/config';
import Layout from '@/components/layout';

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>指南</h1>
    </Layout>
  );
}
