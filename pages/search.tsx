import Head from 'next/head';
import { title } from '@/lib/config';
import Layout from '@/components/layout';

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>搜索</h1>
    </Layout>
  );
}
