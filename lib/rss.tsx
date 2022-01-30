import { Post } from './posts';
import { title, slogan } from '@/lib/config';

const AUTHOR = '张赫';
const EMAIL = 'zhanghecool@outlook.com';
const PODCAST_NAME = title;
const SITE_URL = 'https://css.show';
const DESCRIPTION = slogan;
const LANGUAGE = 'zh';
const CATEGORY = 'Technology';
const TYPE = 'serial'; // episodic，serial
const PODCAST_IMAGE = 'https://css.show/images/profile.jpg';
// const PODCAST_IMAGE =
//   'https://cdn.jsdelivr.net/gh/css-show/cssdotshow@gh-pages/images/profile.jpg';
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
        <![CDATA[${description || title}]]>
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
): string => `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:anchor="https://anchor.fm/xmlns">
  <channel>
    <title><![CDATA[${PODCAST_NAME}]]></title>
    <description><![CDATA[${DESCRIPTION}]]></description>
    <link>${SITE_URL}</link>
    <image>
      <url>${PODCAST_IMAGE}</url>
      <title>${PODCAST_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
    <itunes:image href="${PODCAST_IMAGE}" />
    <language>${LANGUAGE}</language>
    <itunes:category text="${CATEGORY}" />
    <itunes:explicit>false</itunes:explicit>
    <itunes:author>
      <![CDATA[${AUTHOR}]]>
    </itunes:author>
    <itunes:summary>
      <![CDATA[${DESCRIPTION}]]>
    </itunes:summary>
    <itunes:type>${TYPE}</itunes:type>
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
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml"/>
    <itunes:subtitle>
      <![CDATA[${PODCAST_NAME}]]>
    </itunes:subtitle>
    ${posts.map(generateRssItem).join('')}
  </channel>
</rss>
`;

export default generateRss;
