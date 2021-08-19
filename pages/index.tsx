import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { title, slogan } from '@/lib/config';
import Date from '@/components/date';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.scss';
import { getSortedPostsData } from '@/lib/posts';
import generateRss from '@/lib/rss';

const publicRssDirectory = path.join(process.cwd(), 'public', 'rss.xml');
const Home = ({ allPostsData }) => {
  // const { t } = useTranslation('common');
  // console.info('T("title"): ', t('title'));

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                {slogan}
              </h1>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            priority
                            src="/images/ho1.jpg"
                            className="w-full h-full object-center object-cover"
                            alt="头图"
                            layout="fill"
                          />
                        </div>
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho2.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho3.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho4.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho5.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho5.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="relative w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            priority
                            src="/images/ho7.jpg"
                            alt="头图"
                            layout="fill"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/search/">
                  <a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                    搜索文章
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-5">
        <h2 className={utilStyles.headingLg}>最新文章</h2>
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

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  const rss = await generateRss(allPostsData);

  fs.writeFileSync(publicRssDirectory, rss);
  console.info('Locale: ', locale);

  return {
    props: {
      allPostsData,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
