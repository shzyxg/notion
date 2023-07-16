import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e6e211b366844b54bd81ec0a1008af85',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '木桩港',
  domain: 'https://muzhuanggang.notion.site/e6e211b366844b54bd81ec0a1008af85?pvs=25',
  author: '木桩港',

  // open graph metadata (optional)
  description: 'Hi，我是arvin，这是一个基于Notion搭建的网站',

  // social usernames (optional)
  zhihu: 'muzhuanggang',
  instagram: 'muzhuanggang',
  twitter: 'muzhuanggang',
  github: 'muzhuanggang',
  // linkedin: '',
  // instagram: 'onet2lee',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
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
 //  navigationStyle: 'default'
  navigationStyle: 'custom',
 navigationLinks: [
   {
       title: 'About',
       pageId: '462a958ffddb4a02835a29a8a0d658ba'
     },
     {
       title: 'Contact',
       pageId: 'd922bb529139441babd306db38474c37'
     },
  ]
