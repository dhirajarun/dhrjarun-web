import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
  const writing = await getCollection('posts', ({ data }) => {
    if (data.draft) {
      return false;
    }

    return data?.category === 'writing';
  });
    
  });

  return rss({
    title: 'Dhiraj Arun',
    description: '',
    site: context.site,
    items: writing.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      link: `/writing/${post.id}`,
      content: sanitizeHtml(post.rendered.html),
    })),
  });
}
