import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Layout from '@/components/layout';
import { useQuery, gql } from '@apollo/client';
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
  // const paths = getAllPostIds();

  const apolloClient = getApolloClient({});
  const { data, loading, error } = await apolloClient.query({
    query: QUERYLIST,
  });
  // Get the paths we want to pre-render based on posts
  const paths = data.launchesPast.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { id } }) => {
  const apolloClient = getApolloClient({});
  const { data, loading, error } = await apolloClient.query({
    query: QUERY,
    variables: {
      id,
    },
  });

  return {
    props: {
      launch: data.launch,
      loading: loading || false,
      error: error || null,
    },
  };
};

export default function Post({ launch, loading, error }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{launch.mission_name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {launch.launch_site.site_name_long}
        </h1>
        <div className={utilStyles.lightText}>
          <Date dateString={launch.launch_date_utc} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: launch.details }} />
      </article>
    </Layout>
  );
}
