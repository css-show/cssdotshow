import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Layout from '@/components/layout';
import Date from '@/components/date';
import utilStyles from '@/styles/utils.module.scss';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { id } }) => {
  const postData = await getPostData(id);

  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="container mx-auto px-5">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
