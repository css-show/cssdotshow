import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Layout from '@/components/layout';
import { gql } from '@apollo/client';
import Date from '@/components/date';
import { getApolloClient } from '@/lib/apollo';
import utilStyles from '@/styles/utils.module.scss';

const QUERY = gql`
  query GetLaunches($id: ID!) {
    launch(id: $id) {
      id
      mission_id
      mission_name
      details
      launch_success
      launch_date_utc
      is_tentative
      launch_date_local
      launch_date_unix
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
      }
      static_fire_date_unix
      static_fire_date_utc
      telemetry {
        flight_club
      }
      tentative_max_precision
      upcoming
    }
  }
`;

const QUERYLIST = gql`
  query GetLaunchesID {
    launchesPast(limit: 10) {
      id
    }
  }
`;

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
