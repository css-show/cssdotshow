import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/components/date';
import Layout, { siteTitle } from '@/components/layout';
// import styles from '@/styles/Home.module.scss';
import utilStyles from '@/styles/utils.module.scss';
import { getAllPostIds, getSortedPostsData } from '@/lib/posts';
import generateRss from '@/lib/rss';

const publicRssDirectory = path.join(process.cwd(), 'public', 'rss.xml');
const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>只需要一分钟就能学会，却要用一辈子的时间去精通</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const rss = await generateRss(allPostsData);

  fs.writeFileSync(publicRssDirectory, rss);

  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
