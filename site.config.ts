/*
 * @Author: i1mT
 * @Date: 2022-10-28 10:15:43
 * @LastEditors: i1mT
 * @LastEditTime: 2022-10-28 21:32:54
 * @Description:
 * @FilePath: \nextjs-notion-starter-kit\site.config.ts
 */
import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0700998eb9004eb197ffb993c7bbf2e9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "日光倾城",
  domain: 'https://iimt.notion.site/Blog-0700998eb9004eb197ffb993c7bbf2e9',
  author: 'iimT',

  // open graph metadata (optional)
  description: 'Technology sharing & Digital knowledge base.',

  // social usernames (optional)
  twitter: '',
  github: 'i1mT',
  linkedin: '#',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '61fdd8cbd1a74d2790d61804fe02930b'
    }
  ]
})
