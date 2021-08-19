import Head from 'next/head';
import { title } from '@/lib/config';
import Layout from '@/components/layout';

export default function Specs() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>标准</h1>
    </Layout>
  );
}
