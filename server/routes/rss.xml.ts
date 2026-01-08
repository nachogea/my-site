import { queryCollection } from '#imports'

interface BlogPost {
  path: string
  title: string
  description?: string
  date?: string
  tags?: string[]
}

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .order('date', 'DESC')
    .all() as BlogPost[]

  const siteUrl = 'https://ignaciogea.com' // Update with your actual domain
  const feedTitle = 'Ignacio Gea - Blog'
  const feedDescription = 'Career insights, lessons learned, and reflections on the software engineering journey.'

  const rssItems = posts.map((post: BlogPost) => {
    const postUrl = `${siteUrl}${post.path}`
    const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.description || ''}]]></description>
      ${post.tags?.map((tag: string) => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${siteUrl}</link>
    <description>${feedDescription}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  setResponseHeader(event, 'content-type', 'application/xml')
  return rss
})
