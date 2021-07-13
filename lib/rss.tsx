import { Post } from './posts';

const AUTHOR = '张赫';
const EMAIL = 'zhanghecool@outlook.com';
const PODCAST_NAME = 'The CSS Show';
const SITE_URL = 'https://css.show';
const DESCRIPTION = '只需要一分钟就能学会，却要用一辈子的时间去精通。';
const LANGUAGE = 'zh-cn';
const CATEGORY = 'Technology';
const PODCAST_IMAGE =
  'https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/images/profile.png';
const generateRssItem = ({
  title,
  audioUrl,
  audioLength,
  audioTime,
  audioType,
  audioTypeName,
  image = PODCAST_IMAGE,
  id,
  date,
  description,
  explicit,
  episode,
  season,
}: Post): string => `
    <item>
      <title><![CDATA[${title || ''}]]></title>
      <enclosure url="${audioUrl}" type="${audioType || 'audio'}/${
  audioTypeName || 'mpeg'
}" length="${audioLength}" />
      ${image ? `<itunes:image href="${image}"></itunes:image>` : ''}
      <guid>${SITE_URL}/posts/${id}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>
        <![CDATA[${description || 'CSS Show'}]]>
      </description>
      <link>${SITE_URL}/posts/${id}</link>
      <itunes:explicit>${explicit || 'false'}</itunes:explicit>
      <itunes:author>
        <![CDATA[${AUTHOR}]]>
      </itunes:author>
      <itunes:subtitle>
        <![CDATA[${title || ''}]]>
      </itunes:subtitle>
      ${audioTime ? `<itunes:duration>${audioTime}</itunes:duration>` : ''}
      ${episode ? `<itunes:episode>${episode}</itunes:episode>` : ''}
      ${season ? `<itunes:season>${season}</itunes:season>` : ''}
    </item>
`;

const generateRss = (
  posts: Post[]
): string => `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${PODCAST_NAME}]]></title>
    <description><![CDATA[${DESCRIPTION}]]></description>
    <itunes:image href="${PODCAST_IMAGE}" />
    <language>${LANGUAGE}</language>
    <itunes:category text="${CATEGORY}" />
    <itunes:explicit>false</itunes:explicit>
    <itunes:author>
      <![CDATA[${AUTHOR}]]>
    </itunes:author>
    <link>${SITE_URL}</link>
    <itunes:owner>
      <itunes:name>
        <![CDATA[${AUTHOR}]]>
      </itunes:name>
      <itunes:email>
        <![CDATA[${EMAIL}]]>
      </itunes:email>
    </itunes:owner>
    <copyright>
      <![CDATA[${AUTHOR} @${PODCAST_NAME}]]>
    </copyright>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <itunes:subtitle>
      <![CDATA[${PODCAST_NAME}]]>
    </itunes:subtitle>
    <itunes:summary>
      <![CDATA[${DESCRIPTION}]]>
    </itunes:summary>
    ${posts.map(generateRssItem).join('')}
  </channel>
</rss>
`;

export default generateRss;
