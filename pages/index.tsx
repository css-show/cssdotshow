// import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/components/date';
import Layout, { siteTitle } from '@/components/layout';
// import styles from '@/styles/Home.module.scss';
import utilStyles from '@/styles/utils.module.scss';
// import { getAllPostIds, getSortedPostsData } from '@/lib/posts';
import { getApolloClient } from '@/lib/apollo';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query GetLaunches {
    launchesPast(limit: 50) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
`;

// interface LaunchesItem {
//   id: string;
//   mission_name: string;
//   launch_date_local: string;
//   launch_site: {
//     site_name_long: string;
//   };
//   links: {
//     article_link: string;
//     video_link: string;
//     mission_patch: string;
//   };
//   rocket: {
//     rocket_name: string;
//   };
// }

// export interface HomeProps {
//   launches: LaunchesItem[];
// }

const Home = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const launches = data.launchesPast || [];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {launches.map(({ id, mission_name, launch_date_local }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{mission_name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={launch_date_local} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

// export async function getStaticProps() {
//   // const allPostsData = getSortedPostsData();
//   const apolloClient = getApolloClient({});
//   // console.info('ApolloClient: ', apolloClient);
//   const { data, loading, error } = await apolloClient.query({
//     query: gql`
//       query GetLaunches {
//         launchesPast(limit: 10) {
//           id
//           mission_name
//           launch_date_local
//           launch_site {
//             site_name_long
//           }
//           links {
//             article_link
//             video_link
//             mission_patch
//           }
//           rocket {
//             rocket_name
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       launches: data.launchesPast,
//     },
//   };
// }

export default Home;
